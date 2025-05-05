// src/components/PartnersSection.jsx
import React from 'react'

function PartnersSection() {
  return (
    <section className="partners" data-aos="fade-up">
      <div className="container">
      <h2 style={{ textAlign: 'center', color: '#007bff', fontWeight: '600' }}>Đối Tác & Khách Hàng</h2>
        <div className="partner-grid">
          <img src="/assest/partner/10513623_Logo-Miwon-Elip_resized.png" alt="Partner 1" />
          <img src="/assest/partner/logo-daesang1-03_resized.png" alt="Partner 2" />
          <img src="/assest/partner/logo-nutifood-inkythuatso-17-14-02-45_resized.png" alt="Partner 3" />
          <img src="/assest/partner/logo2_resized.png" alt="Partner 4" />
          <img src="/assest/partner/LogoTop50_Masan_resized.png" alt="Partner 5" />
          <img src="/assest/partner/vifon.png" alt="Partner 6" />
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
