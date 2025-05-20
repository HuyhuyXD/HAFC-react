import React from 'react';
import '../assest/style.css';
import '../assest/responsive.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col company-info">
          <img src="/assest/logo/logo.png" alt="Logo HAFC" className="footer-logo" />
          <p className="company-name">CÔNG TY CỔ PHẦN GIAO NHẬN VẬN TẢI HẢI AN</p>
          <p>GPKD số 0108111428 do Sở KH&ĐT Hà Nội cấp ngày 27/12/2017</p>
          <p>Văn phòng 3B, Tầng 3, Tòa B, Tòa nhà Green Pearl, 378 Minh Khai, Hà Nội</p>
          <p>Tel: +84-24-35147888 / 0977043161</p>
          <p>Fax: +84.236.3889846</p>
        </div>

        <div className="footer-col footer-links-col">
          <h4 className="footer-title">Danh mục</h4>
          <ul className="footer-links">
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/about">Giới thiệu</a></li>
            <li><a href="/services">Dịch vụ</a></li>
            <li><a href="/contact">Liên hệ</a></li>
          </ul>
        </div>

        <div className="footer-col footer-map-col">
          <h4 className="footer-title">Vị trí</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.905124681891!2d105.86354039999999!3d20.996439899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac0f91dca877%3A0x24171a30a107d3c!2zROG7sSDDoW4gR3JlZW5QZWFybA!5e0!3m2!1sen!2s!4v1744098172944!5m2!1sen!2s"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HAFC map"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
