import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import "../assets/css/admin-style.css";

function Dashboard() {
  return (
    <AdminLayout>
      <div className="dashboard-wrapper">
        <h2>Admin Dashboard</h2>
        <div className="dashboard-grid">
          <Link to="/upload-schedule" className="dashboard-card">
            <span className="card-icon">📤</span>
            <span className="card-title">Upload lịch tàu</span>
          </Link>
          <Link to="/post-recruitment" className="dashboard-card">
            <span className="card-icon">📝</span>
            <span className="card-title">Đăng bài tuyển dụng</span>
          </Link>
          <Link to="/manage-schedule" className="dashboard-card">
            <span className="card-icon">📁</span>
            <span className="card-title">Quản lý lịch tàu</span>
          </Link>
          <Link to="/manage-recruitment" className="dashboard-card">
            <span className="card-icon">📚</span>
            <span className="card-title">Quản lý bài đăng</span>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
