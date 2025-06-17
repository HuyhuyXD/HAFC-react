import React from "react";

function AdminFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col company-info">
          <img src="/logo/logo.png" alt="Logo" className="footer-logo" />
          <div className="company-name">Công Ty CP Giao Nhận Vận Tải Hải An</div>
          <div className="license">
            © {new Date().getFullYear()} HAFC Admin Dashboard
          </div>
        </div>
        <div className="footer-col">
          <h4>Liên hệ</h4>
          <ul>
            <li><a href="mailto:info@hafc.vn">info@hafc.vn</a></li>
            <li><a href="tel:0123456789">0123 456 789</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default AdminFooter;
