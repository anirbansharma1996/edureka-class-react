import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'


const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
    </Routes>
    
  )
}

export default Allroutes