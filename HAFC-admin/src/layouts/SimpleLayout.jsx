import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";

function SimpleLayout({ children }) {
  return (
    <>
      <AdminHeader hideMenu />
      <main>{children}</main>
      <AdminFooter />
    </>
  );
}

export default SimpleLayout;
