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
            <h3>Dịch vụ vận tải đường bộ xuyên biên giới</h3>
            <p>
              Với đội xe container 20 chiếc đầu tư mới và tiếp tục mở rộng, HAFC cung cấp trọn gói dịch vụ vận chuyển đường bộ xuyên biên giới qua Trung Quốc - Việt Nam - Lào / Campuchia - Thái Lan với thời gian chỉ từ 2-3 ngày và chi phí tiết kiệm nhất.
            </p>
          </div>
          <div className="service-box">
            <img src="/assest/img/Alfa 01.jpg" alt="Vận chuyển" />
            <h3>Dịch vụ vận chuyển container đường biển nội địa và quốc tế</h3>
            <p>
              Sử dụng đội tàu container lớn nhất Việt Nam 16 chiếc với cỡ tàu từ 800 TEUs-3500 TEUs của hãng tàu Hải An. Các cảng đang khai thác tàu bao gồm Hải Phòng, HCM, Đà Nẵng, Vũng Tàu, Thanh Hóa, Long An, HongKong, Nansha / Qinzhou (Trung Quốc), Port Klang (Malaysia), Kattupalli (Ấn Độ), ...
            </p>
          </div>
          <div className="service-box">
            <img src="/assest/img/khai thac hang le.jpg" alt="Vận chuyển" />
            <h3>Dịch vụ giao nhận vận chuyển đa phương thức kho - kho</h3>
            <p>
               Sử dụng linh hoạt các phương thức vận tải đa phương thức tích hợp đường sắt, đường bộ, đường thủy nội địa, và đường biển để đưa ra các phương án vận chuyển từ kho đến kho tối ưu nhất theo nhu cầu của quý khách hàng.
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
