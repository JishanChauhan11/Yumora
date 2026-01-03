import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import women_banner from './Components/Assets/banner_women.png'
import men_banner from './Components/Assets/banner_mens.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/coffee' element={<ShopCategory banner={men_banner} category="coffee" />} />
          <Route path='/energy' element={<ShopCategory banner={women_banner} category="energy" />} />
          <Route path='/hydration' element={<ShopCategory banner={kid_banner} category="hydration" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;