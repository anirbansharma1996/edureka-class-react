import { useEffect, useState } from "react";
import ProductsCard from "./productsCard";
const URL = "https://fakestoreapi.com/products";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(URL);
      const products = await res.json();
      setData((prev) => products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        {data.map((el) => (
          <ProductsCard props={el} />
        ))}
      </div>
    </>
  );
}
