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
          Dịch vụ giao nhận vận chuyển đa phương thức kho - kho
        </h2>

        <h3 style={{ fontWeight: 'bold', marginTop: '24px' }}>
          Giair pháp vận tải đa phương thức linh hoạt
        </h3>
        <p style={{ marginBottom: '16px' }}>
          Tận dụng mạng lưới hạ tầng và phương tiện đa dạng, HAFC linh hoạt triển khai các phương án vận chuyển đa phương thức tích hợp,
          kết hợp hiệu quả giữa đường sắt, đường bộ, đường thủy nội địa và đường biển nhằm đáp ứng mọi yêu cầu vận chuyển từ đơn giản đến phức tạp.
        </p>
        <p style={{ marginBottom: '16px' }}>
          Chúng tôi không chỉ cung cấp dịch vụ giao nhận đơn thuần, mà còn tư vấn chiến lược logistics phù hợp với từng loại hàng hóa, tuyến đường và ngân sách của khách hàng.
          Mỗi hành trình đều được thiết kế như một giải pháp “đo ni đóng giày”, đảm bảo sự cân bằng giữa tốc độ – chi phí – độ tin cậy.
        </p>
        <p>
          Với năng lực kết nối đồng bộ từ kho xuất phát đến kho đích, HAFC giúp doanh nghiệp rút ngắn thời gian luân chuyển, tối ưu hóa chuỗi cung ứng và nâng cao khả năng cạnh tranh trên thị trường.
        </p>

      </div>
    </section>
  );
}
