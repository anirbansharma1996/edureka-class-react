import axios from "axios";
import React ,{useContext}from "react";
import { UpdateContext } from "../../context/updateContext";

const CartCard = ({ props }) => {
    const {count,handleCount} = useContext(UpdateContext)
    console.log(count)

  const handleDelete = async (id) => {
    const bool = window.confirm("are you sure ? ");
    if (bool===true) {
      try {
          await axios.delete(`http://localhost:5000/cart/${id}`);
         handleCount(count+1)
      } catch (error) {
        alert("500 error ...");
      }
    }
  };

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
      <button onClick={() => handleDelete(props.id)}>REMOVE</button>
    </div>
  );
};

export default CartCard;
