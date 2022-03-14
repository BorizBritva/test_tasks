import './main.css';
import Listing from './js/Listing'

function App() {
  const data=require('./data/etsy.json')

  return (
    <Listing items={data}/>
  )
}

export default App;
