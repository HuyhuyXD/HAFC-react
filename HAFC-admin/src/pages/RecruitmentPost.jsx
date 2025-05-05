import React, { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import axios from "axios";

function PostRecruitment() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !image) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/post-recruitment", formData);
      alert("Đăng bài thành công!");
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Đăng bài thất bại!");
    }
  };

  return (
    <AdminLayout>
      <div className="form-wrapper">
        <h2>Đăng bài tuyển dụng</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
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
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button type="submit" className="btn-primary">Đăng bài</button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default PostRecruitment;
