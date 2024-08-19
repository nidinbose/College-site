import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../additionals/Navbar";
import Start from "../Components/Start";
import Asb from "../additionals/Staff/Asb";
import StaffSA from "../Components/Staff/StaffSA";

const Staff = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for authentication token
    const isAuthenticated = localStorage.getItem("token");

    if (!isAuthenticated) {
      alert("Please log in to continue.");
      navigate("/login"); // Redirect to the login page
    }
  }, [navigate]);

  const handleLogout = () => {
    // Remove token and redirect to login page
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <button onClick={handleLogout} className='px-4 py-2 bg-red-600 text-white rounded'>
        Logout
      </button>
      <StaffSA />
      <Asb />
      <Start />
    </div>
  );
};

export default Staff;
