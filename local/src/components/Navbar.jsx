import {useState} from "react";

const Navbar = () => {
  const user = localStorage.getItem("user");
   const [data, setData] = useState(
    JSON.parse(localStorage.getItem("blogs")) || []
  );
  return (
    <div>
      <ul className="navbar">
        <a href="/">
          <li>Blogs <span>{data.length}</span></li>
        </a>
        <a href="/write">
          <li>Write</li>
        </a>
        <a href="/register">
          {user ? <li>{user}</li> : <li>Create Account</li>}
        </a>
      </ul>
    </div>
  );
};
export default Navbar;
