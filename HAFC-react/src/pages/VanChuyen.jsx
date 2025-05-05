import React from 'react'
import '../assest/style.css'
import '../assest/responsive.css'
import SidebarSchedule from '../components/SidebarSchedule'

export default function VanChuyen() {
  return (
    <section style={{ padding: '0', margin: '0' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundImage: 'url("/assest/img/van tai da phuong thuc.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom 30%',
          position: 'relative',
          padding: '80px 20px',
          color: '#fff',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 1,
          }}
        />

        {/* Nội dung và sidebar */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
            gap: '24px',
            alignItems: 'flex-start',
          }}
        >
          {/* Nội dung chính */}
          <div style={{ flex: 3 }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center' }}>
              Giao Nhận Vận Chuyển
            </h2>
            <p style={{ marginTop: '16px', textAlign: 'center' }}>
              Công ty cổ phần giao nhận vận tải Hải An cung cấp dịch vụ vận chuyển hàng hóa nội địa theo hình thức door-to-door, đảm bảo quy trình giao nhận khép kín từ kho gửi đến kho nhận.
            </p>
            <p style={{ marginTop: '8px', textAlign: 'center' }}>
              Với năng lực vận tải mạnh mẽ cùng đội ngũ nhân viên chuyên nghiệp, chúng tôi đảm bảo hàng hóa được vận chuyển nhanh chóng, an toàn và đúng thời gian cam kết.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
