import React, { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { supabase } from "../supabaseClient";

function ManageAdmins() {
  const [admins, setAdmins] = useState([]);
  const [newEmail, setNewEmail] = useState("");

  const fetchAdmins = async () => {
    const { data, error } = await supabase
      .from("admins")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setAdmins(data);
  };

  const handleAddAdmin = async () => {
    if (!newEmail) return alert("Vui lòng nhập email!");

    const { error } = await supabase
      .from("admins")
      .insert({ email: newEmail });

    if (error) {
      alert("Thêm admin thất bại!");
    } else {
      alert("Thêm admin thành công!");
      setNewEmail("");
      fetchAdmins();
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn chắc chắn muốn xóa admin này?")) return;

    const { error } = await supabase.from("admins").delete().eq("id", id);
    if (!error) {
      fetchAdmins();
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <AdminLayout>
      <div className="form-wrapper">
        <h2 className="text-center mb-6 text-xl font-bold text-blue-900">
          Quản lý admin
        </h2>

        <div className="flex gap-3 mb-6">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Email admin mới"
            className="input-style flex-1"
          />
          <button className="btn-primary" onClick={handleAddAdmin}>
            Thêm
          </button>
        </div>

        <div className="card-grid">
          {admins.map((admin) => (
            <div className="card relative" key={admin.id}>
              <p className="font-semibold text-blue-800">{admin.email}</p>
              <p className="text-sm text-gray-600">
                Ngày tạo: {new Date(admin.created_at).toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(admin.id)}
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

export default ManageAdmins;
