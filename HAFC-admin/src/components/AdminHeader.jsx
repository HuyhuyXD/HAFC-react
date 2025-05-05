import React from "react";
import { Link } from "react-router-dom";

function AdminHeader() {
  return (
    <header id="mainHeader">
      <div className="container header-flex">
        <div className="logo-box">
          <img src="/logo/logo.png" alt="HAFC Logo" className="logo" />
          <span className="company-name">
            Công Ty Cổ Phần Giao Nhận Vận Tải Hải An
          </span>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/upload-schedule">Upload lịch tàu</Link></li>
            <li><Link to="/post-recruitment">Đăng tuyển dụng</Link></li>
            <li><Link to="/manage-schedule">Quản lý lịch tàu</Link></li>
            <li><Link to="/manage-recruitment">Quản lý bài đăng</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AdminHeader;
