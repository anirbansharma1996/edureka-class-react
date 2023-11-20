import React, { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8080/todo");
        setLoading(false);
        setData(response.data);
      } catch (error) {
        setLoading(false);
        setError("something went wrong...");
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/todo/${id}`);
      console.log(response);
    } catch (error) {
      alert("something went wrong , try to delete later ...");
    }
  };

  return (
    <div>
      <h2>Pending Tasks</h2>
      <div>
        <ul>
          {data.map((el) => (
            <li key={el.id}>
              {el.task}
              <button onClick={() => handleDelete(el.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
