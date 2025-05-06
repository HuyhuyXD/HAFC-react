import React, { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { supabase } from "../supabaseClient";

function RecruitmentPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !image) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    // Upload ảnh trước
    const fileName = `${Date.now()}-${image.name}`;
    const { error: uploadError } = await supabase.storage
      .from("tuyen-dung")
      .upload(fileName, image);

    if (uploadError) {
      alert("❌ Upload ảnh thất bại");
      return;
    }

    // Lấy public URL ảnh
    const { data: urlData, error: urlError } = await supabase.storage
      .from("tuyen-dung")
      .getPublicUrl(fileName);

    if (urlError) {
      alert("❌ Không lấy được URL ảnh");
      return;
    }

    const imageUrl = urlData.publicUrl;

    // Gửi dữ liệu vào bảng tuyen_dung
    const { error: insertError } = await supabase.from("tuyen_dung").insert([
      {
        tieu_de: title,
        noi_dung: description,
        image_url: imageUrl,
      },
    ]);

    if (insertError) {
      alert("❌ Đăng bài thất bại!");
      console.error(insertError);
    } else {
      alert("✅ Đăng bài thành công!");
      setTitle("");
      setDescription("");
      setImage(null);
    }
  };

  return (
    <AdminLayout>
      <div className="form-wrapper">
        <h2>Đăng bài tuyển dụng</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Tiêu đề</label>
          <input
            type="text"
            id="title"
            className="input-style"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description">Mô tả</label>
          <textarea
            id="description"
            rows="6"
            className="textarea-style"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="image">Ảnh đại diện</label>
          <input
            type="file"
            id="image"
            className="input-style"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button type="submit" className="btn-primary">Đăng bài</button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default RecruitmentPost;
