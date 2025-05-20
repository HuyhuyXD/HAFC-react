import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AppRouter from './Router/Router'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])
  return <AppRouter />
}

export default App
