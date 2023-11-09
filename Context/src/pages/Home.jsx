import React, { useContext } from "react";
import { TextContext } from "../context/textContext";

const Home = () => {
  const text = useContext(TextContext);
  return (
    <div>
      Home
      <h5>{text}</h5>
    </div>
  );
};

export default Home;
