import { Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

import Layout from "./components/Layout";

import AddProduct from "./pages/AddProduct";
import ProductList from './pages/ProductList';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
          <Route path="/" element={<Layout />} >
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/list-product" element={<ProductList />} />
          </Route>
          
        </Routes>
    </>
    
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //     <p className="">
  //                   This is example for using button with
  //                   bootstrap styling
  //               </p>
  //               <a
  //                   className="btn btn-primary"
  //                   data-bs-toggle="collapse"
  //                   href="#collapseExample"
  //                   role="button"
  //                   aria-expanded="false"
  //                   aria-controls="collapseExample"
  //               >
  //                   Bootstrap button
  //               </a>
  //     </header>
  //   </div>
  // );
}

export default App;
