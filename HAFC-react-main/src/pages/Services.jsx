import React from 'react'
import '../assest/style.css'
import '../assest/responsive.css'

export default function Services() {
  return (
    <section className="services-section" data-aos="fade-up">
      <h2 className="services-title"
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
                  Dịch vụ vận tải đường bộ xuyên biên giới
                </h3>
                <p>
                  Với đội xe container 20 chiếc đầu tư mới và tiếp tục mở rộng, HAFC cung cấp trọn gói dịch vụ vận chuyển đường bộ xuyên biên giới qua Trung Quốc - Việt Nam - Lào / Campuchia - Thái Lan với thời gian chỉ từ 2-3 ngày và chi phí tiết kiệm nhất.
                </p>
                <a href="/dich-vu-van-chuyen" className="btn-learn-more">
                  Tìm hiểu thêm
                </a>
              </div>

              <div className="services-box" data-aos="fade-up">
                <img src="/assest/img/Alfa 01.jpg" alt="Logistics" />
                <h3 style={{ textAlign: 'center', color: '#007bff', fontWeight: '600' }}>
                  Dịch vụ vận chuyển container đường biển nội địa và quốc tế
                </h3>
                <p>
                  Sử dụng đội tàu container lớn nhất Việt Nam 16 chiếc với cỡ tàu từ 800 TEUs-3500 TEUs của hãng tàu Hải An. Các cảng đang khai thác tàu bao gồm Hải Phòng, HCM, Đà Nẵng, Vũng Tàu, Thanh Hóa, Long An, HongKong, Nansha / Qinzhou (Trung Quốc), Port Klang (Malaysia), Kattupalli (Ấn Độ), ...
                </p>
                <a href="/dich-vu-logistic" className="btn-learn-more">
                  Tìm hiểu thêm
                </a>
              </div>

              <div className="services-box" data-aos="fade-up">
                <img src="/assest/img/khai thac hang le.jpg" alt="Hàng lẻ" />
                <h3 style={{ textAlign: 'center', color: '#007bff', fontWeight: '600' }}>
                  Dịch vụ giao nhận vận chuyển đa phương thức kho - kho
                </h3>
                <p>
                  Sử dụng linh hoạt các phương thức vận tải đa phương thức tích hợp đường sắt, đường bộ, đường thủy nội địa, và đường biển để đưa ra các phương án vận chuyển từ kho đến kho tối ưu nhất theo nhu cầu của quý khách hàng.
                </p>
                <a href="/khai-thac-hang-le" className="btn-learn-more">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
