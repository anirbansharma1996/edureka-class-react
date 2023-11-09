import React, { useContext } from "react";
import { LoginContext } from "../context/loginContext";

const Navbar = () => {
  const { otp, log } = useContext(LoginContext);

  return (
    <div>
      <ul>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/about">
          <li>About</li>
        </a>
        <a href="/login">
          <li>{log ? otp : "Login"}</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
