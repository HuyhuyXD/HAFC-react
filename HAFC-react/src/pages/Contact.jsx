// src/pages/Contact.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../assest/style.css';
import '../assest/responsive.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("🟡 Gửi dữ liệu:", formData); // ✅ Debug client-side

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      
      console.log("🟢 Kết quả từ server:", res.data); // ✅ Debug response

      if (res.data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('🔴 Error sending contact form:', error);
      setStatus('error');
    }
  };

  return (
    <section className="contact-page py-16" data-aos="fade-up">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Liên hệ</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Họ và tên" className="w-full p-3 border rounded" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded" required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Nội dung liên hệ..." rows="5" className="w-full p-3 border rounded" required />

          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Gửi liên hệ
          </button>

          {status === 'success' && <p className="text-green-600">✅ Gửi thành công!</p>}
          {status === 'error' && <p className="text-red-600">❌ Gửi thất bại. Vui lòng thử lại sau.</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
