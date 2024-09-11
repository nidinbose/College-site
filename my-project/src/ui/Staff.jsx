import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import Start from "../Components/Start";
import Asb from "../additionals/Staff/Asb";
import StaffSA from "../Components/Staff/StaffSA";
import Categories from "../Components/Category";
// import Gallery from "../Components/Gallery";
import Footer from "../Components/Footer";
import Corses from "../Components/Courses";

const Staff = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState({ email: "", image: "", role: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please log in to continue.");
      navigate("/login");
    } else {
      axios
        .get("http://localhost:3003/api/home", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        })
        .then((response) => {
          const { email, photo, role } = response.data.user;
          // Store user data in localStorage
          localStorage.setItem("user", JSON.stringify({ email, photo, role }));

          // Check if the user is a staff member
          if (role !== "staff") {
            alert("Unauthorized access. Staff only.");
            navigate("/login");
          } else {
            setUser({ email, image: photo, role });
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          alert("Failed to fetch user data. Please log in again.");
          localStorage.removeItem("token");
          navigate("/login");
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Traditional Navbar */}
      <motion.nav
        className="top-0 left-0 w-full bg-[#1B2C39] shadow-md flex items-center justify-between px-6 py-3 z-50"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo or Brand Name */}
        <Link to="/staff" className="flex items-center">
          <img src="/images/pl.png" alt="Logo" className="h-[60px] cursor-pointer" />
        </Link>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-8 text-[#A0CE4E]">
          <Link to="/staff" className="text-lg hover:text-gray-500 transition-colors duration-200">
            Home
          </Link>
          <a href="/about" className="text-lg hover:text-gray-500 transition-colors duration-200">
            About
          </a>
          <a href="/courses" className="text-lg hover:text-gray-500 transition-colors duration-200">
            Courses
          </a>
          <a href="#" className="text-lg hover:text-gray-500 transition-colors duration-200">
            Contact
          </a>
        </div>

        {/* User Information */}
        {loading ? (
          <div className="text-white">Loading...</div>
        ) : user ? (
          <div className="flex items-center gap-4">
            <h1 className="font-bold text-white">{user.email}</h1>
            <img
              src={user.image || "/path/to/default-avatar.png"} // Use user's photo or a default one
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        ) : (
          <div className="text-white">User data not found</div>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-[#A0CE4E] hover:bg-red-700 transition-colors duration-200 text-white font-bold py-2 px-4 rounded hidden md:block"
        >
          Logout
        </button>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-button"
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed top-0 left-0 w-full h-full bg-gray-800 text-white flex flex-col items-center justify-center space-y-4 z-40 md:hidden"
        >
          <Link
            to="/staff"
            className="text-xl hover:text-gray-400 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <a
            href="#"
            className="text-xl hover:text-gray-400 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a
            href="#"
            className="text-xl hover:text-gray-400 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Courses
          </a>
          <a
            href="#"
            className="text-xl hover:text-gray-400 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
          <button
            onClick={handleLogout}
            className="bg-[#A0CE4E] hover:bg-red-700 transition-colors duration-200 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      )}

      {/* Other Components */}
      <StaffSA />
      <Asb />
      <Start />
      <Corses />
      <Categories />
      <Footer />
    </div>
  );
};

export default Staff;
