import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [loginD, setLoginD] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [token, setToken] = useState(
    localStorage.getItem("auth-token-b4") || ""
  );
  const decoded = token ? jwtDecode(token) : null;



  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginD({ ...loginD, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8008/v1/login", loginD);
      if (res.status === 200) {
        setSuccess(res.data.message);
        localStorage.setItem("auth-token-b4", res.data.token);
        setToken(res.data.token);
      }
    } catch (error) {
      setError(error.response.data);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth-token-b4");
    window.location.reload();
  };

  return (
    <div>
      <h3>LOGIN</h3>
      {!decoded ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={loginD.email}
              placeholder="email"
              onChange={handleInput}
            />
            <input
              type="password"
              name="password"
              value={loginD.password}
              placeholder="password"
              onChange={handleInput}
            />
            <input type="submit" />
          </form>
          <p>{success ? success : error}</p>
        </div>
      ) : (
        <div>
          <h4>Welcome {decoded?.name}</h4>
          <button onClick={handleLogout}>LOG OUT</button>
        </div>
      )}
    </div>
  );
};

export default Login;
