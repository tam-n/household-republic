import Header from './Components/Header'
import Carousel from './Components/Carousel';
import ProductsCard from './Components/ProductsCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='body'>
        <Carousel/>
        <ProductsCard/>
      </div>
    </div>
  );
}

export default App;
