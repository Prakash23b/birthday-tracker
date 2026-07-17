import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background:
          "linear-gradient(135deg, #0f172a, #312e81, #1e3a8a)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "120px",
          margin: 0,
        }}
      >
        404
      </h1>

      <h2>Page Not Found</h2>

      <p>
        Oops! The page you're looking for doesn't
        exist.
      </p>

      <Link
        to="/dashboard"
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          borderRadius: "12px",
          background:
            "linear-gradient(135deg,#7c3aed,#4f46e5)",
          color: "white",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Go To Dashboard
      </Link>
    </div>
  );
}

export default NotFound;