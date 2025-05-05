// src/components/ServicesSection.jsx
import React from 'react'
import '../assest/style.css'
import '../assest/responsive.css'

function ServicesSection() {
  return (
    <section className="services" data-aos="fade-up">
      <div className="container">
      <h2 style={{ textAlign: 'center', color: '#007bff', fontWeight: '600' }}>Dịch Vụ Của Chúng Tôi</h2>
        <div className="service-list">
          <div className="service-box">
            <img src="/assest/img/van tai da phuong thuc.jpg" alt="Vận chuyển" />
            <h3>Giao nhận vận chuyển</h3>
            <p>
              HAFC cung cấp dịch vụ vận chuyển hàng hóa nội địa theo hình thức door-to-door, đảm bảo quy trình giao nhận khép kín từ kho gửi đến kho nhận.
            </p>
          </div>
          <div className="service-box">
            <img src="/assest/img/Alfa 01.jpg" alt="Vận chuyển" />
            <h3>Dịch vụ logistics</h3>
            <p>
              HAFC cung cấp các dịch vụ vận chuyển đa phương thức cho cả tuyến nội địa và quốc tế, bao gồm: đường bộ, đường biển, đường sắt
            </p>
          </div>
          <div className="service-box">
            <img src="/assest/img/khai thac hang le.jpg" alt="Vận chuyển" />
            <h3>Khai thác hàng lẻ</h3>
            <p>
              Dịch vụ khai thác hàng lẻ của HAFC là giải pháp tối ưu dành cho các doanh nghiệp có nhu cầu vận chuyển những lô hàng có khối lượng hoặc số lượng nhỏ
            </p>
          </div>
        </div>
        <div className="service-cta">
          <a href="/services" className="btn btn-outline">Tìm hiểu dịch vụ</a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
