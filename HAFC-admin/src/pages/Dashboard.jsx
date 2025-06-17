import React, { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Dashboard() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const email = JSON.parse(localStorage.getItem("user"))?.email;
      const { data } = await supabase
        .from("admins")
        .select("*")
        .eq("email", email);
      setIsAdmin(data.length > 0);
    };

    checkAdmin();
  }, []);

  return (
    <AdminLayout>
      <div className="dashboard">
        <h2 style={{ textAlign: "center", marginBottom: 30 }}>Admin Dashboard</h2>
        <div className="card-grid">
          <Link to="/upload-schedule" className="card">
            <span role="img" aria-label="upload">📤</span>
            <p>Upload lịch tàu</p>
          </Link>

          <Link to="/post-recruitment" className="card">
            <span role="img" aria-label="recruit">📝</span>
            <p>Đăng bài tuyển dụng</p>
          </Link>

          <Link to="/manage-schedule" className="card">
            <span role="img" aria-label="manage-schedule">📁</span>
            <p>Quản lý lịch tàu</p>
          </Link>

          <Link to="/manage-recruitment" className="card">
            <span role="img" aria-label="manage-posts">📄</span>
            <p>Quản lý bài đăng</p>
          </Link>

          {isAdmin && (
            <Link to="/manage-admins" className="card">
              <span role="img" aria-label="admin">👑</span>
              <p>Quản lý admin</p>
            </Link>
          )}

          {isAdmin && (
            <Link to="/manage-users" className="card">
              <span role="img" aria-label="users">👥</span>
              <p>Quản lý người dùng</p>
            </Link>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
