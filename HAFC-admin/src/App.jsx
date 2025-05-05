import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RecruitmentPost from "./pages/RecruitmentPost";
import ScheduleSupabase from "./pages/ScheduleSupabase";
import ManageRecruitment from "./pages/ManageRecruitment";
import ManageSchedule from "./pages/ManageSchedule";

function App() {
  const isLoggedIn = localStorage.getItem("admin_logged_in") === "true";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {isLoggedIn ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
            <Route path="/post-recruitment" element={<RecruitmentPost />} />
            <Route path="/upload-schedule" element={<ScheduleSupabase />} />
            <Route path="/manage-recruitment" element={<ManageRecruitment />} />
            <Route path="/manage-schedule" element={<ManageSchedule />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;