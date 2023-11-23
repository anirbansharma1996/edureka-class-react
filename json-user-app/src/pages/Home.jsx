import React, { useState } from "react";
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState({
    pname: "",
    pdesc: "",
    pcate: "",
    pprice: "",
    pimg: "",
  });

  
  const handleInput=(e)=>{
    const {name,value} = e.target 
    setProducts({...products,[name]:value})
  }

   const handleSubmit=async(e)=>{
      e.preventDefault()
       try {
        const res = await axios.post("http://localhost:5000/products",products)
        if(res.status===201){
          alert("Product Uploaded successfully")
          setProducts({
            pname: "",
            pdesc: "",
            pcate: "",
            pprice: "",
            pimg: "",
          })
        }
       } catch (error) {
         alert('Something went Wrong ... 404 error')
       }
   }

  return (
    <div className="form-div">
      <h1>ADD PRODUCTS</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} name="pname" value={products.pname} placeholder="product name" />
        <input type="text" onChange={handleInput} name="pdesc" value={products.pdesc} placeholder="description" />
        <input type="number" onChange={handleInput} name="pprice" value={products.pprice} placeholder="price" />
        <input type="url" onChange={handleInput} name="pimg" value={products.pimg}placeholder="image link" />
        <input type="text" onChange={handleInput} name="pcate" value={products.pcate} placeholder="category" />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default Home;
