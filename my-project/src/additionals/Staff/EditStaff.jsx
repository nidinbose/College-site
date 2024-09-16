import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditStaff = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [previewSource, setPreviewSource] = useState("");

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.patch(`http://localhost:3003/api/updatestaff/${id}`, data);
        if (res.status === 201) {
            navigate('/vstaff');
        }
    };

    const getUser = async () => {
        const res = await axios.get(`http://localhost:3003/api/getstaffedit/${id}`);
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
        <>
            <h1 className="text-center text-4xl font-semibold my-6">Edit Staff Data</h1>
            <section className="text-gray-700 body-font bg-white h-full min-h-screen">
                <div className="container mx-auto px-5 py-12">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Image Preview and Upload */}
                        <div className="w-full">
                            <img
                                alt="Staff"
                                className="w-full h-100 object-cover object-center rounded border border-gray-200"
                                src={previewSource || data.photo || "https://via.placeholder.com/300"}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="mt-4 w-full text-gray-700 border border-gray-300 rounded p-2"
                            />
                        </div>

                        {/* Form Fields */}
                        <div className="w-full">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-gray-500 text-sm font-semibold mb-2">Staff Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={data.name || ""}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                        placeholder="Staff Name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-500 text-sm font-semibold mb-2">Staff ID</label>
                                    <input
                                        type="text"
                                        name="staffid"
                                        value={data.staffid || ""}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                        placeholder="Staff ID"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-500 text-sm font-semibold mb-2">Class</label>
                                    <input
                                        type="text"
                                        name="class"
                                        value={data.class || ""}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                        placeholder="Class"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-500 text-sm font-semibold mb-2">Department</label>
                                    <select
                                        name="department"
                                        value={data.department || ""}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    >
                                        <option value="" disabled>
                                            Select Department
                                        </option>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="Electrical Engineering">Electrical Engineering</option>
                                        <option value="Civil Engineering">Civil Engineering</option>
                                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-500 text-sm font-semibold mb-2">Semester</label>
                                    <input
                                        type="text"
                                        name="semester"
                                        value={data.semester || ""}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                        placeholder="Semester"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-500 text-sm font-semibold mb-2">Blood Group</label>
                                    <input
                                        type="text"
                                        name="bloodType"
                                        value={data.bloodType || ""}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                        placeholder="Blood Group"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-500 text-sm font-semibold mb-2">Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={data.dateOfBirth || ""}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex justify-between">
                                <button
                                    onClick={handleSubmit}
                                    className="text-white bg-green-500 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                                >
                                    Save Changes
                                </button>
                                <button
                                    onClick={() => navigate('/vstaff')}
                                    className="text-white bg-red-500 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EditStaff;
