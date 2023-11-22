import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [check, setCheck] = useState(false);
  const [userdata, setUserdata] = useState([]);
  const [loguser, setLoguser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoguser({ ...loguser, [name]: value });
  };

  const handleShowPassword = () => {
    setCheck(!check);
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user");
        setUserdata(res.data);
      } catch (error) {
        console.log("Something went wrong...");
      }
    };
    fetchdata();
  }, []);


  const handleLogin = (e) => {
    e.preventDefault();
    const data = userdata?.find(
      (el) => el.email === loguser.email && el.password === loguser.password
    );
    if (data) {
      alert("Login Success");
      localStorage.setItem("JSON_USER", JSON.stringify(data));
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      alert("User Not Found...");
    }
  };

  return (
    <div>
      <h4>LOGIN</h4>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          value={loguser.email}
          onChange={handleInput}
          placeholder="email"
        />
        <input
          type={check ? "text" : "password"}
          name="password"
          value={loguser.password}
          onChange={handleInput}
          placeholder="password"
        />
        <input type="checkbox" onChange={handleShowPassword} />
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
};

export default Login;
