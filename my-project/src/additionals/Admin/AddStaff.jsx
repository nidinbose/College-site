import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddStaff = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    staffid: "",
    experience: "",
    qualification: "",
    department: "Computer Science", // Default value
    semester: "1st Semester", // Default value
    bloodType: "",
    dateOfBirth: "",
    photo: null
  });

  const [preview, setPreview] = useState(null);
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
    setPreview(URL.createObjectURL(file));
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

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.staffid) newErrors.staffid = "Staff ID is required";
    if (!formData.experience) newErrors.experience = "Experience is required";
    if (!formData.qualification) newErrors.qualification = "Qualification is required";
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.semester) newErrors.semester = "Semester is required";
    if (!formData.bloodType) newErrors.bloodType = "Blood Type is required";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required";
    if (!formData.photo) newErrors.photo = "Photo is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await axios.post("http://localhost:3003/api/addstaff", formData);
      console.log(res);
      if (res.status === 200) {
        navigate('/admin');
      }
    } catch (error) {
      console.error("Error adding staff:", error);
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
          Add Staff
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
              className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Staff ID Field */}
          <div className="flex flex-col">
            <label className="text-gray-700">Staff ID</label>
            <input
              type="text"
              name="staffid"
              value={formData.staffid}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.staffid && <p className="text-red-500 text-sm">{errors.staffid}</p>}
          </div>

          {/* Experience Field */}
          <div className="flex flex-col">
            <label className="text-gray-700">Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
          </div>

          {/* Qualification Field */}
          <div className="flex flex-col">
            <label className="text-gray-700">Qualification</label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.qualification && <p className="text-red-500 text-sm">{errors.qualification}</p>}
          </div>

          {/* Department Field */}
          <div className="flex flex-col">
            <label className="text-gray-700">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.photo && <p className="text-red-500 text-sm">{errors.photo}</p>}
          </div>

          {/* Photo Preview */}
          {preview && (
            <div className="flex flex-col items-center mt-4">
              <label className="text-gray-700">Photo Preview</label>
              <img
                src={preview}
                alt="Photo Preview"
                className="mt-2 h-32 w-32 object-cover rounded-full shadow-lg"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Add
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddStaff;
