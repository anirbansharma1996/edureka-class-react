import { useState, useEffect } from "react";
import ProductCard from "./productCard";
const URL = "https://fakestoreapi.com/products";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(URL);
        const data = await response.json();
        setIsLoading(false)
        setProducts((prev) => data);
      } catch (error) {
        setIsLoading(false)
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  if(isLoading){
    return <span>Loading....</span>
  }

  return (
    <div className="products-container">
     {products.map((el)=>(<ProductCard props={el}/>))} 
    </div>
  );
}
