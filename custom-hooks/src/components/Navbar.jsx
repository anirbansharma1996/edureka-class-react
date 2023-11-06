import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul>
        <a href="/counter">
          <li>Counter</li>
        </a>
        <a href="/products">
          <li>Products</li>
        </a>
        <a href="/users">
          <li>Users</li>
        </a>
      </ul>
      <hr />
    </div>
  );
};

export default Navbar;
