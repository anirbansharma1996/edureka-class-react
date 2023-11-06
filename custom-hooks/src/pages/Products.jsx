import React from "react";
import useFetch from "../customhooks/Fetchhook.js";

const Products = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {data.map((el) => (
        <p>{el.category}</p>
      ))}
    </div>
  );
};

export default Products;
