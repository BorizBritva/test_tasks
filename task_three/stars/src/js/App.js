import Stars from '../js/Stars'

function App() {
  const data=require('../data/etsy.json')

  return (
    <Stars count={5}/>
  )
}

export default App;
