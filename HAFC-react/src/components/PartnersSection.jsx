// src/components/PartnersSection.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PartnersSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const logos = [
    '10513623_Logo-Miwon-Elip_resized.png',
    'logo-nutifood-inkythuatso-17-14-02-45_resized.png',
    'logo2_resized.png',
    'LogoTop50_Masan_resized.png',
    'vifon.png',
    'Giấy Bãi Bằng.png',
    'Chánh Dương.png',
    'Hanacans.png',
    'Karofi.png',
    'Logo-Tuong-An.webp',
    'Perfetti.png',
    'Red_Bull_Logo.svg (1).png',
    'Rita Võ.png',
    'Thạch Bàn.png',
    'Catalan.png'
  ];

  // Inline styles
  const sectionStyle = {
    padding: '50px 20px',
    backgroundColor: '#fff',
    textAlign: 'center',
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#007bff',
    fontWeight: '600',
    fontSize: '28px',
    marginBottom: '30px',
  };

  const logoWrapStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  };

  const logoStyle = {
    height: '80px',
    maxWidth: '200px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  };


  return (
    <section className="partners" data-aos="fade-up" style={sectionStyle}>
      <div className="container">
        <h2 style={titleStyle}>Đối Tác & Khách Hàng</h2>
        <div className="partner-slider">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} style={logoWrapStyle}>
                <img
                  src={`/assest/partner/${logo}`}
                  alt={`Partner ${index + 1}`}
                  style={logoStyle}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
