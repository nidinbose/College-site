import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddStudents = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    studentid: "",
    class: "",
    department: "Computer Science", // Default value set to 'Computer Science'
    semester: "1st Semester", // Default value set to '1st Semester'
    bloodType: "",
    dateOfBirth: "",
    photo: null
  });
         
  const [previewSource, setPreviewSource] = useState(null);
  const [errors, setErrors] = useState({});


  useEffect(() => {
  
    const isAuthenticated = localStorage.getItem('token');

    if (!isAuthenticated) {
        alert("Please log in to continue.");
        navigate('/login');
    }
}, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setFormData((prev) => ({ ...prev, photo: base64 }));
    setPreviewSource(base64);
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.studentid.trim()) formErrors.studentid = "Student ID is required";
    if (!formData.class.trim()) formErrors.class = "Class is required";
    if (!formData.department.trim()) formErrors.department = "Department is required";
    if (!formData.semester.trim()) formErrors.semester = "Semester is required";
    if (!formData.bloodType.trim()) formErrors.bloodType = "Blood Type is required";
    if (!formData.dateOfBirth.trim()) formErrors.dateOfBirth = "Date of Birth is required";
    if (!formData.photo) formErrors.photo = "Photo is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const res = await axios.post("http://localhost:3003/api/addstudents", formData);
      console.log(res);
      if (res.status === 200) {
        navigate('/admin');
      }
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white/80 flex items-center justify-center p-6">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Add Student
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="flex flex-col">
            <label className="text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Student ID Field */}
          <div className="flex flex-col">
            <label className="text-gray-700">Student ID</label>
            <input
              type="text"
              name="studentid"
              value={formData.studentid}
              onChange={handleChange}
              className={`mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.studentid ? 'border-red-500' : ''}`}
            />
            {errors.studentid && <p className="text-red-500 text-sm">{errors.studentid}</p>}
          </div>

          {/* Class Field */}
          <div className="flex flex-col">
            <label className="text-gray-700">Class</label>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              className={`mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.class ? 'border-red-500' : ''}`}
            />
            {errors.class && <p className="text-red-500 text-sm">{errors.class}</p>}
          </div>

          {/* Department Field */}
          <div className="flex flex-col">
            <label className="text-gray-700">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={`mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.department ? 'border-red-500' : ''}`}
            >
              <option value="Computer Science">Computer Science</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
            </select>
            {errors.department && <p className="text-red-500 text-sm">{errors.department}</p>}
          </div>

          {/* Semester Field */}
          <div className="flex flex-col">
            <label className="text-gray-700">Semester</label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className={`mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.semester ? 'border-red-500' : ''}`}
            >
              <option value="1st Semester">1st Semester</option>
              <option value="2nd Semester">2nd Semester</option>
              <option value="3rd Semester">3rd Semester</option>
              <option value="4th Semester">4th Semester</option>
              <option value="5th Semester">5th Semester</option>
              <option value="6th Semester">6th Semester</option>
              <option value="7th Semester">7th Semester</option>
              <option value="8th Semester">8th Semester</option>
            </select>
            {errors.semester && <p className="text-red-500 text-sm">{errors.semester}</p>}
          </div>

          {/* Blood Type Field */}
          <div className="flex flex-col">
            <label className="text-gray-700">Blood Type</label>
            <input
              type="text"
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className={`mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.bloodType ? 'border-red-500' : ''}`}
            />
            {errors.bloodType && <p className="text-red-500 text-sm">{errors.bloodType}</p>}
          </div>

          {/* Date of Birth Field */}
          <div className="flex flex-col">
            <label className="text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className={`mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.dateOfBirth ? 'border-red-500' : ''}`}
            />
            {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
          </div>

          {/* Photo Field */}
          <div className="flex flex-col">
            <label className="text-gray-700">Photo</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
              className={`mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.photo ? 'border-red-500' : ''}`}
            />
            {errors.photo && <p className="text-red-500 text-sm">{errors.photo}</p>}
          </div>

          {/* Photo Preview */}
          {previewSource && (
            <div className="flex justify-center mt-4">
              <img
                src={previewSource}
                alt="Selected"
                className="h-40 w-40 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add Student
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddStudents;


