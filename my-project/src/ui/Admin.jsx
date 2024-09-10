import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Start from "../Components/Start";
import Categories from "../Components/Category";
import Addss from "../Components/Admin/AddSection";
import StudentView from "../Components/StudentView";
import StaffView from "../Components/StaffView";

const Admin = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState({ email: "", image: "" }); // Updated fields for email and image
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please log in to continue.");
      navigate("/login");
    } else {
      // Fetch user data from backend
      axios
        .get("http://localhost:3003/api/home", {
          headers: {
            Authorization: `Bearer ${token}` // Pass the token in Authorization header
          }
        })
        .then((response) => {
          setUser({
            email: response.data.email, // Assuming backend returns 'email' and 'photo'
            image: response.data.photo
          });
          setLoading(false);
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
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex md:w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
          <ul className="space-y-4">
            <li>
              <Link
                to="/admin"
                className="block py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/admin/students"
                className="block py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded transition"
              >
                Students
              </Link>
            </li>
            <li>
              <Link
                to="/admin/staff"
                className="block py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded transition"
              >
                Staff
              </Link>
            </li>
            <li>
              <Link
                to="/admin/courses"
                className="block py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded transition"
              >
                Courses
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full py-2 px-4 bg-red-500 text-white hover:bg-red-700 rounded mt-6 transition"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="text-xl font-bold">Admin Dashboard</div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            <img
              src={user.image} // Correct field name for user image
              alt="User profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">{user.email}</span> {/* Display user email */}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <nav className="md:hidden bg-white p-4 flex justify-between items-center shadow-md">
          <div className="text-xl font-bold">Admin Dashboard</div>
          <button
            id="mobile-menu-button"
            className="text-black"
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
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-gray-800 text-white p-6 space-y-4 absolute top-16 left-0 w-full z-10"
          >
            <Link
              to="/admin"
              className="block py-2 hover:text-gray-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/admin/students"
              className="block py-2 hover:text-gray-400 transition-colors duration-200"
            >
              Students
            </Link>
            <Link
              to="/admin/staff"
              className="block py-2 hover:text-gray-400 transition-colors duration-200"
            >
              Staff
            </Link>
            <Link
              to="/admin/courses"
              className="block py-2 hover:text-gray-400 transition-colors duration-200"
            >
              Courses
            </Link>
            <button
              onClick={handleLogout}
              className="w-full py-2 bg-red-600 text-white rounded"
            >
              Logout
            </button>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 p-6 space-y-8 overflow-y-auto">
          {/* Dashboard Components */}
          <Addss />
          <Start />
          <Categories />
          <StudentView />
          <StaffView />
        </div>
      </div>
    </div>
  );
};

export default Admin;
