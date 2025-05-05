import React, { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { supabase } from "../supabaseClient";

function ManageRecruitment() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data, error } = await supabase.from("tuyen_dung").select("*").order("created_at", { ascending: false });
    if (!error) setPosts(data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Xác nhận xóa bài viết này?")) return;
    await supabase.from("tuyen_dung").delete().eq("id", id);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <AdminLayout>
      <div className="form-wrapper">
        <h2>Danh sách bài tuyển dụng</h2>
        {posts.length === 0 ? <p>Không có bài viết nào.</p> : (
          <ul>
            {posts.map((post) => (
              <li key={post.id} style={{ marginBottom: 20, borderBottom: "1px solid #ccc", paddingBottom: 10 }}>
                <strong>{post.title}</strong>
                <p>{post.noi_dung?.substring(0, 80)}...</p>
                {post.image_url && (
                  <img src={post.image_url} alt={post.title} style={{ height: 80, marginBottom: 10 }} />
                )}
                <div>
                  <button onClick={() => handleDelete(post.id)} className="btn-primary" style={{ background: "#c0392b" }}>
                    Xóa
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </AdminLayout>
  );
}

export default ManageRecruitment;
