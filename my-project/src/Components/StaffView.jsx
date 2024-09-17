import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const StaffView = () => {
  const [staff, setStaff] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const getStaff = async () => {
    try {
      const res = await axios.get("http://localhost:3003/api/getstaff");
      setStaff(res.data);
      
      const uniqueDepartments = [
        "All",
        ...new Set(res.data.map((staff) => staff.department)),
      ];
      setDepartments(uniqueDepartments);
    } catch (error) {
      console.error("Error fetching staff data:", error);
    }
  };

  useEffect(() => {
    getStaff();
  }, []);

  const filteredStaff =
    selectedDepartment === "All"
      ? staff
      : staff.filter((s) => s.department === selectedDepartment);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="mb-4">
        <label htmlFor="department-filter" className="block text-lg font-semibold mb-2">
          Filter by Department:
        </label>
        <select
          id="department-filter"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {filteredStaff.map((value) => (
            <Link to={`/views/${value._id}`} key={value._id}>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-4 transform hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={value.photo}
                alt={value.name}
                className="w-full h-[50vh] object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{value.name}</h2>
                <p className="text-gray-600">ID: {value.staffid}</p>
                <p className="text-gray-600">Dept: {value.department}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StaffView;