import Header from './Components/Header'
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage'
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App w-full overflow-hidden">
      <Header/>
      <div className='body'>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='products' element={<ProductsPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
