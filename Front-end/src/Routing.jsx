import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'

import men_banner from "../src/components/assets/banner_mens.png";
import women_banner from "../src/components/assets/banner_women.png";
import kids_banner from "../src/components/assets/banner_kids.png";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route
          path="/mens"
          element={<ShopCategory banner={men_banner} category="men" />}
        ></Route>
        <Route
          path="/womens"
          element={<ShopCategory banner={women_banner} category="women" />}
        ></Route>
        <Route
          path="/kids"
          element={<ShopCategory banner={kids_banner} category="kid" />}
        ></Route>
        <Route path="/product" element={<Product />}>
          <Route path=":id" element={<Product />}></Route>
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<LoginSignup />}></Route>
      </Routes>
    </div>
  );
}

export default Routing