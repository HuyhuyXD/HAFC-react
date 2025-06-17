import React, { useEffect, useState } from "react";
import supabase from '../supabaseClient';

function Schedule() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 4;

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from("lich_tau")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Lỗi khi tải ảnh lịch tàu:", error);
      } else {
        setImages(data);
      }
    };

    fetchImages();
  }, []);

  // Tính vị trí phân trang
  const indexOfLast = currentPage * imagesPerPage;
  const indexOfFirst = indexOfLast - imagesPerPage;
  const currentImages = images.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Style
  const galleryStyle = {
    padding: "60px 20px",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "28px",
    marginBottom: "30px",
  };

  const verticalListStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };

  const imageStyle = {
    width: "80%", // thu nhỏ ảnh lại
    height: "auto",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    margin: "0 auto",
  };

  const captionStyle = {
    marginTop: "8px",
    fontStyle: "italic",
    color: "#555",
  };

  const paginationStyle = {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  };

  const pageButtonStyle = (isActive) => ({
    padding: "8px 14px",
    borderRadius: "6px",
    backgroundColor: isActive ? "#0d6efd" : "#e9ecef",
    color: isActive ? "white" : "#333",
    border: "none",
    cursor: "pointer",
    fontWeight: isActive ? "bold" : "normal",
  });

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = "scale(1.02)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div style={galleryStyle}>
      <h2 style={titleStyle}>Lịch Tàu Chạy</h2>
      <div style={verticalListStyle}>
        {currentImages.map((img, index) => (
          <div key={img.id || index}>
            <img
              src={img.image_url}
              alt={img.mo_ta || `Lịch tàu ${index + 1}`}
              style={imageStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            {img.mo_ta && <p style={captionStyle}>{img.mo_ta}</p>}
          </div>
        ))}
      </div>

      {/* Phân trang */}
      <div style={paginationStyle}>
        <button
          style={pageButtonStyle(false)}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;&lt;
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            style={pageButtonStyle(currentPage === i + 1)}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          style={pageButtonStyle(false)}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
}

export default Schedule;
