import './App.css';
import './Card.js';
import Card from './Card.js';

function App() {

  const cards = [
    {id: 1, name: 'Dark Armed Dragon SDDC-EN012', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/22078.jpg', price: 19.9},
    {id: 2, name: 'Blue-Eyes White Dragon', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/2184.jpg', price: 39.9},
    {id: 3, name: 'Trishula, Dragon of the Ice Barrier BLVO-EN100', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/61532.jpg', price: 4489.99},
    {id: 4, name: 'Black Luster Soldier - Soldier of Chaos', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/53863.jpg', price: 1999.99},
    {id: 5, name: 'Level Up! SS05-ENB22', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/61036.jpg', price: 999.99},
    {id: 6, name: 'Nightmare Wheel SS05-ENB27', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/61042.jpg', price: 999.9},
    {id: 7, name: 'Helpoemer SS05-ENB13', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/61018.jpg', price: 999.9},
    {id: 8, name: 'Number 107: Galaxy-Eyes Tachyon Dragon', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/59712.jpg', price: 8.99},
    {id: 9, name: 'Legendary Six Samurai - Shi En RYMP-ENSE1', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/23827.jpg', price: 36.99},
    {id: 10, name: 'Hieratic Sun Dragon Overlord of Heliopolis', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/25130.jpg', price: 24.99},
    {id: 11, name: 'Cyber Twin Dragon LED3-EN018', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/50502.jpg', price: 1.84},
    {id: 12, name: 'Elemental HERO Flame Wingman RYMP-EN016', picture: 'https://www.solosagrado.com.br/images/produtos/w200/h292/22158.jpg', price: 68.90},
  ];
  
  return (
    <div className="App">

      <body>
        {renderCardList(cards)}
      </body>
    </div>
    
  );
}

function renderCardList(cards){

  const list = cards.map(card => {
    return <Card info={card} />
  });


  return (
    <div class = "container">
      <div class="row">
         {list}
      </div>
    </div>
  );

}



export default App;
