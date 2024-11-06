import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Start from "../Components/Start";
import Categories from "../Components/Category";
import Addss from "../Components/Admin/AddSection";
import StudentView from "../Components/StudentView";
import StaffView from "../Components/StaffView";
import { FaHome } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GiBookmarklet } from "react-icons/gi";

const Admin = () => {
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
          const { username, photo, role, token } = response.data.user;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify({ username, photo, role }));

          if (role !== "admin") {
            alert("Unauthorized access. Admins only.");
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
    return <div className="flex justify-center items-center min-h-screen text-lg">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-64 bg-[#1B2C39] shadow-lg text-white">
        <div className="p-6 flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
          <img src={user.image} alt="User profile" className="w-20 h-20 rounded-full mb-4" />
          <span className="text-md font-bold mb-8">{user.username}</span>

          <ul className="w-full space-y-4">
            <li>
              <Link to="/" className="flex gap-4 items-center font-semibold py-3 px-4 hover:bg-[#A0CE4E] rounded transition">
                <FaHome className="w-6 h-6" /> Home
              </Link>
            </li>
            <li>
              <Link to="/vstudent" className="flex gap-4 items-center font-semibold py-3 px-4 hover:bg-[#A0CE4E] rounded transition">
                <PiStudentFill className="w-6 h-6" /> Students
              </Link>
            </li>
            <li>
              <Link to="/vstaff" className="flex gap-4 items-center font-semibold py-3 px-4 hover:bg-[#A0CE4E] rounded transition">
                <HiMiniUserGroup className="w-6 h-6" /> Staff
              </Link>
            </li>
            <li>
              <Link to="/courses" className="flex gap-4 items-center font-semibold py-3 px-4 hover:bg-[#A0CE4E] rounded transition">
                <GiBookmarklet className="w-6 h-6" /> Courses
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="w-full py-3 px-4 bg-red-500 rounded mt-6 font-semibold">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <nav className="bg-[#1B2C39] shadow-md p-4 flex justify-between items-center text-white">
          <Link to="/" className="text-xl font-bold text-[#A0CE4E]">Welcome: {user.username}</Link>

          <div className="flex items-center space-x-4">
            <img src={user.image} alt="User profile" className="w-10 h-10 rounded-full" />
            <span className="font-semibold text-[#A0CE4E]">{user.username}</span>
            <button onClick={handleLogout} className="py-2 px-4 bg-[#A0CE4E] text-white rounded hover:bg-red-500">
              Logout
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white p-6 space-y-4 absolute top-16 left-0 w-full z-10">
            <Link to="/" className="block py-2 hover:text-gray-400">Home</Link>
            <Link to="/vstudent" className="block py-2 hover:text-gray-400">Students</Link>
            <Link to="/vstaff" className="block py-2 hover:text-gray-400">Staff</Link>
            <Link to="/courses" className="block py-2 hover:text-gray-400">Courses</Link>
            <button onClick={handleLogout} className="w-full py-2 bg-red-600 text-white rounded">
              Logout
            </button>
          </div>
        )}

        {/* Main Page Content */}
        <div className="flex-1 p-6 space-y-8 overflow-y-auto">
          <Addss />
          <Start />
        </div>
      </div>
    </div>
  );
};

export default Admin;
