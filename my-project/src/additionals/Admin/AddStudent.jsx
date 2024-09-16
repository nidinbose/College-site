import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddStudents = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    studentid: "",
    class: "",
    department: "Computer Science",
    semester: "1st Semester",
    bloodType: "",
    dateOfBirth: "",
    photo: null,
  });

  const [previewSource, setPreviewSource] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token");

    if (!isAuthenticated) {
      alert("Please log in to continue.");
      navigate("/login");
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
      if (res.status === 200) {
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <>
      <h1 className="text-center text-4xl font-semibold my-6">Add Student Data</h1>
      <section className="text-gray-700 body-font overflow-hidden bg-white h-full min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Image Preview and Upload */}
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <img
                alt="Student"
                className="w-full h-82 object-cover object-center rounded border border-gray-200"
                src={previewSource || formData.photo || "https://via.placeholder.com/300"}
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
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Student Name</h2>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="leading-relaxed w-full mb-4 p-2 border rounded"
                placeholder="Student Name"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}

              <p className="border font-semibold mb-4">
               
                <input
                  type="text"
                  name="studentid"
                  value={formData.studentid}
                  onChange={handleChange}
                  className="leading-relaxed pb-3 text-start mt-2 w-full border-transparent pl-3"
                  placeholder="Student ID"
                />
                {errors.studentid && <p className="text-red-500">{errors.studentid}</p>}
              </p>

              <p className="border font-semibold mb-4">
               
                <input
                  type="text"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="leading-relaxed pb-3 text-start mt-2 w-full border-transparent pl-3"
                  placeholder="Class"
                />
                {errors.class && <p className="text-red-500">{errors.class}</p>}
              </p>

              <p className="border font-semibold mb-4">
              
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="leading-relaxed pb-3 text-start mt-2 w-full border-transparent pl-3"
                >
                  <option value="" disabled>
                    Select Department
                  </option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                </select>
                {errors.department && <p className="text-red-500">{errors.department}</p>}
              </p>

              <p className="border font-semibold mb-4">
            
                <select
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  className="leading-relaxed pb-3 text-start mt-2 w-full border-transparent pl-3"
                >
                  <option value="1st Semester">1st Semester</option>
                  <option value="2nd Semester">2nd Semester</option>
                  <option value="2nd Semester">2nd Semester</option>
                  <option value="2nd Semester">2nd Semester</option>
                  <option value="2nd Semester">2nd Semester</option>
                  <option value="2nd Semester">2nd Semester</option>
                  <option value="2nd Semester">2nd Semester</option>
                  {/* Add more semesters as needed */}
                </select>
                {errors.semester && <p className="text-red-500">{errors.semester}</p>}
              </p>

              <p className="border font-semibold mb-4">
        
                <input
                  type="text"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  className="leading-relaxed pb-3 text-start mt-2 w-full border-transparent pl-3"
                  placeholder="Blood Group"
                />
                {errors.bloodType && <p className="text-red-500">{errors.bloodType}</p>}
              </p>

              <p className="border font-semibold mb-4">
                                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="leading-relaxed pb-3 text-start mt-2 w-full border-transparent pl-3"
                />
                {errors.dateOfBirth && <p className="text-red-500">{errors.dateOfBirth}</p>}
              </p>

              <div className="flex mt-6 gap-5 mt-[16vh]">
        

<a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
  onClick={handleSubmit}  >
<span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span class="relative">Button Text</span>
</a>



                  <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                  onClick={() => navigate("/vstudent")}>  
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span class="relative">Cancel</span>
</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddStudents;
