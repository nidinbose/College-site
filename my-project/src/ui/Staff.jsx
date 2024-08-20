import React, { useState, useEffect } from "react";
import { useNavigate ,Link} from "react-router-dom";
import Navbar from "../additionals/Navbar";
import Start from "../Components/Start";
import Asb from "../additionals/Staff/Asb";
import StaffSA from "../Components/Staff/StaffSA";

const Staff = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
  };

  return (
    <div>
          {/* Custom Navbar Code */}
      <nav className="bg-white p-4 text-black flex justify-between items-center w-[60vw] ">
        {/* Logo or Brand Name */}
        <div className="text-xl font-bold">MyApp</div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/staff" className="hover:text-gray-400 transition-colors duration-200">
            Home
          </Link>
          <a href="#" className="hover:text-gray-400 transition-colors duration-200">
            About
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-200">
            Services
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors duration-200">
            Contact
          </a>
        </div>

        {/* Login/Logout Button */}
        <div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 transition-colors duration-200 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-white"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-gray-800 text-white p-4 space-y-2"
        >
          <a href="#" className="block py-2 hover:text-gray-400 transition-colors duration-200">
            Home
          </a>
          <a href="#" className="block py-2 hover:text-gray-400 transition-colors duration-200">
            About
          </a>
          <a href="#" className="block py-2 hover:text-gray-400 transition-colors duration-200">
            Services
          </a>
          <a href="#" className="block py-2 hover:text-gray-400 transition-colors duration-200">
            Contact
          </a>
        </div>
      )}

      {/* Other Components */}
      <StaffSA />
      <Asb />
      <Start />
    </div>
  );
};

export default Staff;

