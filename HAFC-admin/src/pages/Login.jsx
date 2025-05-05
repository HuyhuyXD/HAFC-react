import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "admin123") {
      localStorage.setItem("admin_logged_in", "true");
      navigate("/dashboard");
    } else {
      alert("Sai mật khẩu");
    }
  };

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Đăng nhập Admin</h2>
      <input
        type="password"
        placeholder="Mật khẩu..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: 10, marginTop: 20 }}
      />
      <br />
      <button onClick={handleLogin} style={{ marginTop: 20 }}>
        Đăng nhập
      </button>
    </div>
  );
}

export default Login;