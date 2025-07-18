import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import ListProduct from './components/ListProduct'
import Front from "./components/Front";

function Routing() {
  return (
    <div className='w-full'>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />

        </Routes>
    </div>
  )
}

export default Routing