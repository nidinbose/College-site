import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const nav = [
    { name: "Home", path: '/' },
    { name: "About", path: '/feedback' },
    { name: "Our Campus", path: '/gallary' },
    { name: "Corses", path: '/courses' },
    { name: "Admissions", path: '/pricing' },
    { name: "Login", path: '/login' },
];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await axios.get('');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }
        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.get('/api/logout');
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
        <div className='w-full h-[96px] bg-[#1B2C39] shadow-sm '>
            <div className='p-4 md:max-w-[1080px] max-w-full mx-auto w-full h-full flex justify-between items-center'>
                <Link to="/">
                    <img src="/images/pl.png" alt="Logo" className='h-[100px] cursor-pointer' />
                </Link>
                <div className="flex items-center">
                    <ul className='hidden md:flex gap-12 text-md font-semibold hover:text-[#A0CE4E] '>
                        {nav.map((item, index) => (
                            <li key={index} className="font-semibold text-white hover:text-[#A0CE4E] hover:border-b-2 hover:border-[#A0CE4E]">
                                <Link to={item.path}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='md:flex hidden'>
                    {user ? (
                        <div className='flex items-center gap-4'>
                            <h1 className="font-bold">{user.username}</h1>
                            <img src={user.photo || "/path/to/default-avatar.png"} alt="User Avatar" className="w-10 h-10 rounded-full" />
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className='flex justify-center items-center bg-transparent px-6 gap-2'>
                                <img src="/path/to/lock-icon.png" alt='Lock Icon' />
                                Login
                            </button>
                        </Link>
                    )}
                </div>
                <motion.div
                    whileTap={{ scale: 0.6 }}
                    className="md:hidden cursor-pointer"
                    onClick={handleToggle}
                >
                    <img src="/path/to/hamburger-icon.png" alt="Menu" />
                </motion.div>
            </div>
            <div>
                <motion.ul
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    className={toggle ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden' : 'hidden'}
                >
                    {nav.map((item, index) => (
                        <li key={index} className='p-4' onClick={closeMenu}>
                            <Link to={item.path} className="hover:bg-gray-500">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <div className='flex flex-col my-4 gap-4'>
                        <button className='px-8 py-5 bg-[#208446] text-white rounded'>
                            Sign up for free
                        </button>
                    </div>
                </motion.ul>
            </div>
        </div>
    );
}

export default Navbar;


