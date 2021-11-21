import './App.css';
import './Card.js';
import Card from './Card.js';

function App() {

  const cards = [
    {id: 1, name: 'Dark Armed Dragon SDDC-EN012', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/22078.jpg', price: 19.9},
    {id: 2, name: 'Blue-Eyes White Dragon', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/2184.jpg', price: 39.9},
    {id: 3, name: 'Trishula, Dragon of the Ice Barrier BLVO-EN100', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/61532.jpg', price: 4489.99},
    {id: 4, name: 'Black Luster Soldier - Soldier of Chaos BLHR-EN046', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/53863.jpg', price: 1999.99},
    {id: 5, name: 'Level Up! SS05-ENB22', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/61036.jpg', price: 999.99},
    {id: 6, name: 'Nightmare Wheel SS05-ENB27', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/61042.jpg', price: 999.9},
    {id: 7, name: 'Helpoemer SS05-ENB13', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/61018.jpg', price: 999.9},
    {id: 8, name: 'Number 107: Galaxy-Eyes Tachyon Dragon MAGO-EN062', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/59712.jpg', price: 8.99},

  ];
  
  return (
    <div className="App">
      <header className="App-header">
        {renderCardList(cards)}
      </header>
    </div>
  );
}

function renderCardList(cards){

  const list = cards.map(card => {
    return <Card info={card} />
  });


  return (
    <div class = "container">
      {list}
    </div>
  );

}

export default App;
