import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import supabase from '../supabaseClient';

function TuyenDungDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("tuyen_dung")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setError("Không tìm thấy bài viết.");
        console.error("Lỗi:", error.message);
      } else {
        setPost(data);
      }

      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Đang tải bài viết...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="page-wrapper">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">{post.tieu_de}</h2>

        {post.image_url && (
          <img
            src={post.image_url}
            alt="Ảnh bài tuyển dụng"
            className="w-full max-h-[400px] object-contain rounded mb-6"
          />
        )}

        <p className="text-gray-800 whitespace-pre-line mb-8">
          {post.noi_dung || "Không có nội dung."}
        </p>

        <Link
          to="/tuyen-dung"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          ← Quay lại danh sách
        </Link>
      </div>
    </div>
  );
}

export default TuyenDungDetail;
