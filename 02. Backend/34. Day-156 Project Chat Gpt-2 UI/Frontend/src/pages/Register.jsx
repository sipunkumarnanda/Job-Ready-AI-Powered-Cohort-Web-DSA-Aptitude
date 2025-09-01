import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false); // ✅ loading state
  const [serverError, setServerError] = useState(""); // ✅ server error

  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(""); // reset server error

    if (validate()) {
      setSubmitting(true); // ✅ disable button
      try {
        const res = await axios.post(
          "http://localhost:3000/api/auth/register",
          {
            fullName : {
              firstName: formData.firstName,
            lastName: formData.lastName
            },
            email: formData.email,
            password: formData.password,
          },
          {
            withCredentials: true,
          }
        );

        // console.log(res);

        // ✅ Only navigate if backend confirms success
        if (res.status === 201 || res.data.success) {
          navigate("/");
        }
      } catch (err) {
        console.error(err);
        setServerError(
          err.response?.data?.message ||
            "Registration failed. Please try again."
        );
      } finally {
        setSubmitting(false); // ✅ re-enable button
      }
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <label>First Name</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <label>Last Name</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

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
          {submitting ? "Registering..." : "Register"}
        </button>

        <p className="redirect-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
