import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewStaff = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3003/api/getstaffedit/${id}`);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching staff data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token');
    if (!isAuthenticated) {
      alert("Please log in to continue.");
      navigate('/login');
    }
  }, [navigate]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3003/api/deletestaff/${id}`);
      navigate('/vstaff');
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  const handleEdit = () => {
    navigate(`/editstaff/${id}`);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center p-1 bg-gray-50">Loading...</div>;
  }

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">No staff data found.</div>;
  }

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden min-h-screen">
        <div className="container px-5 py-12 sm:py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-col lg:flex-row flex-wrap">
            <img
              alt="staff"
              className="lg:w-1/2 w-full h-auto object-cover object-center rounded border border-gray-200 max-w-full"
              src={data.photo}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Staff Name</h2>
              <h1 className="text-gray-900 text-2xl sm:text-3xl title-font font-medium mb-1">{data.name}</h1>
              <p className="leading-relaxed pb-3">Staff ID: {data.staffid}</p>
              <p className="leading-relaxed pb-3">Class: {data.class}</p>
              <p className="leading-relaxed pb-3">Department: {data.department}</p>
              <p className="leading-relaxed pb-3">Semester: {data.semester}</p>
              <p className="leading-relaxed pb-3">Blood Group: {data.bloodType}</p>
              <p className="leading-relaxed pb-3">Date of Birth: {data.dateOfBirth}</p>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              
              <div className="flex flex-col sm:flex-row justify-start sm:gap-6 gap-4 mt-4">
                <a
                    href="#_"
                    className="rounded-md px-4 py-2 sm:px-3.5 sm:py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600"
                    onClick={handleEdit}
                >
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Edit Staff</span>
                </a>

                <a
                    href="#_"
                    className="rounded-md px-4 py-2 sm:px-3.5 sm:py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600"
                    onClick={handleDelete}
                >
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Delete</span>
                </a>

                <a
                    href="#_"
                    className="rounded-md px-4 py-2 sm:px-3.5 sm:py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600"
                    onClick={() => navigate('/vstaff')}
                >
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Go Back</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewStaff;
