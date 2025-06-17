import React, { useState } from 'react';
import '../assest/style.css';
import '../assest/responsive.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="mainHeader" className="header">
      <div className="container header-flex">
        <div className="logo-box">
          <img src="/assest/logo/logo.png" alt="HAFC Logo" className="logo" />
          <span className="company-name">
            CÔNG TY CỔ PHẦN GIAO NHẬN VẬN TẢI HẢI AN
          </span>
        </div>

        <button className="mobile-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/about">Giới thiệu</a></li>
            <li className="dropdown">
              <a href="/services">Dịch vụ ▾</a>
              <ul className="dropdown-menu clean-dropdown">
                <li><a href="/dich-vu-van-chuyen">Dịch vụ vận tải đường bộ xuyên biên giới</a></li>
                <li><a href="/dich-vu-logistic">Dịch vụ vận chuyển container đường biển nội địa và quốc tế</a></li>
                <li><a href="/khai-thac-hang-le">Dịch vụ giao nhận vận chuyển đa phương thức kho - kho</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#!" onClick={e => e.preventDefault()}>Tiện ích ▾</a>
              <ul className="dropdown-menu clean-dropdown">
                <li>
                  <a href="https://haiants.vn/lich-tau-container-noi-dia-l97.html" target="_blank" rel="noopener noreferrer">
                    Lịch tàu nội địa
                  </a>
                </li>
                <li>
                  <a href="https://haiants.vn/lich-tau-container-quoc-te-l122.html" target="_blank" rel="noopener noreferrer">
                    Lịch tàu quốc tế
                  </a>
                </li>
                <li>
                  <a href="https://haiants.vn/lich-tau-boc-xep-tai-cang-l96.html" target="_blank" rel="noopener noreferrer">
                    Lịch tàu bốc xếp tại cảng
                  </a>
                </li>
              </ul>
            </li>

            <li><a href="/tuyen-dung">Tuyển dụng</a></li>
            <li><a href="/contact">Liên hệ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
