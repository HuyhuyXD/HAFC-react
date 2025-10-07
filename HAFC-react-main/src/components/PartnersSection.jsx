// src/components/PartnersSection.jsx
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

function PartnersSection() {
  const windowWidth = useWindowWidth();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000, // nhẹ lại cho mượt
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
    '10513623_Logo-Miwon-Elip_resized (1).png',
    'Catalan (1).png',
    'Chánh Dương (1).png',
    'Giấy Bãi Bằng (1).png',
    'zoomed_Thạch Bàn.png',
    'Hanacans (1).png',
    'Karofi (1).png',
    'zoomed_Nutifood.png',
    'Logo-Tuong-An.webp',
    'logo2_resized (1).png',
    'fixed_logo-masan-group-compressed.png',
    'final_khai_hoan.png',
    'Red_Bull_Logo.svg (1).png',
    'Rita Võ.png',
    'zoomed_Perfetti.png',
    'zoomed_Vifon.png'
  ];

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
    height: windowWidth < 480 ? '80px' : windowWidth < 768 ? '90px' : '100px',
    padding: windowWidth < 480 ? '6px' : '10px',
    boxSizing: 'border-box',
  };

  const logoStyle = {
    maxWidth: '100%',
    maxHeight: windowWidth < 480 ? '60px' : '80px',
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
