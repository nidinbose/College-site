import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Start from "../Components/Start";
import Categories from "../Components/Category";
import Addss from "../Components/Admin/AddSection";
import StudentView from "../Components/StudentView";
import StaffView from "../Components/StaffView";
// import BarChart from "../Components/BarChart";
// import LineChart from "../Components/LineChart";

const Admin = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Check for authentication token
        const isAuthenticated = localStorage.getItem('token');

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
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar for larger screens */}
            <aside className="hidden md:flex md:w-64 bg-white shadow-md">
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                    <ul>
                        <li>
                            <Link to="/admin" className="block py-2 px-4 hover:bg-gray-200 rounded">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/students" className="block py-2 px-4 hover:bg-gray-200 rounded">
                                Students
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/staff" className="block py-2 px-4 hover:bg-gray-200 rounded">
                                Staff
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/courses" className="block py-2 px-4 hover:bg-gray-200 rounded">
                                Courses
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="w-full py-2 px-4 bg-red-500 text-white hover:bg-red-700 rounded mt-4"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
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
                        className="md:hidden bg-gray-800 text-white p-4 space-y-2 absolute top-16 left-0 w-full"
                    >
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
                        <button onClick={handleLogout} className='w-full py-2 bg-red-600 text-white rounded'>
                            Logout
                        </button>
                    </div>
                )}

                {/* Main Components */}
                <div className="flex-1 p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
                            {/* <BarChart /> */}
                        </div>
                        <div className="bg-white p-4 rounded shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Revenue Trends</h2>
                            {/* <LineChart /> */}
                        </div>
                    </div>
                    <Addss />
                    <Start />
                    <Categories />
                    {/* Uncomment these if needed */}
                    <StudentView />
                    <StaffView />
                </div>
            </div>
        </div>
    );
};

export default Admin;
