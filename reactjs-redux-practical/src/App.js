import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Layout from './components/Layout';

import AddProduct from './pages/AddProduct';
import ProductList from './pages/ProductList';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/list-product" element={<ProductList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
