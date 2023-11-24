import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Form from './pages/Form'
import Blog from './pages/blog/Blog'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Form/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='*' element={<Blog/>}></Route>
    </Routes>
  )
}

export default Allroutes