import React, { useState } from 'react';
import axios from 'axios';

function AddMarksForm() {
  const [formData, setFormData] = useState({
    semester: '',
    studentid: '',
    subjects: [], 
  });

  const [responseMessage, setResponseMessage] = useState('');

   const subjectsBySemester = {
    1: [{ name: 'History' }, { name: 'Biology' }, { name: 'Math 101' }],
    2: [{ name: 'Math 102' }, { name: 'English 102' }, { name: 'Chemistry 101' }],
    3: [{ name: 'Calculus' }, { name: 'Literature' }, { name: 'Biology 101' }],
   };


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'semester') {
         setFormData({
        ...formData,
        semester: value,
        subjects: subjectsBySemester[value]?.map((subject) => ({
          name: subject.name,
          mark: '',
        })) || [],
      });
    } else if (name === 'studentid') {
      setFormData({ ...formData, studentid: value });
    }
  };

  const handleMarkChange = (index, value) => {
    const updatedSubjects = [...formData.subjects];
    updatedSubjects[index].mark = value;
    setFormData({ ...formData, subjects: updatedSubjects });
  };

   const addSubject = () => {
    setFormData({
      ...formData,
      subjects: [...formData.subjects, { name: '', mark: '' }],
    });
  };

  const removeSubject = (index) => {
    const updatedSubjects = formData.subjects.filter((_, i) => i !== index);
    setFormData({ ...formData, subjects: updatedSubjects });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const subject of formData.subjects) {
      const payload = {
        semester: formData.semester,
        studentid: formData.studentid,
        subject: subject,
      };

      try {
        const response = await axios.post('http://localhost:3003/api/addmarks', payload);
        setResponseMessage(response.data.message || 'Marks added successfully');
      } catch (error) {
        setResponseMessage(
          error.response?.data?.message || 'Error adding marks'
        );
      }
    }
  };

  return (
    <div className='bg-[#1B2C39] h-screen p-12 '>
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto border border-gray-200 ">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">Add Marks</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="semester" className="block text-gray-700 font-medium">Semester</label>
          <select
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Semester</option>
            {Object.keys(subjectsBySemester).map((semester) => (
              <option key={semester} value={semester}>Semester {semester}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="studentid" className="block text-gray-700 font-medium">Student ID</label>
          <input
            type="text"
            id="studentid"
            name="studentid"
            value={formData.studentid}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {formData.subjects.map((subject, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <div className="w-3/4">
                <label className="block text-gray-700 font-medium">{subject.name || 'Subject'}</label>
                <input
                  type="text"
                  value={subject.name}
                  onChange={(e) => handleMarkChange(index, e.target.value)}
                  placeholder="Enter subject name"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-1/4 ml-2">
                <label className="block text-gray-700 font-medium">Mark</label>
                <input
                  type="number"
                  value={subject.mark}
                  onChange={(e) => handleMarkChange(index, e.target.value)}
                  placeholder="Enter mark"
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => removeSubject(index)}
              className="mt-2 text-red-600 hover:text-red-700"
            >
              Remove Subject
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addSubject}
          className="w-full py-3 px-4 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Add Subject
        </button>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4"
        >
          Submit
        </button>
      </form>

      {responseMessage && (
        <div className="mt-6 text-center text-green-600 font-semibold">{responseMessage}</div>
      )}
    </div>
    </div>
  );
}

export default AddMarksForm;
