import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const AddMark = ({ studentid }) => { 
  const [formData, setFormData] = useState({
    semesters: [{ semester: '', subjects: [{ subjectName: '', score: '' }] }]
  });

  const handleSemesterChange = (semesterIndex, e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updatedSemesters = [...prevState.semesters];
      updatedSemesters[semesterIndex] = {
        ...updatedSemesters[semesterIndex],
        [name]: value,
      };
      return { ...prevState, semesters: updatedSemesters };
    });
  };

   const handleSubjectChange = (semesterIndex, subjectIndex, e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updatedSemesters = [...prevState.semesters];
      const updatedSubjects = [...updatedSemesters[semesterIndex].subjects];
      updatedSubjects[subjectIndex] = {
        ...updatedSubjects[subjectIndex],
        [name]: value,
      };
      updatedSemesters[semesterIndex].subjects = updatedSubjects;
      return { ...prevState, semesters: updatedSemesters };
    });
  };

  const addSubject = (semesterIndex) => {
    setFormData((prevState) => {
      const updatedSemesters = [...prevState.semesters];
      updatedSemesters[semesterIndex].subjects.push({ subjectName: '', score: '' });
      return { ...prevState, semesters: updatedSemesters };
    });
  };

  const addSemester = () => {
    setFormData((prevState) => ({
      ...prevState,
      semesters: [...prevState.semesters, { semester: '', subjects: [{ subjectName: '', score: '' }] }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   
      const response = await axios.post(`http://localhost:3003/api/updatestudent/${studentid}`, formData);
      console.log('Response:', response.data);
      
      setFormData({
        semesters: [{ semester: '', subjects: [{ subjectName: '', score: '' }] }]
      });
    } catch (error) {
      console.error('Error submitting the form:', error);
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
          Add Student Marks
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
         
          {formData.semesters.map((sem, semesterIndex) => (
            <div key={semesterIndex} className="border p-4 rounded-lg mb-4">
              <label className="text-gray-700">Semester</label>
              <input
                type="text"
                name="semester"
                value={sem.semester}
                onChange={(e) => handleSemesterChange(semesterIndex, e)}
                className="mt-1 p-2 border rounded-lg w-full"
                placeholder="Enter semester name"
              />

              {sem.subjects.map((subject, subjectIndex) => (
                <div key={subjectIndex} className="mt-4">
                  <label className="text-gray-700">Subject Name</label>
                  <input
                    type="text"
                    name="subjectName"
                    value={subject.subjectName}
                    onChange={(e) => handleSubjectChange(semesterIndex, subjectIndex, e)}
                    className="mt-1 p-2 border rounded-lg w-full"
                    placeholder="Enter subject name"
                  />

                  <label className="text-gray-700 mt-2">Score</label>
                  <input
                    type="number"
                    name="score"
                    value={subject.score}
                    onChange={(e) => handleSubjectChange(semesterIndex, subjectIndex, e)}
                    className="mt-1 p-2 border rounded-lg w-full"
                    placeholder="Enter score"
                    min="0"
                    max="100"
                  />
                </div>
              ))}

              <button
                type="button"
                onClick={() => addSubject(semesterIndex)}
                className="mt-4 py-1 px-3 bg-indigo-600 text-white rounded-lg"
              >
                Add Subject
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addSemester}
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg"
          >
            Add Semester
          </button>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddMark;
