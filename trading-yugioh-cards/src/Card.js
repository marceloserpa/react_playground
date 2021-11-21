import './Card.css';

function Card(props) {
  return (
    <div className="Card">
        <h3 class="display-5">{props.info.name}</h3>
        <img src={props.info.picture} />
        <p className="price">price: R$ {props.info.price}</p>
        <button class="btn btn-primary">Buy #ID {props.info.id}</button>
    </div>
  );
}

export default Card;
