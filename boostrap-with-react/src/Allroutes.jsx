import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products/products";
import Register from "./pages/register";
import Login from "./pages/login";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Home />}></Route>
    </Routes>
  );
}
