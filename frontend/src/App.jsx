import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import AppRoutes from "./routes/AppRoutes";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 1000,
          border: "0",
          borderRadius: "999px",
          padding: "0.7rem",
          background: "var(--surface)",
          color: "var(--text)",
          boxShadow: "var(--shadow)",
          cursor: "pointer",
          backdropFilter: "blur(14px)",
        }}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </button>
      <AppRoutes />
    </>
  );
}

export default App;