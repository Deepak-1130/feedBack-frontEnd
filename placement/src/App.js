import logo from './logo.svg';
import PlacedStudentCard from './Cards/PlacedStudentCard';
import PlacedStudent from './Components/PlacedStudent';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import AboutPage from "./Pages/About";
import CompaniesPage from "./Pages/Companies";
import ContactPage from "./Pages/Contactus";
// import ShowCompany from "./Components/ShowCompany";
import CompanyCard from "./Cards/CompanyCard";
import CompanyRegister from "./Components/CompanyRegistration";
import PlacementRegistration from "./Pages/PlacementRegistration";
import AdminDashboard from "./Pages/AdminDashboard";
import StudentDashboard from "./Pages/StudentDashboard";
import "./App.css";

// ─── Simple auth guard ──────────────────────────────────────────────────────
function ProtectedRoute({ allowedRole, children }) {
  const role = sessionStorage.getItem("role");
  if (!role) return <Navigate to="/login" replace />;
  if (allowedRole && role !== allowedRole) return <Navigate to="/login" replace />;
  return children;
}

function App() {
  // const detail={
  //       "student": {
  //           "registerNumber": 1002,
  //           "firstName": "Arun",
  //           "lastName": "Raj",
  //           "departments": "IT",
  //           "passedOutYear": 2024,
  //           "fatherName": "Suresh",
  //           "motherName": "Meena",
  //           "fatherOccupation": "Business",
  //           "motherOccupation": "Housewife",
  //           "parentNumber": 9876543211,
  //           "studentNumber": 9000000002,
  //           "emailId": "arun.raj@gmail.com",
  //           "nativePlace": "Madurai",
  //           "historyOfArrears": 1,
  //           "cgpa": 7
  //       },
  //       "company": {
  //           "companyId": 1,
  //           "companyName": "TCS",
  //           "branch": "IT",
  //           "email": null,
  //           "mobileNo": null,
  //           "histOfArrear": false,
  //           "lastHighestPackage": 120,
  //           "logoPicPath": null,
  //           "companyType": "IT",
  //           "description": "IT services company"
  //       },
  //       "placedstatus": "Placed",
  //       "offerPath": "1002offer.pdf",
  //       "placedId": 1
  //   }
  return (
  
  //   <>
  //  {/* <CompanyCard/> */}
  //   <PlacedStudent/>
  //  <CompanyRegister/>
  //  </>
    <BrowserRouter>
      <Routes>
        {/* ── Public Routes ── */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<PlacementRegistration />} />

        {/* ── Separate Navbar Pages ── */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* ── Student dashboard ── */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        {/* ── Admin dashboard ── */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboard />
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