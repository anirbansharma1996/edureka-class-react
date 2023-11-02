import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", user);
    setUser("");
    setTimeout(() => {
      window.location.href="/";
    }, 1200);
  };

  const handleUser = (e) => {
    setUser((prev) => e.target.value);
  };

  return (
    <>
      <form className="register-form" onSubmit={handleRegister}>
        <label>username</label>
        <input
          onChange={handleUser}
          value={user}
          type="text"
          placeholder="enter username"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
