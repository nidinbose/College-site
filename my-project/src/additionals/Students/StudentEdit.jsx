import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const StudentsEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [photo, setPhoto] = useState("");
    const [previewSource, setPreviewSource] = useState("");

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.patch(`http://localhost:3003/api/updatestudent/${id}`, data);
        if (res.status === 201) {
            navigate('/vstudent');
        }
    };
    useEffect(() => {
  
        const isAuthenticated = localStorage.getItem('token');
    
        if (!isAuthenticated) {
            alert("Please log in to continue.");
            navigate('/login');
        }
    }, [navigate]);

    const getUser = async () => {
        const res = await axios.get(`http://localhost:3003/api/getstudentedit/${id}`);
        setData(res.data);
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setData((prev) => ({ ...prev, photo: base64 }));
        setPreviewSource(base64);
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => resolve(fileReader.result);
            fileReader.onerror = (error) => reject(error);
        });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="min-h-screen bg-white/80 flex items-center justify-center p-6">
            <motion.div
                className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Edit Student
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div className="flex flex-col">
                        <label className="text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={data.name || ""}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Student ID Field */}
                    <div className="flex flex-col">
                        <label className="text-gray-700">Student ID</label>
                        <input
                            type="text"
                            name="studentid"
                            value={data.studentid || ""}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Class Field */}
                    <div className="flex flex-col">
                        <label className="text-gray-700">Class</label>
                        <input
                            type="text"
                            name="class"
                            value={data.class || ""}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Department Field */}
                    <div className="flex flex-col">
                        <label className="text-gray-700">Department</label>
                        <select
                            name="department"
                            value={data.department || ""}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="Computer Science">Computer Science</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                            <option value="Electrical Engineering">Electrical Engineering</option>
                        </select>
                    </div>

                    {/* Semester Field */}
                    <div className="flex flex-col">
                        <label className="text-gray-700">Semester</label>
                        <select
                            name="semester"
                            value={data.semester || ""}
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
                    </div>

                    {/* Blood Type Field */}
                    <div className="flex flex-col">
                        <label className="text-gray-700">Blood Type</label>
                        <input
                            type="text"
                            name="bloodType"
                            value={data.bloodType || ""}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Date of Birth Field */}
                    <div className="flex flex-col">
                        <label className="text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={data.dateOfBirth || ""}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
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
                            Update Student
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default StudentsEdit;
