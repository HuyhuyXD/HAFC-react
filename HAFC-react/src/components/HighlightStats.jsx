import React from 'react';
import CountUp from 'react-countup';

export default function HighlightStats() {
  const containerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '60px 20px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '36px',
    color: '#003366',
    marginBottom: '40px',
    fontWeight: 'bold',
  };

  const contentWrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '40px',
    maxWidth: '1100px',
    margin: '0 auto',
  };

  const chartStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    alignItems: 'center',
    flex: '1',
    minWidth: '250px',
  };

  const boxStyle = {
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    padding: '30px 40px',
    textAlign: 'center',
    width: '250px',
    transition: 'transform 0.3s',
    cursor: 'pointer',
  };

  const iconStyle = {
    fontSize: '48px',
    marginBottom: '15px',
  };

  const headingStyle = {
    fontSize: '32px',
    color: '#003366',
    margin: 0,
  };

  const paragraphStyle = {
    fontSize: '16px',
    color: '#333',
    marginTop: '10px',
  };

  const infoBoxStyle = {
    flex: '1',
    minWidth: '280px',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    justifyContent: 'center',
  };

  const infoParagraph = {
    backgroundColor: 'white',
    padding: '25px 30px',
    borderRadius: '16px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    textAlign: 'justify',
    lineHeight: '1.6',
    color: '#333',
  };

  return (
    <section className="highlight-container" style={containerStyle}>
      <h2 className="highlight-title" style={titleStyle}>Số liệu nổi bật</h2>

      <div className="highlight-wrapper" style={contentWrapperStyle}>
        {/* Biểu đồ động bên trái */}
        <div className="highlight-chart" style={chartStyle}>
          <div
            className="highlight-box"
            style={boxStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            <div className="highlight-icon" style={iconStyle}>📦</div>
            <h2 className="highlight-number" style={headingStyle}>
              <CountUp end={50000} duration={2} separator="," />
            </h2>
            <p className="highlight-label" style={paragraphStyle}>TEU vận chuyển mỗi năm</p>
          </div>

          <div
            className="highlight-box"
            style={boxStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            <div className="highlight-icon" style={iconStyle}>⚖️</div>
            <h2 className="highlight-number" style={headingStyle}>
              <CountUp end={700000} duration={2.5} separator="," />
            </h2>
            <p className="highlight-label" style={paragraphStyle}>Tấn hàng hóa mỗi năm</p>
          </div>
        </div>

        {/* Nội dung mô tả bên phải */}
        <div className="highlight-info" style={infoBoxStyle}>
          <div className="highlight-info-box" style={infoParagraph}>
            Với sản lượng vận chuyển đạt 50,000 TEU mỗi năm, chúng tôi tự tin khẳng định năng lực vận hành vững chắc và ổn định trong lĩnh vực logistics và vận tải biển.
          </div>
          <div className="highlight-info-box" style={infoParagraph}>
            Hơn 700,000 tấn hàng hóa được xử lý hàng năm là minh chứng cho uy tín, hiệu quả và độ tin cậy của hệ thống dịch vụ do chúng tôi cung cấp.
          </div>
        </div>
      </div>
    </section>
  );
}
