import Header from './Components/Header'
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage'
import ContactPage from './Pages/ContactPage'
import About from './Components/About'
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App w-full">
      <Header/>
      <div className='body'>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='products' element={<ProductsPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
        </Routes>
      </div>
      <About/>
    </div>
  );
}

export default App;
