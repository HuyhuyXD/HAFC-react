// src/components/ContactSection.jsx
import React from 'react'

function ContactSection() {
  return (
    <section className="contact py-16 bg-blue-50" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Liên Hệ Với Chúng Tôi</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p><strong>Địa chỉ:</strong> Văn phòng 3B, Tầng 3, Tòa B, Tòa nhà Green Pearl, 378 Minh Khai, Hà Nội</p>
            <p><strong>Hotline:</strong> +84-24-35147888 / 0977043161</p>
            <p><strong>Fax:</strong> +84.236.3889846</p>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Họ và tên" className="w-full p-3 border rounded" required />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded" required />
            <textarea placeholder="Nội dung liên hệ..." rows="5" className="w-full p-3 border rounded" required></textarea>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Gửi liên hệ</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
