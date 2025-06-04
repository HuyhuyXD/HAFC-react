import React, { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { supabase } from "../supabaseClient";

function ManageSchedule() {
  const [schedules, setSchedules] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    const { data, error } = await supabase
      .from("lich_tau")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setSchedules(data);
    else console.error("❌ Lỗi khi fetch lịch tàu:", error);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xoá ảnh này không?")) return;

    const { error } = await supabase.from("lich_tau").delete().eq("id", id);
    if (!error) {
      alert("✅ Đã xoá ảnh lịch tàu!");
      fetchSchedules();
    } else {
      alert("❌ Không xoá được, kiểm tra console.");
      console.error(error.message);
    }
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
      fetchSchedules();
    }
  };

  return (
    <AdminLayout>
      <div className="form-wrapper" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: 30, color: "#003366" }}>
          Danh sách ảnh lịch tàu đã upload
        </h2>

        {schedules.length === 0 ? (
          <p style={{ textAlign: "center" }}>Không có ảnh nào.</p>
        ) : (
          <ul style={{ padding: 0, listStyle: "none" }}>
            {schedules.map((item) => (
              <li
                key={item.id}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: 16,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                  marginBottom: 20,
                  textAlign: "center",
                }}
              >
                <img
                  src={item.image_url}
                  alt={item.mo_ta}
                  style={{
                    maxWidth: "100%",
                    maxHeight: 260,
                    objectFit: "contain",
                    borderRadius: 8,
                    marginBottom: 12,
                  }}
                />
                <p style={{ fontWeight: 500 }}>{item.mo_ta}</p>

                <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 12 }}>
                  <button
                    onClick={() => handleDelete(item.id)}
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
                      setEditingId(item.id);
                      setNewDescription(item.mo_ta);
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

                {editingId === item.id && (
                  <div style={{ marginTop: 12, textAlign: "left" }}>
                    <input
                      type="text"
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                      placeholder="Mô tả mới"
                      style={{
                        width: "100%",
                        padding: 8,
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
                      onClick={() => handleUpdate(item.id)}
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

export default ManageSchedule;
