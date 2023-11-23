import React from "react";
import axios from 'axios'

const ProductCard = ({ props }) => {



  const handleCart=async(data)=>{
    try {
      const res = await axios.post("http://localhost:5000/cart",data)
      if(res.status===201){
        alert(data.pname+" added to cart")
      }
    } catch (error) {
      alert("something went wrong ... 404 error")
    }
  }


  return (
    <div key={props.id} className="container">
      <img src={props.pimg} alt={props.id} />
      <h5>{props.pname}</h5>
      <p>{props.pdesc}</p>
      <span>
        {" "}
        <b>₹{props.pprice}</b> | {props.pcate}{" "}
      </span>
      <br />
      <button onClick={()=>handleCart(props)} >CART+</button>
    </div>
  );
};

export default ProductCard;
