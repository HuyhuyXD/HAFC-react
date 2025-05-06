import React, { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { supabase } from "../supabaseClient";

function ManageRecruitment() {
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("tuyen_dung")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setPosts(data);
    else console.error("Lỗi khi fetch bài viết:", error);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Xác nhận xóa bài viết này?")) return;
    await supabase.from("tuyen_dung").delete().eq("id", id);
    fetchPosts();
  };

  const handleUpdate = async (id) => {
    let updatedImageUrl = null;

    if (newImageFile) {
      const fileName = `${Date.now()}-${newImageFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("tuyen-dung")
        .upload(fileName, newImageFile);

      if (uploadError) {
        alert("❌ Upload ảnh mới thất bại");
        return;
      }

      const { data: urlData, error: urlError } = await supabase.storage
        .from("tuyen-dung")
        .getPublicUrl(fileName);

      if (urlError) {
        alert("❌ Không lấy được URL ảnh mới");
        return;
      }

      updatedImageUrl = urlData.publicUrl;
    }

    const { error } = await supabase
      .from("tuyen_dung")
      .update({
        tieu_de: newTitle,
        noi_dung: newContent,
        ...(updatedImageUrl && { image_url: updatedImageUrl }),
      })
      .eq("id", id);

    if (error) {
      alert("❌ Lỗi khi cập nhật");
    } else {
      alert("✅ Cập nhật thành công!");
      setEditingId(null);
      setNewTitle("");
      setNewContent("");
      setNewImageFile(null);
      fetchPosts();
    }
  };

  return (
    <AdminLayout>
      <div className="form-wrapper" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: 30, color: "#003366" }}>
          Danh sách bài tuyển dụng
        </h2>

        {posts.length === 0 ? (
          <p style={{ textAlign: "center" }}>Không có bài viết nào.</p>
        ) : (
          <ul style={{ padding: 0, listStyle: "none" }}>
            {posts.map((post) => (
              <li
                key={post.id}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: 16,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                  marginBottom: 20,
                }}
              >
                <strong style={{ fontSize: 16 }}>{post.tieu_de}</strong>
                <p style={{ margin: "8px 0" }}>
                  {post.noi_dung?.length > 120
                    ? post.noi_dung.substring(0, 120) + "..."
                    : post.noi_dung}
                </p>
                {post.image_url && (
                  <img
                    src={post.image_url}
                    alt={post.tieu_de}
                    style={{
                      maxWidth: "100%",
                      height: 120,
                      objectFit: "contain",
                      borderRadius: 8,
                      marginBottom: 8,
                    }}
                  />
                )}
                <div style={{ 
                  display: "flex",
                  justifyContent: "center",
                  gap: 10,
                  marginTop: 12 
                  }}>
                    
                  <button
                    onClick={() => handleDelete(post.id)}
                    style={{
                      background: "#c0392b",
                      color: "white",
                      border: "none",
                      borderRadius: 6,
                      padding: "6px 12px",
                      cursor: "pointer",
                    }}
                  >
                    Xóa
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(post.id);
                      setNewTitle(post.tieu_de);
                      setNewContent(post.noi_dung);
                      setNewImageFile(null);
                    }}
                    style={{
                      background: "#2980b9",
                      color: "white",
                      border: "none",
                      borderRadius: 6,
                      padding: "6px 12px",
                      cursor: "pointer",
                    }}
                  >
                    Sửa
                  </button>
                </div>

                {editingId === post.id && (
                  <div style={{ marginTop: 12 }}>
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="Tiêu đề mới"
                      style={{
                        width: "100%",
                        padding: 8,
                        marginBottom: 8,
                        borderRadius: 4,
                        border: "1px solid #ccc",
                      }}
                    />
                    <textarea
                      rows={4}
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      placeholder="Nội dung mới"
                      style={{
                        width: "100%",
                        padding: 8,
                        marginBottom: 8,
                        borderRadius: 4,
                        border: "1px solid #ccc",
                      }}
                    ></textarea>
                    <input
                      type="file"
                      onChange={(e) => setNewImageFile(e.target.files[0])}
                      style={{ marginBottom: 8 }}
                    />
                    <button
                      onClick={() => handleUpdate(post.id)}
                      style={{
                        background: "#27ae60",
                        color: "white",
                        border: "none",
                        borderRadius: 6,
                        padding: "6px 12px",
                        cursor: "pointer",
                      }}
                    >
                      Lưu
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </AdminLayout>
  );
}

export default ManageRecruitment;
