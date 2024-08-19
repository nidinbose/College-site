import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewStaff = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook for programmatic navigation

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3003/api/getstaffedit/${id}`);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching staff data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3003/api/deletestaff/${id}`);
      navigate('/vstaff'); // Navigate to the staff list page
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  const handleEdit = () => {
    navigate(`/editstaff/${id}`); // Navigate to the edit page
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center p-1 bg-gray-50">Loading...</div>;
  }

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">No staff data found.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <motion.div
        className="bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl w-[60vh]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.img
          src={data.photo}
          alt="Staff Photo"
          className="w-full h-[70vh] object-cover w-[60vh]"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="p-6">
          <motion.h1
            className="text-3xl font-bold text-gray-800 w-[60vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {data.name}
          </motion.h1>
          <p className="text-gray-600 mt-2"><strong>Staff ID:</strong> {data.staffid}</p>
          <p className="text-gray-600 mt-2"><strong>Class:</strong> {data.class}</p>
          <p className="text-gray-600 mt-2"><strong>Department:</strong> {data.department}</p>
          <p className="text-gray-600 mt-2"><strong>Semester:</strong> {data.semester}</p>
          <p className="text-gray-600 mt-2"><strong>Blood Type:</strong> {data.bloodType}</p>
          <p className="text-gray-600 mt-2"><strong>Date of Birth:</strong> {data.dateOfBirth}</p>
        </div>
        <div className="p-6 flex gap-4 justify-end">
          <button 
            onClick={handleDelete} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete Staff
          </button>
          <button 
            onClick={handleEdit} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit Staff
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewStaff;
