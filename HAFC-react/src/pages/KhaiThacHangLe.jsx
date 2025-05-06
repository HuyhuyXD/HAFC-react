import React from 'react';
import '../assest/style.css';
import '../assest/responsive.css';

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
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'left',
        }}
      >
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
          Dịch vụ khai thác hàng lẻ
        </h2>

        <p style={{ marginBottom: '16px' }}>
          Dịch vụ khai thác hàng lẻ (LCL) của HAFC là giải pháp tối ưu dành cho các doanh nghiệp có nhu cầu vận chuyển những lô hàng có khối lượng hoặc số lượng không đủ để đóng nguyên container (FCL).
          Thay vì phải chịu toàn bộ chi phí cho một container, khách hàng có thể chia sẻ không gian với những đơn vị khác – giúp tiết kiệm chi phí và vẫn đảm bảo hiệu quả vận chuyển.
        </p>

        <h3 style={{ fontWeight: 'bold', marginTop: '24px' }}>Giải pháp linh hoạt – Tối ưu chi phí</h3>
        <p style={{ marginBottom: '16px' }}>
          Với hệ thống kho bãi và mạng lưới phân phối trải rộng, HAFC thực hiện gom hàng từ nhiều khách hàng tại các điểm tập kết, tiến hành phân loại, đóng gói, dán nhãn đầy đủ trước khi sắp xếp vào container.
          Tại điểm đến, chúng tôi tiếp tục chia lô và giao hàng tận nơi theo yêu cầu.
        </p>

        <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '24px' }}>
          <li>📦 Gom hàng từ nhiều nguồn – xử lý nhanh gọn</li>
          <li>🛃 Hỗ trợ khai báo hải quan – thủ tục trọn gói</li>
          <li>📍 Theo dõi hành trình – giao hàng đúng tiến độ</li>
        </ul>

        <h3 style={{ fontWeight: 'bold', marginTop: '24px' }}>Khách hàng phù hợp</h3>
        <p style={{ marginBottom: '16px' }}>
          Dịch vụ này đặc biệt phù hợp với doanh nghiệp vừa và nhỏ, các đơn vị có nhu cầu vận chuyển hàng hóa định kỳ nhưng chưa đủ tải trọng container,
          hoặc các công ty cần phân phối hàng đến nhiều địa điểm khác nhau.
        </p>

        <h3 style={{ fontWeight: 'bold', marginTop: '24px' }}>Đối tác và lợi thế</h3>
        <p>
          Với vai trò là đại lý chính thức của hãng tàu Hải An, cùng kinh nghiệm lâu năm trong ngành logistics,
          HAFC đảm bảo sự tin cậy về tiến độ, an toàn hàng hóa và minh bạch trong mọi thủ tục.
        </p>
      </div>
    </section>
  );
}
