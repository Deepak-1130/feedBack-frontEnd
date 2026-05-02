import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import ShowCompany from "./Components/ShowCompany";
import CompanyCard from "./Cards/CompanyCard";
import CompanyRegister from "./Components/CompanyRegistration";
import PlacementRegistration from "./Pages/PlacementRegistration";
import "./App.css";

// ─── Simple auth guard ──────────────────────────────────────────────────────
// Reads role saved in sessionStorage by LoginPage after successful login
function ProtectedRoute({ allowedRole, children }) {
  const role = sessionStorage.getItem("role");
  if (!role) return <Navigate to="/login" replace />;
  if (allowedRole && role !== allowedRole) return <Navigate to="/login" replace />;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Public ── */}
        <Route path="/"        element={<LandingPage />} />
        <Route path="/login"   element={<LoginPage />} />
        <Route path="/register" element={<PlacementRegistration />} />

        {/* ── Student dashboard ── */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute allowedRole="student">
              <CompanyCard />
            </ProtectedRoute>
          }
        />

        {/* ── Admin dashboard ── */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRole="admin">
              <ShowCompany />
            </ProtectedRoute>
          }
        />

        {/* ── Company registration (admin only) ── */}
        <Route
          path="/admin/company/register"
          element={
            <ProtectedRoute allowedRole="admin">
              <CompanyRegister />
            </ProtectedRoute>
          }
        />

        {/* ── Fallback ── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;