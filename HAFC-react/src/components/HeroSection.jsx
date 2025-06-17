// src/components/HeroSection.jsx
import React from 'react'
import '../assest/style.css'
import '../assest/responsive.css'

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content container" style={{ textAlign: 'center' }}>
          <h2 className="hero-title" style={{ fontSize: '28px', fontWeight: '600' }}>
            CÔNG TY CỔ PHẦN GIAO NHẬN VẬN TẢI HẢI AN
          </h2>
          <p className="hero-description">
            Công ty Cổ phần Giao nhận Vận tải Hải An (HAFC) – thành lập ngày 27 tháng 12 năm 2017 – là một thành viên trong hệ sinh thái vận tải và logistics của hãng tàu Hải An (HOSE:HAH). Chúng tôi tự hào là một trong những đơn vị cung cấp dịch vụ vận chuyển container chuyên nghiệp và đa dạng tại Việt Nam.
          </p>
          <a href="/about" className="btn">Tìm hiểu thêm</a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
