import Header from './Components/Header'
import Carousel from './Components/Carousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='body'>
        <Carousel/>
      </div>
    </div>
  );
}

export default App;
