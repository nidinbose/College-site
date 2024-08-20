import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Start from "../Components/Start";
import Categories from "../Components/Category";
import Addss from "../Components/Admin/AddSection";
import Navbar from "../additionals/Navbar";
import StudentView from "../Components/StudentView";
import StaffView from "../Components/StaffView";

const Admin = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Check for authentication token
        const isAuthenticated = localStorage.getItem('token'); // Example check for a token

        if (!isAuthenticated) {
            alert("Please log in to continue.");
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        // Remove token and redirect to login page
        localStorage.removeItem('token');
        navigate('/');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            
            {/* Custom Navbar Code */}
            <nav className="bg-white p-4 text-black flex justify-between items-center w-[50vw] transform translate-x-1/2 -translate-x-1/2 gap-x-10" >
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
                    <button onClick={handleLogout} className='px-4 py-2 bg-red-600 text-white rounded'>
                        Logout
                    </button>
                </div>
            )}

            <Addss />
            <Start />
            <Categories />
            <StudentView />
            <StaffView />
        </div>
    );
};

export default Admin;

