import { useState } from "react";

export default function Products() {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleInput = (e) => {
    setText(e.target.value);
  };
  const handleAdd = () => {
    if (text === "") {
      alert("enter something first");
    } else {
      setArray([...array, text]);
      setText("");
    }
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <input type="text" value={text} onChange={handleInput} />
      <button onClick={handleAdd}>ADD</button>
      <ol>
        {array.map((el) => (
          <li>{el}</li>
        ))}
      </ol>
    </div>
  );
}
