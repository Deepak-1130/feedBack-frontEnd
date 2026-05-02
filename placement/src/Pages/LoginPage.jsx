import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    sessionStorage.setItem("role", role);
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/student/dashboard");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Page Placeholder</h2>
      <p>This is a temporary login page.</p>
      <button onClick={() => handleLogin("student")} style={{ margin: "10px" }}>
        Login as Student
      </button>
      <button onClick={() => handleLogin("admin")} style={{ margin: "10px" }}>
        Login as Admin
      </button>
    </div>
  );
}

export default LoginPage;
