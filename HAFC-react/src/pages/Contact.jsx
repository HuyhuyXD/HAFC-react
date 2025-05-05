import React from 'react'
import '../assest/style.css'
import '../assest/responsive.css'

export default function Contact() {
  return (
    <section className="contact-page" data-aos="fade-up">
      <div className="container">
        <h2   style={{
                textAlign: 'center',
                color: '#007bff',
                fontSize: '28px',
                fontWeight: '600',
                marginBottom: '30px',
                marginTop: '40px'
        }}>
          Liên Hệ Với Chúng Tôi
        </h2>
        <div className="contact-wrapper">
          {/* Thông tin liên hệ */}
          <div className="contact-info" data-aos="fade-right">
            <p><strong>Địa chỉ:</strong> Văn phòng 3B, Tầng 3, Tòa B, Tòa nhà Green Pearl số 378 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, TP. Hà Nội</p>
            <p><strong>Hotline:</strong> +84-24-35147888 / 0977043161</p>
            <p><strong>Fax:</strong> +84.236.3889846</p>
          </div>

          {/* Form liên hệ */}
          <form className="contact-form" data-aos="fade-left">
            <input type="text" placeholder="Họ và tên" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Nội dung liên hệ..." rows="5" required></textarea>
            <button type="submit">Gửi liên hệ</button>
          </form>
        </div>
      </div>
    </section>
  )
}
