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
          Dịch vụ Logistics
        </h2>

        <p style={{ marginBottom: '16px' }}>
          HAFC cung cấp các dịch vụ vận chuyển đa phương thức cho cả tuyến nội địa và quốc tế, bao gồm: đường bộ, đường biển, đường sắt, kết hợp cùng dịch vụ khai báo hải quan.
          Chúng tôi tối ưu hóa hành trình vận chuyển cho khách hàng từ điểm xuất phát đến đích cuối cùng một cách linh hoạt và hiệu quả.
        </p>

        <h3 style={{ fontWeight: 'bold', marginTop: '24px' }}>Vận chuyển liên vận quốc tế</h3>
        <p style={{ marginBottom: '16px' }}>
          Bên cạnh thị trường nội địa, HAFC cung cấp giải pháp vận chuyển liên vận giữa các quốc gia như Trung Quốc, Việt Nam, Lào, Campuchia và Thái Lan,
          đáp ứng tốt nhu cầu mở rộng chuỗi cung ứng xuyên biên giới cho các doanh nghiệp.
        </p>

        <h3 style={{ fontWeight: 'bold', marginTop: '24px' }}>Đầu tư đội xe và mở rộng quy mô</h3>
        <p style={{ marginBottom: '16px' }}>
          Với việc đầu tư mới 20 xe container hiện đại cùng chiến lược mở rộng quy mô liên tục, HAFC luôn sẵn sàng đáp ứng khối lượng vận chuyển lớn và yêu cầu đặc thù của từng ngành hàng.
        </p>

        <h3 style={{ fontWeight: 'bold', marginTop: '24px' }}>Tuyến vận chuyển chiến lược</h3>
        <p style={{ marginBottom: '16px' }}>
          Chúng tôi vận hành tuyến trọng điểm: Hải Phòng – Cái Mép – TP. Hồ Chí Minh – Đà Nẵng – Hải Phòng, kết nối hiệu quả giữa các trung tâm kinh tế lớn.
        </p>

        <h3 style={{ fontWeight: 'bold', marginTop: '24px' }}>Vai trò đại lý hãng tàu Hải An</h3>
        <p style={{ marginBottom: '16px' }}>
          Với vai trò là đại lý chính thức của hãng tàu Hải An, HAFC sở hữu nhiều lợi thế về lịch trình, kiểm soát vận hành và tối ưu chi phí vận tải đường biển.
        </p>

        <h3 style={{ fontWeight: 'bold', marginTop: '24px' }}>Khách hàng tiêu biểu</h3>
        <p style={{ marginBottom: '16px' }}>
          HAFC tự hào là đối tác logistics của nhiều doanh nghiệp lớn như SUNTORY PEPSICO, MASAN, NUTIFOOD, VIFON, DAESANG/MIWON.
        </p>

        <h3 style={{ fontWeight: 'bold', marginTop: '30px' }}>Cam kết từ HAFC</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px' }}>
          <li>📦 Giao hàng an toàn, nguyên trạng</li>
          <li>⏱ Tiến độ chính xác, minh bạch</li>
          <li>📊 Theo dõi hành trình trực tuyến</li>
          <li>📄 Hỗ trợ thủ tục hải quan nhanh chóng</li>
        </ul>
      </div>
    </section>
  );
}

export default Logistics;
