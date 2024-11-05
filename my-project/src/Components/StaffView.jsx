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
    <div className="min-h-screen bg-[#1B2C39] p-6">
      <div className="container mx-auto flex flex-col items-center">
        
        {/* Department Filter */}
        <div className="mb-8 w-full md:w-1/3">
          <label htmlFor="department-filter" className="block text-lg font-semibold text-white mb-2">
            Filter by Department:
          </label>
          <select
            id="department-filter"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full bg-[#1B2C39] text-white border border-gray-500 rounded-lg p-2"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept} className="text-black">
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Staff Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {filteredStaff.map((value) => (
            <Link to={`/views/${value._id}`} key={value._id}>
              <motion.div
                className="bg-[#A0CE4E] rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={value.photo}
                  alt={value.name}
                  className="w-full h-full object-cover bg-cover rounded"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-white">{value.name}</h2>
                  <p className="text-gray-600">ID: {value.staffid}</p>
                  <p className="text-gray-600">Dept: {value.department}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        {/* No Staff Found Message */}
        {filteredStaff.length === 0 && (
          <p className="text-white mt-10">No staff members found in this department.</p>
        )}
      </div>
    </div>
  );
};

export default StaffView;
