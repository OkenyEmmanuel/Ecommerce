import Navbar from './component/Navbar';
import Products from './component/Products';
import Home from './component/Home';
import Product from './component/Product';
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />}/>
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}


export default App;
