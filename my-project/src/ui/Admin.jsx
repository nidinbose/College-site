import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Start from "../Components/Start";
import Categories from "../Components/Category";
import Addss from "../Components/Admin/AddSection";
import StudentView from "../Components/StudentView";
import StaffView from "../Components/StaffView";
import Corses from "../Components/Courses";
import Footer from "../Components/Footer";

const Admin = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
      
        const isAuthenticated = localStorage.getItem('token'); 
        if (!isAuthenticated) {
            alert("Please log in to continue.");
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        
        localStorage.removeItem('token');
        navigate('/');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            {/* Full-Width Navbar */}
            <nav
                className=" top-0 left-0 w-full bg-[#1B2C39] shadow-md flex justify-between items-center px-6 py-3 z-50"
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Logo or Brand Name */}
                <Link to="/admin" className="flex items-center">
                    <img src="/images/pl.png" alt="Logo" className='h-[60px] cursor-pointer' />
                </Link>

                {/* Navbar Links */}
                <div className="hidden md:flex space-x-8 text-[#A0CE4E]">
                    <Link to="/admin" className="hover:text-gray-500 text-[] transition-colors duration-200">
                        Home
                    </Link>
                    <a href="#" className="hover:text-gray-500 transition-colors duration-200">
                        About
                    </a>
                    <a href="#" className="hover:text-gray-500 transition-colors duration-200">
                        Services
                    </a>
                    <a href="#" className="hover:text-gray-500 transition-colors duration-200">
                        Contact
                    </a>
                </div>

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
                    className="md:hidden text-black"
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
                    className="fixed top-0 left-0 w-full h-full bg-gray-800 text-white flex flex-col items-center justify-center space-y-4 z-40"
                >
                    <Link to="/admin" className="text-xl hover:text-gray-400 transition-colors duration-200" onClick={toggleMobileMenu}>
                        Home
                    </Link>
                    <a href="#" className="text-xl hover:text-gray-400 transition-colors duration-200" onClick={toggleMobileMenu}>
                        About
                    </a>
                    <a href="#" className="text-xl hover:text-gray-400 transition-colors duration-200" onClick={toggleMobileMenu}>
                        Services
                    </a>
                    <a href="#" className="text-xl hover:text-gray-400 transition-colors duration-200" onClick={toggleMobileMenu}>
                        Contact
                    </a>
                    <button onClick={handleLogout} className='px-4 py-2 bg-red-600 text-white rounded'>
                        Logout
                    </button>
                </div>
            )}

            <Addss />
            <Start />
            <Corses />
            <Categories />
            <StudentView />
            <StaffView />
            <Footer />
        </div>
    );
};

export default Admin;
