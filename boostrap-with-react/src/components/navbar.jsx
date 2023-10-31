export default function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/about">
          <li>About</li>
        </a>
        <a href="/products">
          <li>Products</li>
        </a>
        <a href="/register">
          <li>Create account</li>
        </a>
      </ul>
    </div>
  );
}
