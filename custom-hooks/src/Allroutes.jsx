import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Counter from './pages/Counter'
import Products from './pages/Products'
import User from './pages/User'

const Allroutes = () => {
  return (
   <Routes>
     <Route path='/couter' element={<Counter/>}></Route>
     <Route path='/products' element={<Products/>}></Route>
     <Route path='/users' element={<User/>}></Route>
     <Route path='*' element={<Counter/>}></Route>
   </Routes>
  )
}

export default Allroutes