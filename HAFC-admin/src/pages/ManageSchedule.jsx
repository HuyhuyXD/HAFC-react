import React, { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { supabase } from "../supabaseClient";

function ManageSchedule() {
  const [images, setImages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const { data, error } = await supabase
      .from("lich_tau")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setImages(data);
    else console.error("Lỗi khi fetch ảnh:", error);
  };

  const handleDelete = async (id, imageUrl) => {
    if (!window.confirm("Xác nhận xóa ảnh này?")) return;

    const imagePath = imageUrl.split("/storage/v1/object/public/lich-tau/")[1];
    await supabase.storage.from("lich-tau").remove([imagePath]);

    const { error } = await supabase.from("lich_tau").delete().eq("id", id);
    if (!error) fetchImages();
    else alert("Lỗi khi xóa khỏi database");
  };

  const handleUpdate = async (id) => {
    let updatedImageUrl = null;

    if (newImageFile) {
      const fileName = `${Date.now()}-${newImageFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("lich-tau")
        .upload(fileName, newImageFile);

      if (uploadError) {
        alert("❌ Upload ảnh mới thất bại");
        return;
      }

      const { data: urlData, error: urlError } = await supabase.storage
        .from("lich-tau")
        .getPublicUrl(fileName);

      if (urlError) {
        alert("❌ Không lấy được URL ảnh mới");
        return;
      }

      updatedImageUrl = urlData.publicUrl;
    }

    const { error } = await supabase
      .from("lich_tau")
      .update({
        mo_ta: newDescription,
        ...(updatedImageUrl && { image_url: updatedImageUrl }),
      })
      .eq("id", id);

    if (error) {
      alert("❌ Lỗi khi cập nhật");
    } else {
      alert("✅ Cập nhật thành công!");
      setEditingId(null);
      setNewDescription("");
      setNewImageFile(null);
      fetchImages();
    }
  };

  return (
    <AdminLayout>
      <div className="form-wrapper" style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#003366" }}>
          Ảnh lịch tàu đã upload
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          {images.length === 0 ? (
            <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>Không có ảnh nào.</p>
          ) : (
            images.map((img) => (
              <div
                key={img.id}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: 16,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <img
                  src={img.image_url}
                  alt={img.mo_ta}
                  style={{
                    width: "100%",
                    maxHeight: "280px",
                    objectFit: "contain",
                    borderRadius: 8,
                    boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <p style={{ marginTop: 12, fontWeight: 500 }}>{img.mo_ta}</p>
                <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
                  <button
                    onClick={() => handleDelete(img.id, img.image_url)}
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
                      setEditingId(img.id);
                      setNewDescription(img.mo_ta);
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

                {editingId === img.id && (
                  <div style={{ marginTop: 12, textAlign: "left" }}>
                    <input
                      type="text"
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                      placeholder="Mô tả mới"
                      style={{
                        width: "100%",
                        padding: 6,
                        marginBottom: 8,
                        borderRadius: 4,
                        border: "1px solid #ccc",
                      }}
                    />
                    <input
                      type="file"
                      onChange={(e) => setNewImageFile(e.target.files[0])}
                      style={{ marginBottom: 8 }}
                    />
                    <button
                      onClick={() => handleUpdate(img.id)}
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
              </div>
            ))
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

export default ManageSchedule;
