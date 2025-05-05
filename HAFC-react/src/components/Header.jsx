// src/components/Header.jsx
import React from 'react'
import '../assest/style.css';
import '../assest/responsive.css';

function Header() {
  return (
    <header id="mainHeader" className="header">
      <div className="container header-flex">
        <div className="logo-box">
          <img src="/assest/logo/logo.png" alt="HAFC Logo" className="logo" />
          <span className="company-name">Công Ty Cổ Phần Giao Nhận Vận Tải Hải An</span>
        </div>
        <nav className="nav-menu">
        <ul className="nav-menu">
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/about">Giới thiệu</a></li>
            <li className="dropdown">
        <a href="/services">Dịch vụ ▾</a>
            <ul className="dropdown-menu">
                <li><a href="/dich-vu-van-chuyen">Giao nhận vận chuyển</a></li>
                <li><a href="/dich-vu-logistic">Dịch vụ logistics</a></li>
                <li><a href="/khai-thac-hang-le">Dịch vụ khai thác hàng lẻ</a></li>
            </ul>
                </li>
                <li><a href="/lich-tau">Lịch tàu chạy</a></li>  
                <li><a href="/tuyen-dung">Tuyển dụng</a></li>
                <li><a href="/contact">Liên hệ</a></li>
                </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header