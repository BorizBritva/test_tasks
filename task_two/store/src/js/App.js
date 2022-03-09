import logo from './logo.svg';
import './App.css';
import Store from "./Store";

function App({layout, products}) {

  return (
    <Store products={products}/>
  );
}

export default App;
