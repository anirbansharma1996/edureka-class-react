import React from "react";

const ProductCard = ({ props }) => {

  return (
    <div key={props.id} className="container">
      <img src={props.pimg} alt={props.id} />
      <h5>{props.pname}</h5>
      <p>{props.pdesc}</p>
      <span>
        {" "}
        <b>{props.pprice}</b> | {props.pcate}{" "}
      </span>
    </div>
  );
};

export default ProductCard;
