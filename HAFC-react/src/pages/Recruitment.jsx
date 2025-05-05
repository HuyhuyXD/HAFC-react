import React from "react";

function Recruitment() {
  const sectionStyle = {
    padding: "60px 20px",
  };

  const titleStyle = {
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "30px",
  };

  const jobListStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const jobCardStyle = {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f7f7f7",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  const linkStyle = {
    color: "#007BFF",
    textDecoration: "none",
    fontWeight: "500",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Thông Tin Tuyển Dụng</h2>
      <div style={jobListStyle}>
        <div style={jobCardStyle}>
          <h3>Tuyển dụng Nhân viên Kinh doanh</h3>
          <p>
            Chúng tôi đang cần tuyển NVKD có kinh nghiệm tối thiểu 1 năm trong
            ngành logistics...
          </p>
          <a
            href="#"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Xem chi tiết
          </a>
        </div>
        <div style={jobCardStyle}>
          <h3>Tuyển dụng Tài xế Container</h3>
          <p>
            Yêu cầu có bằng FC, kinh nghiệm tối thiểu 2 năm, ưu tiên khu vực
            Hải Phòng...
          </p>
          <a
            href="#"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Xem chi tiết
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recruitment;
