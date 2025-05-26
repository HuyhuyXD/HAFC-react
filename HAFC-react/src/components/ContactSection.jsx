import React, { useState } from 'react';
import axios from 'axios';

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      if (res.data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Họ và tên" className="w-full p-3 border rounded" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded" required />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Nội dung liên hệ..." rows="5" className="w-full p-3 border rounded" required></textarea>
      <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Gửi liên hệ</button>

      {status === 'success' && <p className="text-green-600">✅ Gửi thành công!</p>}
      {status === 'error' && <p className="text-red-600">❌ Gửi thất bại. Thử lại sau.</p>}
    </form>
  );
}

export default ContactSection;
