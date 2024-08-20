import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Start from "../Components/Start";

const Students = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Replace this with your actual authentication logic
        const isAuthenticated = localStorage.getItem('token');

        if (!isAuthenticated) {
            alert("Please log in to continue.");
            navigate('/');
        }
    }, [navigate]);

    const handleLogout = () => {
        // Remove token and redirect to login page
        localStorage.removeItem('token');
        navigate('/login');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            {/* Custom Navbar Code */}
            <nav className="bg-white p-4 text-black flex justify-between items-center w-[60vw]">
                {/* Logo or Brand Name */}
                <div className="text-xl font-bold">MyApp</div>

                {/* Navbar Links */}
                <div className="hidden md:flex space-x-4 items-center">
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
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-700 transition-colors duration-200 text-white font-bold py-2 px-4 rounded w-full"
                    >
                        Logout
                    </button>
                </div>
            )}

           

            <Start />
        </div>
    );
};

export default Students;
