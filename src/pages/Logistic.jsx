import React from 'react';
import '../assest/style.css';
import '../assest/responsive.css';

function Logistics() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundImage: 'url("/assest/img/Alfa 01.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 20px',
        color: '#fff',
      }}
    >
      {/* Overlay tối */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
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
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '24px' }}>
          Dịch vụ vận chuyển container đường biển nội địa và quốc tế
        </h2>

        <h3 style={{ fontWeight: 'bold', marginTop: '24px' }}>
          Vận chuyển đường biển nội địa và quốc tế
        </h3>
        <p style={{ marginBottom: '16px' }}>
          Bên cạnh thế mạnh về vận chuyển đường bộ, HAFC còn khai thác dịch vụ vận chuyển đường biển nội địa và quốc tế thông qua đội tàu container của hãng tàu Hải An – đơn vị mẹ trong hệ sinh thái logistics toàn diện.
        </p>
        <p style={{ marginBottom: '16px' }}>
          Với đội tàu container lớn nhất Việt Nam gồm 16 chiếc, có sức chở đa dạng từ 800 TEUs đến 3.500 TEUs, HAFC đáp ứng linh hoạt nhu cầu vận chuyển từ hàng lẻ đến hàng lớn cho các đối tác trong và ngoài nước.
        </p>
        <p style={{ marginBottom: '16px' }}>
          Các cảng đang khai thác bao gồm Hải Phòng, TP.HCM, Đà Nẵng, Vũng Tàu, Thanh Hóa, Long An và kết nối quốc tế tới Hong Kong, Nansha / Qinzhou (Trung Quốc), Port Klang (Malaysia), Kattupalli (Ấn Độ),...  
          Đây là lợi thế quan trọng giúp HAFC cung cấp dịch vụ door-to-door đa phương thức, rút ngắn thời gian vận chuyển và kiểm soát chi phí hiệu quả.
        </p>

         <h3 style={{ fontWeight: 'bold', marginTop: '24px' }}>Vai trò đại lý hãng tàu Hải An</h3>
        <p style={{ marginBottom: '16px' }}>
          Với vai trò là đại lý chính thức của hãng tàu Hải An, HAFC sở hữu nhiều lợi thế về lịch trình, kiểm soát vận hành và tối ưu chi phí vận tải đường biển.
        </p>

        <h3 style={{ fontWeight: 'bold', marginTop: '30px' }}>Khách hàng tiêu biểu</h3>
        <p style={{ marginBottom: '16px' }}>
          HAFC tự hào là đối tác logistics của nhiều doanh nghiệp lớn như SUNTORY PEPSICO, MASAN, NUTIFOOD, VIFON, DAESANG/MIWON.
        </p>

        <h3 style={{ fontWeight: 'bold', marginTop: '30px' }}>Cam kết từ HAFC</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px' }}>
          <li>📦 Giao hàng an toàn, nguyên trạng</li>
          <li>⏱  Tiến độ chính xác, minh bạch</li>
          <li>📊 Theo dõi hành trình trực tuyến</li>
          <li>📄 Hỗ trợ thủ tục hải quan nhanh chóng</li>
        </ul>
      </div>
    </section>
  );
}

export default Logistics;
