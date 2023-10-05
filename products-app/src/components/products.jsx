import { useState } from "react";

export default function Products() {
  const [text,setText] = useState("")
  const [array,setArray] = useState([])
   
  const handleInput=(e)=>{
    setText(e.target.value)
  }
  const handleAdd=()=>{
    setArray([...array,text])
  }
  console.log(array)

  return (
  <div>
    <input type="text" onChange={handleInput} />
    <button onClick={handleAdd}>ADD</button>

  </div>
  );
}
