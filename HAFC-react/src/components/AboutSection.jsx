// src/components/AboutSection.jsx
import React from 'react'
import '../assest/style.css'
import '../assest/responsive.css'

function AboutSection() {
  return (
    <section className="about" data-aos="fade-up">
      <div className="container">
      <h2 style={{ textAlign: 'center', color: '#007bff', fontWeight: '600' }}>Về Chúng Tôi</h2>
        <div className="about-section">
          <div className="about-text">
            <p>
              HAFC cung cấp các dịch vụ vận chuyển đa phương thức cho các tuyến nội địa và quốc tế, bao gồm đường bộ, đường biển, đường sắt, cùng với dịch vụ khai báo hải quan. Ngoài ra, chúng tôi còn cung cấp các giải pháp vận chuyển liên vận giữa Trung Quốc, Việt Nam, Lào, Campuchia và Thái Lan với đội xe container đầu tư mới 20 chiếc, và quy mô đầu tư liên tục được mở rộng.
            </p>
            <p>
              HAFC rất mong muốn được hợp tác và phục vụ Quý khách trong thời gian tới. Chúng tôi tin tưởng rằng HAFC sẽ trở thành đối tác tin cậy trên từng cây số vận chuyển hàng hóa của Quý khách hàng.
            </p>
          </div>
          <div className="about-img">
            <img src="assest/img/section about.jpg" alt="Ảnh giới thiệu doanh nghiệp" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection