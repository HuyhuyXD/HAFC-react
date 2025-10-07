// src/pages/Home.jsx
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import PartnersSection from '../components/PartnersSection'
import ContactSection from '../components/ContactSection'
import HighlightStats from '../components/HighlightStats'

function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, [])

  return (
    <main className="page-wrapper">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HighlightStats />
      <PartnersSection />
      <ContactSection />
    </main>
  )
}

export default Home

