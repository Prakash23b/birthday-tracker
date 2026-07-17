import { motion } from "framer-motion";
import { FiLock, FiMail, FiStar } from "react-icons/fi";
import { RiCake3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
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

const confetti = [
  { left: "15%", top: "24%", background: "#f472b6" },
  { left: "25%", top: "38%", background: "#38bdf8" },
  { left: "70%", top: "18%", background: "#facc15" },
  { left: "82%", top: "48%", background: "#818cf8" },
  { left: "58%", top: "78%", background: "#34d399" },
];

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="login-shell">
        <section
          className="login-visual"
          aria-label="Promotional background"
        >
          <motion.div
            className="visual-glow"
            animate={{
              rotate: [0, 8, -6, 0],
              scale: [1, 1.04, 1.02, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {balloons.map((balloon, index) => (
            <motion.div
              key={index}
              className="floating-balloon"
              initial={{
                y: 40,
                opacity: 0.2,
                rotate: -8,
              }}
              animate={{
                y: [40, -18, 40],
                opacity: [0.2, 0.95, 0.2],
                rotate: [-8, 6, -8],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: balloon.left,
                top: balloon.top,
                background: balloon.color,
              }}
            />
          ))}

          {confetti.map((piece, index) => (
            <motion.span
              key={index}
              className="confetti-piece"
              initial={{
                y: -8,
                x: 0,
                opacity: 0,
              }}
              animate={{
                y: [0, 24, 0],
                x: [0, 10, -8, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: piece.left,
                top: piece.top,
                background: piece.background,
              }}
            />
          ))}

          <motion.div
            className="brand-block"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="brand-badge">
              <RiCake3Line />
            </div>

            <h1 className="brand-title">
              Birthday Tracker
            </h1>

            <p className="brand-tagline">
              Celebrate every team member with elegant
              planning, thoughtful reminders, and unforgettable
              moments.
            </p>

            <div className="brand-pill">
              <FiStar />
              Enterprise-ready experience for modern teams
            </div>
          </motion.div>
        </section>

        <section
          className="login-card-wrap"
          aria-label="Login form"
        >
          <motion.div
            className="login-card"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <div className="card-header">
              <div className="card-chip">
                <FiStar />
                Secure sign in
              </div>

              <h2 className="card-title">
                Welcome back
              </h2>

              <p className="card-copy">
                Sign in to manage birthdays,
                celebrations, and team milestones.
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
                  />
                </div>
              </label>

              <div className="form-options">
                <label className="remember">
                  <input type="checkbox" />
                  Remember me
                </label>

                
              </div>

              <motion.button
                whileHover={{
                  scale: 1.01,
                  y: -1,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="submit-btn"
                type="submit"
              >
                Sign In
              </motion.button>
            </form>
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default Login;