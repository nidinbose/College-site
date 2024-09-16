import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const nav = [
    { name: "Home", path: '/' },
    { name: "About", path: '/feedback' },
    { name: "Our Campus", path: '/gallery' },
    { name: "Courses", path: '/courses' },
    { name: "Admissions", path: '/pricing' },
    // { name: "Login", path: '/login' },
];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axios.get("http://localhost:3003/api/home", {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    const { email, photo, role } = response.data.user;
                    setUser({ email, photo, role });
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.get('/api/logout');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setUser(null);
            navigate('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const closeMenu = () => {
        setToggle(false);
    };

    return (
        <div className='w-full bg-[#1B2C39] shadow-md'>
            <div className='p-4 md:max-w-[1080px] mx-auto flex justify-between items-center'>
                <Link to="/">
                    <img src="/images/pl.png" alt="Logo" className='h-[100px] cursor-pointer' />
                </Link>
                <div className="hidden md:flex items-center space-x-12">
                    {nav.map((item, index) => (
                        <Link key={index} to={item.path} className='text-md font-semibold text-white hover:text-[#A0CE4E] hover:border-b-2 hover:border-[#A0CE4E] transition duration-300'>
                            {item.name}
                        </Link>
                    ))}
                </div>
              <div className='flex flex-col items-center space-y-4'>
    {user ? (
        <div className='flex flex-col items-center space-y-2'>
            <h1 className="text-white font-semibold">{user.email}</h1>
            <img src={user.photo || "/path/to/default-avatar.png"} alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
            <button onClick={handleLogout} className='px-4 py-2 bg-red-500 text-white rounded transition duration-300 hover:bg-red-600'>
                Logout
            </button>
        </div>
    ) : (
        <Link to="/login">
            <button className='flex items-center bg-transparent px-6 py-2 text-white border border-white rounded-md hover:bg-white hover:text-[#1B2C39] transition duration-300'>
                <img src="/path/to/lock-icon.png" alt='Lock Icon' className='w-6 h-6 mr-2' />
                Login
            </button>
        </Link>
    )}
</div>

                <motion.div
                    whileTap={{ scale: 0.8 }}
                    className="md:hidden cursor-pointer"
                    onClick={handleToggle}
                >
                    <img src="/path/to/hamburger-icon.png" alt="Menu" className='w-8 h-8' />
                </motion.div>
            </div>
            <motion.ul
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white shadow-lg transition-transform transform ${toggle ? 'translate-x-0' : '-translate-x-full'} z-50`}
            >
                <div className='flex justify-end p-4'>
                    <motion.div
                        whileTap={{ scale: 0.8 }}
                        className="cursor-pointer"
                        onClick={closeMenu}
                    >
                        <img src="/path/to/close-icon.png" alt="Close" className='w-8 h-8' />
                    </motion.div>
                </div>
                <div className='flex flex-col items-center mt-8 space-y-4'>
                    {nav.map((item, index) => (
                        <Link key={index} to={item.path} className='text-xl text-gray-800 hover:text-[#A0CE4E] transition duration-300' onClick={closeMenu}>
                            {item.name}
                        </Link>
                    ))}
                    <div className='mt-8'>
                        <button className='px-8 py-5 bg-[#208446] text-white rounded-lg shadow-md hover:bg-[#1c6c34] transition duration-300'>
                            Sign up for free
                        </button>
                    </div>
                </div>
            </motion.ul>
        </div>
    );
}

export default Navbar;
