import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"; // đường dẫn đúng file bro đặt

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ManageSchedule from "./pages/ManageSchedule";
import ManageRecruitment from "./pages/ManageRecruitment";
import RecruitmentPost from "./pages/RecruitmentPost";
import UploadSchedule from "./pages/UploadSchedule";

<Routes>
  <Route path="/login" element={<Login />} />

  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />
  <Route
    path="/upload-schedule"
    element={
      <ProtectedRoute>
        <UploadSchedule />
      </ProtectedRoute>
    }
  />
  <Route
    path="/post-recruitment"
    element={
      <ProtectedRoute>
        <RecruitmentPost />
      </ProtectedRoute>
    }
  />
  <Route
    path="/manage-schedule"
    element={
      <ProtectedRoute>
        <ManageSchedule />
      </ProtectedRoute>
    }
  />
  <Route
    path="/manage-recruitment"
    element={
      <ProtectedRoute>
        <ManageRecruitment />
      </ProtectedRoute>
    }
  />
</Routes>
