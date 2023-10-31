import { useState, useEffect } from "react";
import ProductCard from "./productCard";
const URL = "https://fakestoreapi.com/products";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        const response = await fetch(URL);
        const data = await response.json();
        setLoading(false);
        setProducts(data);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };
    fetchdata();
  }, []);

  if (loading) {
    return (
      <>
        <div className="spinner-grow" role="status">
          <span classNmae="visually-hidden"></span>
        </div>
        
      </>
    );
  }

  return (
    <div className="container">
      <h1>PRODUCTS</h1>
      <div className="product-container">
        {products.map((el) => (
          <ProductCard props={el} />
        ))}
      </div>
    </div>
  );
}
