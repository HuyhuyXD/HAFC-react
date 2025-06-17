import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RecruitmentPost from "./pages/RecruitmentPost";
import ScheduleSupabase from "./pages/ScheduleSupabase";
import ManageRecruitment from "./pages/ManageRecruitment";
import ManageSchedule from "./pages/ManageSchedule";
import ManageUsers from "./pages/ManageUsers";
import ManageAdmins from "./pages/ManageAdmins";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("admin_logged_in") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {isLoggedIn ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/post-recruitment" element={<RecruitmentPost />} />
            <Route path="/upload-schedule" element={<ScheduleSupabase />} />
            <Route path="/manage-recruitment" element={<ManageRecruitment />} />
            <Route path="/manage-schedule" element={<ManageSchedule />} />
            <Route path="/manage-users" element={<ManageUsers />} />
            <Route path="/manage-admins" element={<ManageAdmins />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
