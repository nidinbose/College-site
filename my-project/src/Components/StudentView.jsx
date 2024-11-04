import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaUserGraduate, FaIdBadge, FaBuilding, FaChalkboardTeacher } from "react-icons/fa";

const StudentView = () => {
  const [students, setStudents] = useState([]);
  const [department, setDepartment] = useState("All");
  const [name, setName] = useState("");

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

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const filteredStudents = students.filter((student) => {
    const matchesDepartment = department === "All" || student.department === department;
    const matchesName = student.name.toLowerCase().includes(name.toLowerCase());
    return matchesDepartment && matchesName;
  });

  return (
    <div className="container mx-auto p-6 ">
      <div className="flex justify-center space-x-4 mb-8">
        <input
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={handleNameChange}
          className="border p-2 rounded-lg shadow-md text-gray-700"
        />
        <select
          className="border p-2 rounded-lg shadow-md text-gray-700"
          value={department}
          onChange={handleDepartmentChange}
        >
          <option value="All">All Departments</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredStudents.map((student) => (
          <Link to={`/view/${student._id}`} key={student._id}>
            <motion.div
              className="bg-white/10 border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <img
                src={student.photo}
                alt={student.name}
                className="w-full md:h-48 object-cover border mb-4"
              />
              <div className="flex flex-col space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <FaUserGraduate className="text-indigo-500" /> {student.name}
                </h2>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaIdBadge className="text-indigo-500" /> ID: {student.studentid}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaBuilding className="text-indigo-500" /> Dept: {student.department}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaChalkboardTeacher className="text-indigo-500" /> Section: {student.class}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentView;

