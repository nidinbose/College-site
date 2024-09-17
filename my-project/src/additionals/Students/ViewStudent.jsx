import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewStudent = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3003/api/getstudentedit/${id}`);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3003/api/deletestudent/${id}`);
      navigate('/vstudent');
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleEdit = () => {
    navigate(`/editstudent/${id}`);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("Please log in to continue.");
      navigate('/login');
    } else {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setUserRole(decodedToken.role);
    }
  }, [navigate]);

  useEffect(() => {
    getData();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center p-1 bg-gray-50">Loading...</div>;
  }

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">No student data found.</div>;
  }

  return (
    <>
      <h1 className="text-center text-4xl font-bold">Student Data</h1>
      <section className="text-gray-700 body-font overflow-hidden h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={data.photo}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Student name</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.name}</h1>
              <p className="leading-relaxed pb-3">Student ID: {data.studentid}</p>
              <p className="leading-relaxed pb-3">Class: {data.class}</p>
              <p className="leading-relaxed pb-3">Department: {data.department}</p>
              <p className="leading-relaxed pb-3">Semester: {data.semester}</p>
              <p className="leading-relaxed pb-3">Blood Group: {data.bloodType}</p>
              <p className="leading-relaxed pb-4">Date of Birth: {data.dateOfBirth}</p>
              <p className="leading-relaxed pb-4">Mark List</p>

              {/* Conditionally render the buttons based on userRole */}
              {userRole !== 'student' && (
                <div className="flex flex-wrap gap-6">
                  <a
                    href="#_"
                    className="rounded-md px-4 py-2 sm:px-3.5 sm:py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600"
                    onClick={handleEdit}
                  >
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Edit</span>
                  </a>

                  <a
                    href="#_"
                    className="rounded-md px-4 py-2 sm:px-3.5 sm:py-2 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600"
                    onClick={handleDelete}
                  >
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Delete</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewStudent;

