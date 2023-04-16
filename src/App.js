import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import JensonProduct from './pages/JensonProduct';
import DeonProduct from './pages/DeonProduct';
import KrishaProduct from './pages/KrishaProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/JensonProduct' element={<JensonProduct />} />
        <Route path='/products/DeonProduct' element={<DeonProduct />} />
        <Route path='/products/KrishaProduct' element={<KrishaProduct />} />
      </Routes>

    </div>
  );
}

export default App;
