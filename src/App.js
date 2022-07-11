

import './App.css';
import { useState} from 'react';

function App() {
  return (
    <div className="Parent_box">
      <FotoProduct />
      <ProductInfo name ="Air Jordan 3" categories="LifeStyle" price = "11.299.900" />
    </div>
  );
}

function FotoProduct() {
  return (
    <div className="Foto">
      <img src="shoes.png" />
    </div>
  );
}
function CheckDiscount() {
  const [isDiscount, setIsDiscount] = useState(false)
  return (<p>{ isDiscount ? setIsDiscount : "mamamama"}</p>);
   }

function ProductInfo(props) {
  const {name, categories, price } = props;

  return (
      <div className="Deskripsi">
        <p className="Cate">{ categories }</p>
      <h1 className="Title"> { name }</h1>
        <p className="Price">IDR { price }</p>
        <p className="Info">
          One the most recognizable in the MW collection,
          the Air Jordan 3 Retro features lightweight,
          visible cushioning just like the original from '88.
          Signature details and materials celebrate the game-changing icon.
      </p>
      <a onClick= {(e) => AddCart(e, name)} href="#">Add To Cart</a>
      </div>
  );
}
function AddCart(e) {
  return console.log("Membeli "+e)
}


export default App;
