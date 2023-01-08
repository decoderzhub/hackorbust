import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";

function NotFoundPage() {
  return (
    <div>
      <img src={Logo} alt="404 Page Not Found" />
      <p style={{ textAlign: "center" }}>
        <Link style={{color:"red", fontSize: 24}} to="/home">Go to Home </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
