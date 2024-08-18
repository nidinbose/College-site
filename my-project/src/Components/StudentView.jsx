import React from "react";
import { motion } from "framer-motion";

const students = [
  {
    id: "S101",
    name: "John Doe",
    department: "Computer Science",
    section: "A",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: "S102",
    name: "Jane Smith",
    department: "Mechanical Engineering",
    section: "B",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: "S103",
    name: "Alice Johnson",
    department: "Electrical Engineering",
    section: "C",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: "S104",
    name: "Bob Brown",
    department: "Civil Engineering",
    section: "D",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: "S105",
    name: "Charlie Green",
    department: "Biotechnology",
    section: "E",
    photo: "https://via.placeholder.com/150",
  },
  {
    id: "S106",
    name: "Diana White",
    department: "Information Technology",
    section: "F",
    photo: "https://via.placeholder.com/150",
  },
];

const StudentView = () => {
  return (
    <div className="container mx-auto p-4 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {students.map((student) => (
          <motion.div
            key={student.id}
            className="bg-white rounded-lg shadow-lg p-4 transform hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={student.photo}
              alt={student.name}
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{student.name}</h2>
              <p className="text-gray-600">ID: {student.id}</p>
              <p className="text-gray-600">Dept: {student.department}</p>
              <p className="text-gray-600">Section: {student.section}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StudentView;
