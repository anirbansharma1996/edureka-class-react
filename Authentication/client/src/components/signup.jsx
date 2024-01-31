import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [signupD, setSignupD] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignupD({ ...signupD, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8008/v1/signup", signupD);
      if (res.status === 201) {
        setMessage(res.data);
        setSignupD({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  return (
    <div>
      <h3>SIGNUP</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={signupD.name}
          placeholder="name"
          onChange={handleInput}
        />
        <input
          type="email"
          name="email"
          value={signupD.email}
          placeholder="email"
          onChange={handleInput}
        />
        <input
          type="password"
          name="password"
          value={signupD.password}
          placeholder="password"
          onChange={handleInput}
        />
        <input type="submit" />
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Signup;
