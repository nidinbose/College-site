import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewStudent = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [marks, setMarks] = useState(null);  // Corrected marks state usage
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  // Fetch student data and marks
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3003/api/getstudentedit/${id}`);
      setData(res.data);
      fetchMarks(res.data.studentid); // Fetch marks based on student ID
    } catch (error) {
      console.error("Error fetching student data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch marks for a specific student
  const fetchMarks = async (studentid) => {
    try {
      const res = await axios.get(`http://localhost:3003/api/getmarkedit/${studentid}`);
      setMarks(res.data[0]);  // Set marks data (assuming it's an array with a single object)
    } catch (error) {
      console.error("Error fetching marks:", error);
    }
  };

  // Handle student deletion
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3003/api/deletestudent/${id}`);
      navigate('/vstudent'); // Navigate to student list after deletion
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Navigate to edit page
  const handleEdit = () => {
    navigate(`/editstudent/${id}`);
  };

  // Check if the user is logged in and retrieve their role
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("Please log in to continue.");
      navigate('/login');
    } else {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setUserRole(decodedToken.role); // Set user role from the decoded token
    }
  }, [navigate]);

  // Fetch student data on component mount or when the ID changes
  useEffect(() => {
    getData();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">Loading...</div>;
  }

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center p-4 bg-gray-500">No student data found.</div>;
  }

  return (
    <div className="min-h-screen pb-[20vh] lg:pb-[40vh] bg-[#1B2C39]">
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-[#A0CE4E] ">Student's Profile</h1>
      <section className="text-gray-700 body-font overflow-hidden bg-[#1B2C39]">
        <div className="container px-4 py-8 md:py-12 lg:py-16 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            
            {/* Student Image */}
            <div className="hover:bg-[#A0CE4E] border-[#A0CE4E] p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 gap-4 bg-transparent space-y-7">
                <div className="bg-transparent h-80 w-full flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
                  <img
                    alt="Student Profile"
                    className="object-cover object-center h-96 w-auto"
                    src={data.photo}
                  />
                </div>
                <div className="h-full w-full flex justify-center items-center p-4">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center bg-[#A0CE4E] hover:bg-[#002244] w-64 h-12 rounded-lg ">{data.name}</h1>
                </div>
              </div>
            </div>

            {/* Student Information */}
            <div className="rounded shadow-lg p-6 space-y-4 bg-[#A0CE4E]">
              <h2 className="text-lg font-semibold text-gray-500">Student Information</h2>
              <div className="bg-violet-50 p-3 rounded-md border">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium text-gray-900 ml-2">{data.name}</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-md border">
                <span className="text-gray-600">Student ID:</span>
                <span className="font-medium text-gray-900 ml-2">{data.studentid}</span>
              </div>
              <div className="bg-violet-50 p-3 rounded-md border">
                <span className="text-gray-600">Class:</span>
                <span className="font-medium text-gray-900 ml-2">{data.class}</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-md border">
                <span className="text-gray-600">Department:</span>
                <span className="font-medium text-gray-900 ml-2">{data.department}</span>
              </div>
              <div className="bg-violet-50 p-3 rounded-md border">
                <span className="text-gray-600">Semester:</span>
                <span className="font-medium text-gray-900 ml-2">{data.semester}</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-md border">
                <span className="text-gray-600">Blood Group:</span>
                <span className="font-medium text-gray-900 ml-2">{data.bloodType}</span>
              </div>
              <div className="bg-emerald-50 p-3 rounded-md border">
                <span className="text-gray-600">Date of Birth:</span>
                <span className="font-medium text-gray-900 ml-2">{data.dateOfBirth}</span>
              </div>
            </div>

            {/* Mark List Section */}
            {marks && (
              <div className="p-6 w-full mx-auto bg-white rounded-xl shadow-md space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Student Marks</h2>
                <p><strong>Student ID:</strong> {marks.studentid}</p>
                <p><strong>Semester:</strong> {marks.semester}</p>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-700">Subjects</h3>
                  <ul className="space-y-2">
                    {marks.subjects.map((subject) => (
                      <li key={subject._id} className="p-2 border rounded-md">
                        <p><strong>Subject:</strong> {subject.name}</p>
                        <p><strong>Mark:</strong> {subject.mark}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      {userRole !== 'student' && (
        <div className="flex justify-end items-end gap-6 mt-6 lg:col-span-2">
          <a
            href="#_"
            className="rounded-md px-4 py-2 sm:px-5 sm:py-3 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#A0CE4E] text-indigo-600"
            onClick={handleEdit}
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#A0CE4E] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#A0CE4E] transition duration-300 group-hover:text-white ease">Edit</span>
          </a>

          <a
            href="#_"
            className="rounded-md px-4 py-2 sm:px-5 sm:py-3 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#A0CE4E] text-indigo-600"
            onClick={handleDelete}
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#A0CE4E] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#A0CE4E] transition duration-300 group-hover:text-white ease">Delete</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default ViewStudent;
