import {Route,Routes} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Signup from "./pages/signup"

export default function AllRoutes(){
    return(
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    )
}