import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Start from "../Components/Start";
import Categories from "../Components/Category";
import Addss from "../Components/Admin/AddSection";
import Navbar from "../additionals/Navbar";
import StudentView from "../Components/StudentView";
import StaffView from "../Components/StaffView";

const Admin = () => {
    const navigate = useNavigate();

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

    return (
        <div>
            <Navbar />
            <button onClick={handleLogout} className='px-4 py-2 bg-red-600 text-white rounded'>
                Logout
            </button>
            <Addss />
            <Start />
            <Categories />
            <StudentView />
            <StaffView />
        </div>
    );
};

export default Admin;
