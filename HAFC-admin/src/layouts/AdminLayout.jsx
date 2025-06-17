import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";

function AdminLayout({ children }) {
  return (
    <div className="admin-wrapper">
      <AdminHeader />
      <main style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "0 20px",
        minHeight: "70vh"
      }}>
        {children}
      </main>
      <AdminFooter />
    </div>
  );
}

export default AdminLayout;
