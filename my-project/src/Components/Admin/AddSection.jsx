import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Addss = () => {
  const navigate = useNavigate();

    const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-[60vh] w-full bg-white p-6 ">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        className="bg-[#1B2C39] text-[#A0CE4E] font-bold py-4 rounded-lg shadow-lg hover:bg-[#A0CE4E] hover:text-white transition duration-300 p-5 h-56"
          onClick={() => handleNavigate("/addstudents")}
        >
          <h2 className="text-xl">Add Student</h2>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#1B2C39] text-[#A0CE4E] font-bold py-4 rounded-lg shadow-lg hover:bg-[#A0CE4E] hover:text-white transition duration-300 p-5 h-56"
          onClick={() => handleNavigate("/addstaff")}
        >
          <h2 className="text-xl">Add Staff</h2>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#1B2C39] text-[#A0CE4E] font-bold py-4 rounded-lg shadow-lg hover:bg-[#A0CE4E] hover:text-white transition duration-300 p-5 h-56"
          onClick={() => handleNavigate("/signup")}
        >
          <h2 className="text-xl">Create Account</h2>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#1B2C39] text-[#A0CE4E] font-bold py-4 rounded-lg shadow-lg hover:bg-[#A0CE4E] hover:text-white transition duration-300 p-5 h-56"
          onClick={() => handleNavigate("/vstaff")}
        >
          <h2 className="text-xl">Staff List</h2>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#1B2C39] text-[#A0CE4E] font-bold py-4 rounded-lg shadow-lg hover:bg-[#A0CE4E] hover:text-white transition duration-300 p-5 h-56"
          onClick={() => handleNavigate("/vstudent")}
        >
          <h2 className="text-xl">Students List</h2>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#1B2C39] text-[#A0CE4E] font-bold py-4 rounded-lg shadow-lg hover:bg-[#A0CE4E] hover:text-white transition duration-300 p-5 h-56"
          onClick={() => handleNavigate("/vstudent")}
        >
          <h2 className="text-xl">Students List</h2>
        </motion.button>
      </div>
    </div>
  );
};

export default Addss;
