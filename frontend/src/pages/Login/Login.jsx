import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiLock, FiMail, FiStar } from "react-icons/fi";
import { RiCake3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Login.css";

const balloons = [
  {
    left: "8%",
    top: "16%",
    color: "linear-gradient(135deg, #f472b6, #8b5cf6)",
  },
  {
    left: "72%",
    top: "24%",
    color: "linear-gradient(135deg, #38bdf8, #6366f1)",
  },
  {
    left: "18%",
    top: "72%",
    color: "linear-gradient(135deg, #fb923c, #ef4444)",
  },
  {
    left: "80%",
    top: "70%",
    color: "linear-gradient(135deg, #a78bfa, #ec4899)",
  },
];

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] =
    useState(false);

  useEffect(() => {
    const user =
      localStorage.getItem("user");

    if (user) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (!email || !password) {
      alert(
        "Please enter your email and password"
      );
      return;
    }

    try {
      const response =
        await api.post("/auth/login", {
          email,
          password,
        });

      if (rememberMe) {
        localStorage.setItem(
          "user",
          JSON.stringify(
            response.data.user
          )
        );
      }

      alert(
        "Signed in successfully"
      );

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.detail ||
          "Invalid credentials"
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
            x: -30,
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
            Celebrate every team member
            with reminders, dashboards,
            calendars and banners.
          </p>

          <div className="brand-pill">
            <FiStar />
            Team Birthday Management
          </div>
        </motion.div>

        {balloons.map(
          (balloon, index) => (
            <motion.div
              key={index}
              className="floating-balloon"
              style={{
                left: balloon.left,
                top: balloon.top,
                background:
                  balloon.color,
              }}
              animate={{
                y: [
                  0,
                  -20,
                  0,
                ],
              }}
              transition={{
                duration:
                  4 + index,
                repeat:
                  Infinity,
              }}
            />
          )
        )}
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
              Secure Sign In
            </div>

            <h2 className="card-title">
              Welcome Back
            </h2>

            <p className="card-copy">
              Sign in to manage birthdays
              and celebrations.
            </p>
          </div>

          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <label className="input-group">
              <span>Email</span>

              <div className="input-with-icon">
                <FiMail />

                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                />
              </div>
            </label>

            <label className="input-group">
              <span>Password</span>

              <div className="input-with-icon">
                <FiLock />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                />
              </div>
            </label>

            <div className="form-options">
              <label className="remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() =>
                    setRememberMe(
                      !rememberMe
                    )
                  }
                />
                Remember Me
              </label>
            </div>

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="submit-btn"
              type="submit"
            >
              Sign In
            </motion.button>

            <button
              type="button"
              className="submit-btn"
              style={{
                marginTop: "10px",
              }}
              onClick={() =>
                navigate("/signup")
              }
            >
              Create Account
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}

export default Login;