import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from "@material-tailwind/react";

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

  const handleAddMark = () => {
    navigate(`/addmark/${id}`);
  };

  const handleViewMarklist = () => {
    navigate(`/viewmarklist/${id}`);
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
    <h1>Student Data</h1>
    <section className="text-gray-700 body-font overflow-hidden bg-[] h-screen">
      
      
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
            <div className="flex mb-4">
           
              
            </div>
            <p className="leading-relaxed pb-3">
            Studet ID : {data.studentid}
            </p>
            <p className="leading-relaxed pb-3">
             Class : {data.class}
          </p>
          <p className="leading-relaxed pb-3">
          Department : {data.department}
          </p>
          <p className="leading-relaxed pb-3">
          Semester : {data.semester}
          </p>
          <p className="leading-relaxed pb-3">
          Blood Group : {data.bloodType}
          </p>
          <p className="leading-relaxed pb-4">
          Date of Birth : {data.dateOfBirth}
          </p>
          <p className="leading-relaxed pb-4">
             Mark List    
          </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
             
              <div className="flex ml-6 items-center">
              
                <div className="relative">
             
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex ">
            <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
            onClick={handleEdit}>
                Edit Student
              </button>
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              onClick={handleDelete}>
                Delete
              </button>
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                Add mark
              </button>
              
             
             
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ViewStudent;
