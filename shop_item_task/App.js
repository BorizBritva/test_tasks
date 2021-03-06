import logo from './logo.svg';
import './App.css';
import './style/main.css';
import PropTypes from 'prop-types';
//import ShopItemFunc from './components/shop_item_func';
import ShopItemClass from './components/shop_item_func';

function App(r) {

  const item = {
    brand: "Tiger of Sweden",
    title: "Leonard coat",
    description: "Minimalistic coat in cotton-blend",
    descriptionFull: "Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: "£"
  }

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
//        <ShopItemFunc item={item} />
          <ShopItemClass item={item} />
      </div>
    </div>
  );
}

export default App;
