import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Students = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Replace this with your actual authentication logic
        const isAuthenticated = localStorage.getItem('token'); // Example check for a token

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

    return (
        <div>
            <h1>Students Page</h1>
            <button onClick={handleLogout} className='px-4 py-2 bg-red-600 text-white rounded'>
                Logout
            </button>
        </div>
    );
};

export default Students;
