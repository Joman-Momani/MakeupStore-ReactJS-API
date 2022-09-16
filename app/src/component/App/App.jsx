import React from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Notfound from '../Notfound/Notfound'
import Footer from '../Footer/Footer'
import Product from '../Product/Product'
import Delivary from '../Delivary/Delivary'
import { Routes,Route } from 'react-router-dom'
import { MediacontextProvider } from '../MContext/Context'
export default function App() {
  return (
   <>
   <div className="c">
   <Navbar/>
  
   <MediacontextProvider>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='Home' element={<Home/>}></Route>
    <Route path='About' element={<About/>}></Route>
    <Route path='Product' element={<Product/>}></Route>
    <Route path='Delivary' element={<Delivary/>}></Route>
    <Route path='Login' element={<Login/>}></Route>
    <Route path='Register' element={<Register/>}></Route>
    <Route path='*' element={<Notfound/>}></Route>
    </Routes>
    </MediacontextProvider>


<Footer/>
   </div>
 
   </>
  )
}

