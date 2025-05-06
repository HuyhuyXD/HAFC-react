import React from "react";
import { Link, useLocation } from "react-router-dom";

function AdminHeader({ hideMenu = false }) {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user?.email || "Tài khoản";

  const isDashboard = location.pathname === "/dashboard";

  return (
    <header id="mainHeader">
      <div className="container header-flex" style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {!hideMenu && !isDashboard && (
            <Link
              to="/dashboard"
              style={{
                background: "#e6f0ff",
                padding: "6px 12px",
                borderRadius: 6,
                fontWeight: "bold",
                color: "#003366",
                textDecoration: "none",
                fontSize: "20px",
              }}
              title="Về Dashboard"
            >
              ⬅
            </Link>
          )}

          <div className="logo-box" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/logo/logo.png" alt="HAFC Logo" className="logo" />
            <span className="company-name">
              Công Ty Cổ Phần Giao Nhận Vận Tải Hải An
            </span>
          </div>
        </div>

        {!hideMenu && (
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                background: "#e6f0ff",
                padding: "6px 12px",
                borderRadius: "6px",
                fontWeight: "bold",
                color: "#003366",
                userSelect: "none",
              }}
            >
              👤 {userEmail}
            </span>
            <button
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/login";
              }}
              style={{
                background: "#f2dede",
                color: "#a94442",
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Đăng xuất
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default AdminHeader;
