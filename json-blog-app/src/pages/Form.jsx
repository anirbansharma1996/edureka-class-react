import React, { useState } from "react";
import axios from 'axios'

const Form = () => {
 const [data,setData] = useState({
  content:""
 })
 const handleInput = (e)=>{
  const {name , value } = e.target 
  setData({...data,[name]:value})
 }

 const handlePost=async()=>{
   try {
    const res = await axios.post("http://localhost:8008/posts",data)
    if(res.status===201){
      alert("Blog Posted...")
      setData({
        content:""
       })
    }
    
   } catch (error) {
    alert("something went wrong ... 404 Error")
   }
 }

  return (
    <div className="form">
      <h4 style={{textAlign:"center"}}>Write Your Content Here</h4>
      <textarea
        placeholder="enter your thought here.."
        name="content"
        value={data.content}
        onChange={handleInput}
        cols="65"
        rows="10"
      ></textarea>
      <button onClick={handlePost}>POST</button>
     
    </div>
  );
};

export default Form;
