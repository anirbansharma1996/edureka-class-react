import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleViewPassword = () => {
    setChecked(!checked);
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user", user);
      if (response.status === 201) {
        alert("Signup Successful");
        setUser({
          name: "",
          email: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      alert("Something went wrong ...");
    }
  };

  return (
    <div className="form-div">
      <h4>SIGNUP</h4>
      <form onSubmit={handleSignup}>
        <input
          name="name"
          value={user.name}
          type="text"
          placeholder="enter name"
          onChange={handleInput}
        />
        <input
          name="email"
          value={user.email}
          type="email"
          placeholder="enter email"
          onChange={handleInput}
        />
        <input
          name="password"
          value={user.password}
          type={checked ? "text" : "password"}
          placeholder="enter password"
          onChange={handleInput}
        />
        <input type="checkbox" onChange={handleViewPassword} />show password
        <input type="submit" value="SIGNUP" />
      </form>
      <p>Already have an account <a href="/login">Login</a> here.. </p> 
    </div>
  );
};

export default Signup;
