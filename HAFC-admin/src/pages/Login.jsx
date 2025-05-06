import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import SimpleLayout from "../layouts/SimpleLayout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ email và mật khẩu");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Sai email hoặc mật khẩu");
    } else {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("admin_logged_in", "true"); // ✅ Dòng cần thiết để App.jsx hiểu đã login
      alert("Đăng nhập thành công!");
      navigate("/admin");
    }
  };

  return (
    <SimpleLayout>
      <div
        style={{
          maxWidth: 400,
          margin: "80px auto",
          padding: 24,
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
          borderRadius: 12,
          background: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Đăng nhập Admin</h2>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            className="input-style"
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 12 }}
          />

          <label>Mật khẩu</label>
          <input
            type="password"
            value={password}
            className="input-style"
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 20 }}
          />

          <button type="submit" className="btn-primary" style={{ width: "100%" }}>
            Đăng nhập
          </button>
        </form>
      </div>
    </SimpleLayout>
  );
}

export default Login;
