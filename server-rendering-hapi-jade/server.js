'use strict'

import hapi from 'hapi';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import { routes } from './routes';

const server = new hapi.Server();

server.connection({host: 'localhost', port: 3000});

const indexHandler = function (req, reply) {
console.log(req.url);
    // routes is our object of React routes defined above
    match({ routes, location: req.url }, (err, redirectLocation, props) => {
      if (err) {
        // something went badly wrong, so 500 with a message
        res.status(500).send(err.message);
      } else if (redirectLocation) {
        // we matched a ReactRouter redirect, so redirect from the server
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (props) {
        // if we got props, that means we found a valid component to render
        // for the given route
        const markup = renderToString(<RouterContext {...props} />);

        // render `index.ejs`, but pass in the markup we want it to display
        reply.view('index', {
            message: markup
        });

      } else {
        // no route match, so 404. In a real app you might render a custom
        // 404 view here
        res.sendStatus(404);
      }
    });


};

server.register(require('vision'), (err) => {

    if (err) {
        throw err;
    }

    server.views({
        engines: { jade: require('jade') },
        path: __dirname + '/templates',
        compileOptions: {
            pretty: true
        }
    });

    server.route({ method: 'GET', path: '/{path*}', handler: indexHandler });
});

server.start((err) => {
  if(err){
    throw err;
  }
  console.log('Server running');
});
