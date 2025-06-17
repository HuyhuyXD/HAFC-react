import React, { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { supabase } from "../supabaseClient";

function ScheduleSupabase() {
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Vui lòng chọn ảnh lịch tàu!");
      return;
    }

    const fileName = `${Date.now()}-${imageFile.name}`;

    const { error: uploadError } = await supabase.storage
      .from("lich-tau")
      .upload(fileName, imageFile);

    if (uploadError) {
      alert("❌ Upload ảnh thất bại");
      console.error(uploadError);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("lich-tau")
      .getPublicUrl(fileName);

    const imageUrl = urlData.publicUrl;

    const { error: insertError } = await supabase
      .from("lich_tau")
      .insert([{ image_url: imageUrl, mo_ta: description }]);

    if (insertError) {
      alert("❌ Lỗi lưu vào database");
      console.error(insertError);
    } else {
      alert("✅ Tải ảnh thành công!");
      setImageFile(null);
      setDescription("");
    }
  };

  return (
    <AdminLayout>
      <div className="form-wrapper">
        <h2>📤 Upload ảnh lịch tàu</h2>
        <form onSubmit={handleUpload}>
          <input
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
          <textarea
            placeholder="Nhập mô tả ảnh (VD: Lịch tàu tuần 18)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Tải ảnh</button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default ScheduleSupabase;
