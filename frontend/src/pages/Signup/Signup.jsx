import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiUser, FiStar } from "react-icons/fi";
import { RiCake3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "../Login/Login.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please enter all credentials");
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      alert("Account created successfully");

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.detail ||
          "Signup failed"
      );
    }
  };

  return (
    <div className="login-shell">
      <section className="login-visual">
        <motion.div
          className="brand-block"
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          <div className="brand-badge">
            <RiCake3Line />
          </div>

          <h1 className="brand-title">
            Birthday Tracker
          </h1>

          <p className="brand-tagline">
            Create your account and start
            managing birthdays, celebrations,
            reminders and banners.
          </p>

          <div className="brand-pill">
            <FiStar />
            Create Your Account
          </div>
        </motion.div>
      </section>

      <section className="login-card-wrap">
        <motion.div
          className="login-card"
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          <div className="card-header">
            <div className="card-chip">
              <FiStar />
              Secure Registration
            </div>

            <h2 className="card-title">
              Create Account
            </h2>

            <p className="card-copy">
              Register to access the Birthday
              Tracker platform.
            </p>
          </div>

          <div className="login-form">

            <label className="input-group">
              <span>Full Name</span>

              <div className="input-with-icon">
                <FiUser />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label className="input-group">
              <span>Email</span>

              <div className="input-with-icon">
                <FiMail />

                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label className="input-group">
              <span>Password</span>

              <div className="input-with-icon">
                <FiLock />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </label>

            <label className="input-group">
              <span>Confirm Password</span>

              <div className="input-with-icon">
                <FiLock />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={
                    formData.confirmPassword
                  }
                  onChange={handleChange}
                />
              </div>
            </label>

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="submit-btn"
              onClick={handleSignup}
            >
              Create Account
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="submit-btn"
              style={{
                marginTop: "10px",
              }}
              onClick={() =>
                navigate("/")
              }
            >
              Back To Login
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Signup;