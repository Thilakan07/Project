import { useState } from 'react'
import Login from './Components/Admin/Login/Login'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Category from './Components/Admin/Category/Category';
import HOme from './Components/Admin/Home/Home';

import ProductForm from './Components/Admin/Product/Product';



function App() {
  return (

   <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
     <Route path="/home" element={<HOme/>} />
     <Route path="/category" element={<Category/>} />
     <Route path="/product" element={<ProductForm/>}/>
  </Routes>
</BrowserRouter>


  );
}

export default App;