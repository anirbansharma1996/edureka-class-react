import { useState } from "react";

export default function Blog() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("blogs")) || []
  );

  const handleDelete = (index) => {
    console.log(index);
    const localdata = JSON.parse(localStorage.getItem("blogs"));
    const updatedlist = localdata.filter((el, i) => i !== index);
    localStorage.setItem("blogs", JSON.stringify(updatedlist));
    setData(updatedlist);
  };

  return (
    <>
      <div className="blogs">
        <h3>Blogs</h3>
        <div className="all-blogs">
          {data.map((el, index) => (
            <div className="solo-blogs" key={index}>
              <h5>{el.title}</h5>
              <p>{el.description}</p>
              <button onClick={() => handleDelete(index)}>DELETE</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
