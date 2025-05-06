import React from 'react';
import '../assest/style.css';
import '../assest/responsive.css';

export default function VanChuyen() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: 'url("/assest/img/van tai da phuong thuc.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px',
        color: '#fff',
      }}
    >

      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'left',
        }}
      >
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
          Giao nhận vận chuyển
        </h2>

        <p style={{ lineHeight: '1.8' }}>
          HAFC cung cấp dịch vụ vận chuyển hàng hóa nội địa theo hình thức door-to-door,
          đảm bảo quy trình giao nhận khép kín từ kho gửi đến kho nhận.
        </p>

        <p style={{ marginTop: '10px', lineHeight: '1.8' }}>
          Chúng tôi khai thác hiệu quả các tuyến vận chuyển chiến lược:
          <strong> Hải Phòng – Cái Mép – TP.HCM – Đà Nẵng – Hải Phòng</strong>,
          mang đến lựa chọn tối ưu cho khách hàng doanh nghiệp tại cả ba miền.
        </p>

        <h3 style={{ marginTop: '30px', fontWeight: '700', fontSize: '20px' }}>
          Cam Kết Từ HAFC
        </h3>

        {/* LIST thẳng hàng với phần trên */}
        <div style={{ marginTop: '15px', lineHeight: '1.8' }}>
          <div>🚛 An toàn hàng hóa là ưu tiên hàng đầu</div>
          <div>⏱ Giao hàng đúng thời gian cam kết</div>
          <div>📄 Thủ tục chứng từ đầy đủ, minh bạch</div>
        </div>
      </div>
    </section>
  );
}
