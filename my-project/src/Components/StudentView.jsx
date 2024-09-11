import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentView = () => {
  const [students, setStudents] = useState([]);
  const [department, setDepartment] = useState("All");

  const getStudents = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/getstudent");
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const filteredStudents = department === "All"
    ? students
    : students.filter(student => student.department === department);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-6">
        <select
          className="border p-2 rounded-lg"
          value={department}
          onChange={handleDepartmentChange}
        >
          <option value="All">All Departments</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          {/* Add more departments as needed */}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredStudents.map((student) => (
          <Link to={`/view/${student._id}`} key={student._id}>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-4 transform hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={student.photo}
                alt={student.name}
                className="w-full h-[50vh] object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{student.name}</h2>
                <p className="text-gray-600">ID: {student.studentid}</p>
                <p className="text-gray-600">Dept: {student.department}</p>
                <p className="text-gray-600">Section: {student.class}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentView;