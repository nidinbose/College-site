import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import Login from "../Login.Signup/Login";

const nav = [
    { name: "Home", path: '/' },
    { name: "About", path: '/about' },
    { name: "Support", path: '/support' },
    { name: "Platform", path: '/platform' },
    { name: "Pricing", path: '/pricing' },
    { name: "Login", path: '/login' },
];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='w-full h-[96px] bg-white shadow-sm'>
            <div className='p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center'>
                <img src="" alt="logo" className='h-[25px] cursor-pointer' />
                <div className="flex items-center">
                    <ul className='hidden md:flex gap-4'>
                        {nav.map((item, index) => (
                            <li key={index} className="hover:text-emerald-300">
                                <Link to={item.path}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='md:flex hidden'>
                    <button className='flex justify-center items-center bg-transparent px-6 gap-2'>
                        <img src="" alt='lock' />
                        Login
                    </button>
                    {/* <button className='px-8 py-3 bg-[#208446] text-white rounded'>Sign up for free</button> */}
                    <h1 className="mt-8 font-bold">nidin</h1>
                    <img src="images/a.avif" alt=""  className="w-32 rounded-xl"/>
                </div>
                <motion.div 
                    whileTap={{ scale: 0.6 }} 
                    className="md:hidden cursor-pointer" 
                    onClick={() => setToggle(!toggle)}
                >
                    <img src="" alt="hamburger" />
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
                        <li key={index} className='p-4 '>
                            <Link to={item.path} className="hover:bg-gray-500">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <div className='flex flex-col my-4 gap-4'>
                        <Link to={Login}>
                        <button className='flex border border-[#240136] justify-center items-center bg-transparent px-6 gap-2 py-4'>
                            <img src="" alt='lock' />
                            Login
                        </button>
                        </Link>
                        <button className='px-8 py-5 bg-[#208446] text-white rounded'>Sign up for free</button>
                    </div>
                </motion.ul>
            </div>
        </div>
    );
}

export default Navbar;

