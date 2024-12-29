import React from 'react'
import { BrowserRouter, Routes,Route } from "react-router";

import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'


const MyRoutes = () => {




  return (
  <div>

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/detail/:id' element={<ProductDetails/>}/>


</Routes>

  </div>
  )
}

export default MyRoutes