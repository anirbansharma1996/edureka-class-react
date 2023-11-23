import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Home />}></Route>
    </Routes>
  );
}
