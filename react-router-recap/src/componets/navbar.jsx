import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/about">
          <li>About</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
