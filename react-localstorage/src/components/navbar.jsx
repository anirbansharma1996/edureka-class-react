export default function Navbar() {
  const user = localStorage.getItem("user");

  return (
    <>
      <ul className="navbar">
        <a href="/">
          <li>Blogs</li>
        </a>
        <a href="/write">
          <li>Write Blog</li>
        </a>
        {user ? (
          <li>{user}</li>
        ) : (
          <a href="/register">
            <li>Register</li>
          </a>
        )}
      </ul>
    </>
  );
}
