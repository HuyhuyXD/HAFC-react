import React, { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { supabase } from "../supabaseClient";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [newEmail, setNewEmail] = useState("");

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from("users") // 👈 sửa từ 'admins' thành 'users'
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setUsers(data);
  };

  const handleAddUser = async () => {
    if (!newEmail) return alert("Vui lòng nhập email!");

    const { error } = await supabase
      .from("users") // 👈 sửa từ 'admins' thành 'users'
      .insert({ email: newEmail });

    if (error) {
      alert("Thêm người dùng thất bại!");
    } else {
      alert("Thêm thành công!");
      setNewEmail("");
      fetchUsers();
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn chắc chắn muốn xóa người dùng này?")) return;

    const { error } = await supabase
      .from("users") // 👈 sửa từ 'admins' thành 'users'
      .delete()
      .eq("id", id);

    if (!error) {
      fetchUsers();
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AdminLayout>
      <div className="form-wrapper">
        <h2 className="text-center mb-6 text-xl font-bold text-blue-900">
          Quản lý người dùng
        </h2>

        <div className="flex gap-3 mb-6">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Email người dùng mới"
            className="input-style flex-1"
          />
          <button className="btn-primary" onClick={handleAddUser}>
            Thêm
          </button>
        </div>

        <div className="card-grid">
          {users.map((user) => (
            <div className="card relative" key={user.id}>
              <p className="font-semibold text-blue-800">{user.email}</p>
              <p className="text-sm text-gray-600">
                Ngày tạo: {new Date(user.created_at).toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(user.id)}
                className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded hover:bg-red-700"
              >
                Xóa
              </button>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

export default ManageUsers;
