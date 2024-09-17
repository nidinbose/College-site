import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import Start from "../Components/Start";
import Asb from "../additionals/Staff/Asb";
import StaffSA from "../Components/Staff/StaffSA";
import Categories from "../Components/Category";
import Footer from "../Components/Footer";
import Corses from "../Components/Courses";

const Staff = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState({ username: "", image: "", role: "" });
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
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const { username, photo, role } = response.data.user;
          localStorage.setItem("user", JSON.stringify({ username, photo, role }));

          if (role !== "staff") {
            alert("Unauthorized access. Staff only.");
            navigate("/login");
          } else {
            setUser({ username, image: photo, role });
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
    <div className="flex min-h-screen">
      {/* Sidebar for desktop */}
      <motion.nav
        className="bg-[#2D3A4B] w-[250px] p-6 space-y-6 fixed h-full hidden md:block"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        style={{ zIndex: 30 }}
      >
        {/* Logo */}
        <Link to="/staff" className="flex items-center mb-6">
          <img src="/images/new-logo.png" alt="Logo" className="h-[60px]" />
        </Link>

        {/* Nav Links */}
        <ul className="text-[#E0F2F1] space-y-4">
          <li>
            <Link to="/staff" className="block py-2 hover:bg-[#1B2C39] rounded">
              Home
            </Link>
          </li>
          <li>
            <a href="/about" className="block py-2 hover:bg-[#1B2C39] rounded">
              About
            </a>
          </li>
          <li>
            <a href="/courses" className="block py-2 hover:bg-[#1B2C39] rounded">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:bg-[#1B2C39] rounded">
              Contact
            </a>
          </li>
        </ul>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-[#A0CE4E] hover:bg-[#8BC34A] text-white py-2 px-4 w-full rounded"
        >
          Logout
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center space-y-4 z-40 ${isMobileMenuOpen ? "block" : "hidden"}`}
        initial={{ x: "-100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/staff" onClick={toggleMobileMenu} className="text-xl">
          Home
        </Link>
        <a href="/about" onClick={toggleMobileMenu} className="text-xl">
          About
        </a>
        <a href="/courses" onClick={toggleMobileMenu} className="text-xl">
          Courses
        </a>
        <a href="#" onClick={toggleMobileMenu} className="text-xl">
          Contact
        </a>
        <button
          onClick={handleLogout}
          className="bg-[#A0CE4E] hover:bg-[#8BC34A] py-2 px-4 rounded"
        >
          Logout
        </button>
      </motion.div>

      {/* Main Content */}
      <div className="ml-0 md:ml-[250px] w-full">
        <motion.header
          className="bg-[#2D3A4B] text-white p-6 flex justify-between items-center shadow-md fixed top-0 left-0 md:left-[250px] right-0 z-20"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="text-[#E0F2F1] space-x-6 flex items-center">
            <li>
              <Link to="/staff" className="block py-2 hover:bg-[#1B2C39] rounded">
                Home
              </Link>
            </li>
            <li>
              <a href="/about" className="block py-2 hover:bg-[#1B2C39] rounded">
                About
              </a>
            </li>
            <li>
              <a href="/courses" className="block py-2 hover:bg-[#1B2C39] rounded">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:bg-[#1B2C39] rounded">
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center">
            <img
              src={user.image || "/path/to/default-avatar.png"}
              alt="User Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <h1 className="font-bold text-lg">{user.username}</h1>
          </div>
          <button onClick={toggleMobileMenu} className="md:hidden text-white">
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
        </motion.header>

        {/* Page Content */}
        <div className="pt-24 px-6">
          <StaffSA />
          <Asb />
          {/* <Start /> */}
          {/* <Corses /> */}
          {/* <Categories /> */}
        </div>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Staff;
