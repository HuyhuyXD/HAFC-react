import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Recruitment from '../pages/Recruitment'
import VanChuyen from '../pages/VanChuyen'
import Logistic from '../pages/Logistic'
import KhaiThacHangLe from '../pages/KhaiThacHangLe'
import TuyenDungDetail from "../pages/TuyenDungDetail";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tuyen-dung" element={<Recruitment />} />
        <Route path="/dich-vu-van-chuyen" element={<VanChuyen />} />
        <Route path="/dich-vu-logistic" element={<Logistic />} />
        <Route path="/khai-thac-hang-le" element={<KhaiThacHangLe />} />
        <Route path="/tuyen-dung/:id" element={<TuyenDungDetail />} />
      </Routes>
      <Footer />
    </Router>
  )
}
