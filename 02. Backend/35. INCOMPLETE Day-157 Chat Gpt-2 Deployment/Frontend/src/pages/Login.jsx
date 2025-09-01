import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false); // ✅ loading state
  const [serverError, setServerError] = useState(""); // ✅ show API error

  const navigate = useNavigate()

  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(""); // reset error message

    if (validate()) {
      setSubmitting(true); // ✅ disable button
      try {
        const res = await axios.post(
          "http://localhost:3000/api/auth/login",
          {
            email: formData.email,
            password: formData.password,
          },
          {
            withCredentials: true,
          }
        );
        localStorage.setItem("email", res.data.user.email)
        localStorage.setItem("name", res.data.user.fullName.firstName + " " + res.data.user.fullName.lastName)
        navigate('/')
        // ✅ Redirect or store token here
      } catch (err) {
        console.error(err);
        setServerError(
          err.response?.data?.message || "Login failed. Please try again."
        );
      } finally {
        setSubmitting(false); // ✅ re-enable button
      }
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {errors.password && <p className="error">{errors.password}</p>}

        {serverError && <p className="error">{serverError}</p>} {/* ✅ API error */}

        <button type="submit" disabled={submitting}>
          {submitting ? "Logging in..." : "Login"}
        </button>

        <p className="redirect-text">
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
