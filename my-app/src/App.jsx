//import './App.css'
import {Routes,Route} from 'react-router-dom'
import { useState,useEffect } from 'react'
import HomePage from './page/HomePage'
import DetailPage from './page/DetailPage'
import Dashboard from './page/admin/dashboard'
import AddProductPage from './page/admin/add_product'
import UpdateProductPage from './page/admin/update_product'
import ProductPage from './page/admin/productPage'
function App() {
 const [product,setProducts]=useState([])
 useEffect(()=>{
  fetch('http://localhost:3000/products')
  .then(response=>response.json())
  .then(data=>setProducts(data))
 },[])
 const AddProduct=(value)=>{
  fetch('http://localhost:3000/products',{
    method:'POST',
    headers:{
        'content-Type':'application/json'
    },
    body:JSON.stringify(value)
  })
  
 }
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage products={product}/>}/>
        <Route path='detail/:id' element={<DetailPage products={product}/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>} />
        <Route path='/admin/product' element={<ProductPage products={product} />} />
        <Route path='/admin/product/add' element={<AddProductPage add={AddProduct} />} />
        <Route path='/admin/product/:id/update' element={<UpdateProductPage />} />
      </Routes>
    </>
  )
}

export default App
