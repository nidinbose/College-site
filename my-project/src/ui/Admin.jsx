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
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          const { username, photo, role, token } = response.data.user;

                localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify({ username, photo, role }));

          // Check if the user is an admin
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
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-white">
      <aside className="hidden md:flex md:w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6 text-[#1B2C39]">Admin Dashboard</h1>
          <ul className="space-y-4">
          <div className=" items-center space-y-4 text-center">
            <img src={user.image} alt="User profile" className="w-12 h-12 rounded-full ml-12" />
            <span className="text-md font-bold mr-9 text-[#1B2C39] mr-12">{user.username}</span>

           
          </div>
            <li>
              <Link to="/" className="block py-3 px-4 bg-gray-100 hover:bg-[#A0CE4E] rounded transition w-[90%]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/vstudent" className="block py-3 px-4 bg-gray-100 hover:bg-[#A0CE4E] rounded transition w-[90%]">
                Students
              </Link>
            </li>
            <li>
              <Link to="/vstaff" className="block py-3 px-4 bg-gray-100 hover:bg-[#A0CE4E] rounded transition w-[90%]">
                Staff
              </Link>
            </li>
            <li>
              <Link to="/courses" className="block py-3 px-4 bg-gray-100 hover:bg-[#A0CE4E] rounded transition w-[90%]">
                Courses
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="w-[90%] py-3 px-4 bg-[#1B2C39] text-white hover:bg-red-500 rounded mt-6 transition items-end ">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <nav className="bg-[#1B2C39] shadow-md p-4 flex justify-between items-center">
         <Link to={`/`}> <div className="text-xl font-bold text-[#A0CE4E]">Admin Dashboard</div></Link>
          

          <div className=" items-center space-x-4 text-center">
            <img src={user.image} alt="User profile" className="w-12 h-12 rounded-full ml-[1vw]" />
            <span className="text-sm font-bold text-[#A0CE4E] hover:text-white">{user.username}</span>

            <button onClick={handleLogout} className="py-2 px-4 bg-[#A0CE4E] text-white rounded hover:bg-red-500">
              Logout
            </button>
          </div>
          
        </nav>

        <nav className="md:hidden bg-white p-4 flex justify-between items-center shadow-md">
          <div className="text-xl font-bold">Admin Dashboard</div>
          <button id="mobile-menu-button" className="text-black" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-gray-800 text-white p-6 space-y-4 absolute top-16 left-0 w-full z-10">
            <Link to="/admin" className="block py-2 hover:text-gray-400 transition-colors duration-200">
              Home
            </Link>
            <Link to="/admin/students" className="block py-2 hover:text-gray-400 transition-colors duration-200">
              Students
            </Link>
            <Link to="/admin/staff" className="block py-2 hover:text-gray-400 transition-colors duration-200">
              Staff
            </Link>
            <Link to="/admin/courses" className="block py-2 hover:text-gray-400 transition-colors duration-200">
              Courses
            </Link>
            <button onClick={handleLogout} className="w-full py-2 bg-red-600 text-white rounded">
              Logout
            </button>
          </div>
        )}

        <div className="flex-1 p-6 space-y-8 overflow-y-auto">
          <Addss />
          <Start />
         
        </div>
      </div>
    </div>
  );
};

export default Admin;
