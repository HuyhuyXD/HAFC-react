import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function SidebarSchedule() {
  const [latestImage, setLatestImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestImage = async () => {
      const { data, error } = await supabase
        .from('lich_tau')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1);

      if (!error && data.length > 0) {
        setLatestImage(data[0]);
      }
    };

    fetchLatestImage();
  }, []);

  const imageStyle = {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease',
    display: 'block',
    margin: '0 auto'
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'scale(1.08)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  const boxStyle = {
    padding: '20px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    textAlign: 'center',
    border: '1px solid #eee',
    maxWidth: '320px',
    width: '100%'
  };

  const titleStyle = {
    marginBottom: '16px',
    color: '#007bff',
    fontSize: '18px',
    fontWeight: '600'
  };

  return (
    <div className="sidebar-box" style={boxStyle}>
      <h3 style={titleStyle}>Lịch tàu chạy</h3>
      {latestImage ? (
        <img
          src={latestImage.image_url}
          alt={latestImage.mo_ta || 'Lịch tàu'}
          style={imageStyle}
          onClick={() => navigate('/lich-tau')}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      ) : (
        <p style={{ textAlign: 'center' }}>Đang tải lịch...</p>
      )}
    </div>
  );
}