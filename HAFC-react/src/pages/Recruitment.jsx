import React, { useEffect, useState } from "react";
import supabase from '../supabaseClient';
import { Link } from "react-router-dom";

function Recruitment() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("tuyen_dung")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) setPosts(data);
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const paginatedPosts = posts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "28px", textAlign: "center", marginBottom: "30px", color: "#007bff" }}>
        Thông Tin Tuyển Dụng
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {paginatedPosts.map((post) => (
          <div
            key={post.id}
            style={{
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#f7f7f7",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {post.image_url && (
              <img
                src={post.image_url}
                alt="Tuyển dụng"
                style={{
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "250px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            )}

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h3 style={{ marginBottom: "6px", fontSize: "18px", fontWeight: "600" }}>
                  {post.tieu_de}
                </h3>
                <p style={{ marginBottom: "0", color: "#333" }}>
                  {post.noi_dung.length > 100
                    ? post.noi_dung.slice(0, 100) + "..."
                    : post.noi_dung}
                </p>
              </div>
              <Link
                to={`/tuyen-dung/${post.id}`}
                style={{
                  color: "#007BFF",
                  textDecoration: "none",
                  fontWeight: "500",
                  marginLeft: "20px",
                  whiteSpace: "nowrap",
                }}
                onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                Xem chi tiết →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {posts.length > 0 && (
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            style={{
              padding: "8px 12px",
              backgroundColor: "#eee",
              borderRadius: "6px",
              border: "none",
              cursor: page === 1 ? "not-allowed" : "pointer",
              opacity: page === 1 ? 0.5 : 1,
            }}
          >
            ← Trước
          </button>
          <span style={{ fontWeight: "500" }}>
            Trang {page} / {totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            style={{
              padding: "8px 12px",
              backgroundColor: "#eee",
              borderRadius: "6px",
              border: "none",
              cursor: page === totalPages ? "not-allowed" : "pointer",
              opacity: page === totalPages ? 0.5 : 1,
            }}
          >
            Tiếp →
          </button>
        </div>
      )}
    </div>
  );
}

export default Recruitment;
