import Header from './Components/Header'
import Carousel from './Components/Carousel';
import ProductsCard from './Components/ProductsCard';
import About from './Components/About'
import ProductUses from './Components/ProductUses'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='body'>
        <Carousel/>
        <ProductsCard/>
        <ProductUses/>
        <About/>
      </div>
    </div>
  );
}

export default App;
