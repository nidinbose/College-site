import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios"; 
import Start from "../Components/Start";
import Corses from "../Components/Courses";
import Categories from "../Components/Category";
import Gallery from "../Components/Gallary";
import Footer from "../Components/Footer";
import StudentView from "../Components/StudentView";

const Students = () => {
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

                    if (role !== "student") {
                        alert("Unauthorized access. Students only.");
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
        <div>
            {/* Navbar */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1B2C39] p-4 text-black flex justify-between items-center w-full fixed top-0 z-50 shadow-md h-[10vh] font-semibold"
            >
                {/* Logo */}
                <img src="/images/pl.png" alt="Logo" className="h-[50px] md:h-[70px] cursor-pointer" />

                {/* Navbar Links */}
                <div className="hidden md:flex space-x-14 items-center text-[#A0CE4E] ml-[12vw]">
                    <Link to="/students" className="hover:text-gray-400 transition-colors duration-200">
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
                <div className="flex items-center block space-x-4  bg-transparent rounded shadow-md">
                    <img
                        src={user.image || "/default-avatar.png"} // Use a default image if none is provided
                        alt="User Avatar"
                        className="w-16 h-16 rounded-full object-cover"
                    />
                   
                        <p className="text-lg font-semibold text-[#A0CE4E]">{user.username}</p>
                        <button
                        onClick={handleLogout}
                        className="bg-[#A0CE4E] hover:bg-red-700 transition-colors duration-200 text-white font-bold py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button id="mobile-menu-button" className="text-black" onClick={toggleMobileMenu}>
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
                </div>
            </motion.div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.3 }}
                    id="mobile-menu"
                    className="md:hidden bg-gray-800 text-white p-4 space-y-2"
                >
                    <Link to="/students" className="block py-2 hover:text-gray-400 transition-colors duration-200">
                        Home
                    </Link>
                    <a href="#" className="block py-2 hover:text-gray-400 transition-colors duration-200">
                        About
                    </a>
                    <a href="#" className="block py-2 hover:text-gray-400 transition-colors duration-200">
                        Services
                    </a>
                    <a href="#" className="block py-2 hover:text-gray-400 transition-colors duration-200">
                        Contact
                    </a>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-700 transition-colors duration-200 text-white font-bold py-2 px-4 rounded w-full"
                    >
                        Logout
                    </button>
                </motion.div>
            )}

           

            {/* Other Components */}
            <Start />
            <StudentView />
            <Corses />
            <Categories />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Students;
