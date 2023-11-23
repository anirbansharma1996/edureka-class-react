import React from "react";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("JSON_USER"));
  const handleLogout = () => {
    localStorage.removeItem("JSON_USER");
    window.location.href = "/signup";
  };
  return (
    <div >
      <ul className="navbar">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/products">
          <li>Products</li>
        </a>
        <a href="/cart">
          <li>Cart</li>
        </a>
        <a href="/signup">
          {user ? (
            <li>
              {user.name} <button onClick={handleLogout}>LOGOUT</button>{" "}
            </li>
          ) : (
            <li>Register</li>
          )}
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
