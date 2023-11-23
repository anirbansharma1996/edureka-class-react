import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import CartCard from "./CartCard";
import { UpdateContext } from "../../context/updateContext";

const Cart = () => {
  const [cartdata, setCartdata] = useState([]);
  const [loading, setloading] = useState(false);
  const {count} = useContext(UpdateContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const res = await axios.get("http://localhost:5000/cart");
        setloading(false);
        setCartdata(res.data);
      } catch (error) {
        setloading(false);
        alert("something went wrong ... 500 error");
      }
    };
    fetchData();
  }, [count]);

  return (
    <div>
      <h3>CART</h3>
      <div className="main-container">
        {cartdata.map((el) => (
          <CartCard props={el} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
