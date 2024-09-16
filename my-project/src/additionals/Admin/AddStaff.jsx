import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddStaff = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    staffid: "",
    experience: "",
    qualification: "",
    department: "Computer Science", 
    semester: "1st Semester", 
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

      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
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
      if (res.status === 200) {
        navigate('/admin');
      }
    } catch (error) {
      console.error("Error adding staff:", error);
    }
  };

  return (
    <>
      <h1 className="text-center text-4xl font-semibold my-6">Add Staff Data</h1>
      <section className="text-gray-700 body-font overflow-hidden bg-white h-full min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Image Preview and Upload */}
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <img
                alt="Staff"
                className="w-full h-82 object-cover object-center rounded border border-gray-200"
                src={preview || formData.photo || "https://via.placeholder.com/300"}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-4 w-full text-gray-700 border border-gray-300 rounded p-2"
              />
              {errors.photo && <p className="text-red-500">{errors.photo}</p>}
            </div>
            {/* Form Fields */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/* Name Field */}
              <div className="mb-4">
                <label className="text-sm text-gray-500">Staff Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="leading-relaxed w-full mb-2 p-2 border rounded"
                  placeholder="Staff Name"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>

              {/* Staff ID */}
              <div className="mb-4">
                <label className="text-sm text-gray-500">Staff ID</label>
                <input
                  type="text"
                  name="staffid"
                  value={formData.staffid}
                  onChange={handleChange}
                  className="leading-relaxed w-full mb-2 p-2 border rounded"
                  placeholder="Staff ID"
                />
                {errors.staffid && <p className="text-red-500">{errors.staffid}</p>}
              </div>

              {/* Experience */}
              <div className="mb-4">
                <label className="text-sm text-gray-500">Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="leading-relaxed w-full mb-2 p-2 border rounded"
                  placeholder="Experience"
                />
                {errors.experience && <p className="text-red-500">{errors.experience}</p>}
              </div>

              {/* Qualification */}
              <div className="mb-4">
                <label className="text-sm text-gray-500">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="leading-relaxed w-full mb-2 p-2 border rounded"
                  placeholder="Qualification"
                />
                {errors.qualification && <p className="text-red-500">{errors.qualification}</p>}
              </div>

              {/* Department */}
              <div className="mb-4">
                <label className="text-sm text-gray-500">Department</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="leading-relaxed w-full mb-2 p-2 border rounded"
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                </select>
                {errors.department && <p className="text-red-500">{errors.department}</p>}
              </div>

              {/* Semester */}
              <div className="mb-4">
                <label className="text-sm text-gray-500">Semester</label>
                <select
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  className="leading-relaxed w-full mb-2 p-2 border rounded"
                >
                  <option value="1st Semester">1st Semester</option>
                  <option value="2nd Semester">2nd Semester</option>
                  {/* Add more semesters as needed */}
                </select>
                {errors.semester && <p className="text-red-500">{errors.semester}</p>}
              </div>

              {/* Blood Type */}
              <div className="mb-4">
                <label className="text-sm text-gray-500">Blood Group</label>
                <input
                  type="text"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  className="leading-relaxed w-full mb-2 p-2 border rounded"
                  placeholder="Blood Group"
                />
                {errors.bloodType && <p className="text-red-500">{errors.bloodType}</p>}
              </div>

              {/* Date of Birth */}
              <div className="mb-4">
                <label className="text-sm text-gray-500">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="leading-relaxed w-full mb-2 p-2 border rounded"
                />
                {errors.dateOfBirth && <p className="text-red-500">{errors.dateOfBirth}</p>}
              </div>

              {/* Buttons */}
              <div className="flex mt-6 gap-5">


                <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
                    onClick={handleSubmit}>
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Add Staff</span>
</a>

<a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
  onClick={() => navigate("/admin")}>
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Go Back</span>
</a>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddStaff;
