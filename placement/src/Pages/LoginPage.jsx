import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔐 LOGIN FUNCTION
  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // 👉 Role logic (temporary)
    let role = "student";

    if (email === "admin@gmail.com") {
      role = "admin";
    }

    // Save role
    sessionStorage.setItem("role", role);

    // Navigate based on role
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/student/dashboard");
    }
  };

  // 📝 SIGNUP CLICK
  const handleSignup = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Enter your credentials to access your placement dashboard.</p>

        {/* EMAIL */}
        <div className="input-group">
          <label>Email Address</label>
          <div className="input-box">
            <span className="icon">📧</span>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="input-group">
          <div className="password-label">
            <label>Password</label>
            <span className="forgot">Forgot Password?</span>
          </div>

          <div className="input-box">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* LOGIN BUTTON */}
        <button className="login-btn" onClick={handleLogin}>
          Sign In
        </button>

        {/* DIVIDER */}
        <div className="divider">
          <span>OR CONTINUE WITH</span>
        </div>

        {/* SOCIAL */}
        <div className="social-buttons">
          <button className="social-btn">Google</button>
          <button className="social-btn">LinkedIn</button>
        </div>

        {/* SIGNUP */}
        <p className="signup-text">
          Don’t have an account?{" "}
          <span onClick={handleSignup}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;