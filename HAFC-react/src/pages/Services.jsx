import React from 'react'
import '../assest/style.css'
import '../assest/responsive.css'
import SidebarSchedule from '../components/SidebarSchedule'

export default function Services() {
  return (
    <section className="services-section" data-aos="fade-up">
      <h2
        style={{
          textAlign: 'center',
          color: '#007bff',
          fontSize: '28px',
          fontWeight: '600',
          marginBottom: '30px',
          marginTop: '40px'
        }}
      >
        Dịch Vụ Của Chúng Tôi
      </h2>

      <div
        className="services-container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 15px',
        }}
      >
        {/* Wrapper chứa dịch vụ và sidebar */}
        <div
          className="services-wrapper"
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'flex-start',
          }}
        >
          <div className="main-services" style={{ flex: 3 }}>
            <div className="services-list">
              <div className="services-box" data-aos="fade-up">
                <img src="/assest/img/van tai da phuong thuc.jpg" alt="Vận chuyển" />
                <h3 style={{ textAlign: 'center', color: '#007bff', fontWeight: '600' }}>
                  Giao nhận vận chuyển
                </h3>
                <p>
                  HAFC cung cấp dịch vụ vận chuyển hàng hóa nội địa theo hình thức door-to-door, đảm bảo quy trình giao nhận khép kín từ kho gửi đến kho nhận.
                </p>
                <a href="/dich-vu-van-chuyen" className="btn-learn-more">
                  Tìm hiểu thêm
                </a>
              </div>

              <div className="services-box" data-aos="fade-up">
                <img src="/assest/img/Alfa 01.jpg" alt="Logistics" />
                <h3 style={{ textAlign: 'center', color: '#007bff', fontWeight: '600' }}>
                  Dịch vụ logistics
                </h3>
                <p>
                  HAFC cung cấp các dịch vụ vận chuyển đa phương thức cho cả tuyến nội địa và quốc tế, bao gồm: đường bộ, đường biển, đường sắt.
                </p>
                <a href="/dich-vu-logistic" className="btn-learn-more">
                  Tìm hiểu thêm
                </a>
              </div>

              <div className="services-box" data-aos="fade-up">
                <img src="/assest/img/khai thac hang le.jpg" alt="Hàng lẻ" />
                <h3 style={{ textAlign: 'center', color: '#007bff', fontWeight: '600' }}>
                  Dịch vụ khai thác hàng lẻ
                </h3>
                <p>
                  Dịch vụ khai thác hàng lẻ của HAFC là giải pháp tối ưu dành cho các doanh nghiệp có nhu cầu vận chuyển những lô hàng có khối lượng hoặc số lượng nhỏ.
                </p>
                <a href="/khai-thac-hang-le" className="btn-learn-more">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>

          <aside className="sidebar" style={{ flex: 1 }}>
            <SidebarSchedule />
          </aside>
        </div>
      </div>
    </section>
  )
}
