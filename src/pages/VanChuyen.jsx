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
        <h3 style={{ marginTop: '30px', fontWeight: '700', fontSize: '20px' }}>
          Dịch vụ Vận chuyển Đường bộ Xuyên Biên giới – Giải pháp logistics tối ưu từ HAFC
        </h3>

        <p style={{ marginTop: '10px', lineHeight: '1.8' }}>
          Nhằm đáp ứng nhu cầu vận chuyển ngày càng cao và đa dạng của khách hàng, <strong>HAFC</strong> đã đầu tư mới đội xe container với <strong>20 phương tiện hiện đại</strong>, đồng thời không ngừng mở rộng quy mô hoạt động để nâng cao năng lực phục vụ. Chúng tôi cung cấp <strong>dịch vụ vận chuyển đường bộ xuyên biên giới trọn gói</strong>, kết nối hiệu quả giữa các quốc gia trong khu vực bao gồm <strong>Trung Quốc – Việt Nam – Lào / Campuchia – Thái Lan</strong>.
        </p>

        <p style={{ marginTop: '10px', lineHeight: '1.8' }}>
          Với lợi thế sở hữu đội xe riêng, HAFC chủ động trong việc điều phối, kiểm soát tiến độ và đảm bảo hàng hóa được vận chuyển <strong>an toàn, nhanh chóng và đúng hẹn</strong>. <strong>Thời gian vận chuyển chỉ từ 2–3 ngày</strong>, giúp doanh nghiệp rút ngắn thời gian lưu kho, tăng hiệu quả chuỗi cung ứng và thúc đẩy tốc độ kinh doanh.
        </p>

        <p style={{ marginTop: '10px', lineHeight: '1.8' }}>
          Bên cạnh đó, chúng tôi luôn đặt yếu tố <strong>chi phí tối ưu</strong> lên hàng đầu, mang đến giải pháp tiết kiệm nhưng vẫn đảm bảo chất lượng dịch vụ ở mức cao nhất. Đội ngũ lái xe và điều phối viên chuyên nghiệp, thông thạo địa hình và quy trình thủ tục qua các cửa khẩu quốc tế, sẽ hỗ trợ khách hàng một cách nhanh chóng và chính xác.
        </p>

        <p style={{ marginTop: '10px', lineHeight: '1.8' }}>
          <strong>HAFC cam kết trở thành đối tác tin cậy</strong> trên hành trình phát triển của bạn, đồng hành cùng doanh nghiệp trong mọi nhu cầu vận chuyển hàng hóa quốc tế bằng đường bộ.
        </p>

        <h3 style={{ marginTop: '30px', fontWeight: '700', fontSize: '20px' }}>
          Cam Kết Từ HAFC
        </h3>

        <div style={{ marginTop: '15px', lineHeight: '1.8' }}>
          <div>🚛 An toàn hàng hóa là ưu tiên hàng đầu</div>
          <div>⏱ Giao hàng đúng thời gian cam kết</div>
          <div>📄 Thủ tục chứng từ đầy đủ, minh bạch</div>
        </div>
      </div>
    </section>
  );
}
