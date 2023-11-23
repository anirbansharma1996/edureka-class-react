import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Products = () => {
  const [produts, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/products");
        setLoading(false);
        setProducts(res.data);
      } catch (error) {
        setLoading(false);
        alert("something went wrong ... 500 error");
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{textAlign:"center"}}>
      <h2>ALL PRODUCTS</h2>
      {loading && <h4>Loading...</h4>}
      <div className="main-container">
        {produts?.map((el) => (
          <ProductCard props={el} />
        ))}
      </div>
    </div>
  );
};

export default Products;
