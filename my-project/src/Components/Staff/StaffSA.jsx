import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const StaffSA = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-[4vw] w-[95vw] bg-white flex items-center justify-end p-6  right-0 top-0">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 w-full max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full md:w-64 text-center bg-white text-gray-800 font-bold py-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          onClick={() => handleNavigate("/addstudents")}
        >
          Add Student
        </motion.button>
     
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full md:w-64 text-center bg-white text-gray-800 font-bold py-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          onClick={() => handleNavigate("/ssignup")}
        >
       Create account
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full md:w-64 text-center bg-white text-gray-800 font-bold py-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          onClick={() => handleNavigate("/vstaff")}
        >
       Staff list
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full md:w-64 text-center bg-white text-gray-800 font-bold py-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          onClick={() => handleNavigate("/vstudent")}
        >
       Students list
        </motion.button>


      </motion.div>
    </div>
  );
};

export default StaffSA;

