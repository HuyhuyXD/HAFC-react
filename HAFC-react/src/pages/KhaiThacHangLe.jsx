// src/pages/KhaiThacHangLe.jsx
import React from 'react'
import '../assest/style.css'
import '../assest/responsive.css'
import SidebarSchedule from '../components/SidebarSchedule'

export default function KhaiThacHangLe() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: 'url("/assest/img/khai thac hang le.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom 35%',
        padding: '120px 20px',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {/* Overlay mờ */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />

      {/* Nội dung nằm trên overlay */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>Dịch Vụ Khai Thác Hàng Lẻ</h2>
        <p style={{ marginTop: '16px' }}>
          Dịch vụ khai thác hàng lẻ của HAFC là giải pháp tối ưu dành cho các doanh nghiệp có nhu cầu vận chuyển những lô hàng có khối lượng hoặc số lượng nhỏ.
        </p>
        <p style={{ marginTop: '8px' }}>
          Chúng tôi cung cấp quy trình phân loại, đóng gói, gom hàng và vận chuyển đảm bảo an toàn, tiết kiệm chi phí và thời gian giao nhận.
        </p>
      </div>
    </section>
  )
}
