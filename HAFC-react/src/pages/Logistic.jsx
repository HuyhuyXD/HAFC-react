// src/pages/Logistic.jsx
import React from 'react'
import '../assest/style.css'
import '../assest/responsive.css'
import SidebarSchedule from '../components/SidebarSchedule'

export default function Logistic() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: 'url("/assest/img/Alfa 01.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom 20%',
        padding: '120px 20px',
        color: '#fff',
        textAlign: 'center',
      }}
    >
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

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>Dịch Vụ Logistics</h2>
        <p style={{ marginTop: '16px' }}>
          HAFC cung cấp các dịch vụ vận chuyển đa phương thức cho cả tuyến nội địa và quốc tế, bao gồm: đường bộ, đường biển, đường sắt.
        </p>
        <p style={{ marginTop: '8px' }}>
          Chúng tôi đồng hành cùng khách hàng trong việc tối ưu chi phí, thời gian và nâng cao hiệu quả chuỗi cung ứng với các giải pháp logistics toàn diện, uy tín và linh hoạt.
        </p>
      </div>
    </section>
  )
}
