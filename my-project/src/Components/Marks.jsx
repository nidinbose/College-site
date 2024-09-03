import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const AddMarks = () => {
  const [marks, setMarks] = useState({
    physics: '',
    chemistry: '',
    maths: '',
    stats: '',
    dbms: '',
    pbd: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarks({ ...marks, [name]: value });
  };

  const validate = () => {
    const errors = {};
    Object.keys(marks).forEach((key) => {
      if (!marks[key]) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      } else if (isNaN(marks[key]) || marks[key] < 0 || marks[key] > 100) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} must be a number between 0 and 100`;
      }
    });
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3003/api/addmarks', marks);
        console.log('Marks submitted successfully:', response.data);
        // Handle success (e.g., show a success message or redirect)
      } catch (error) {
        console.error('Error submitting marks:', error);
        // Handle error (e.g., show an error message)
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Add Student Marks</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['physics', 'chemistry', 'maths', 'stats', 'dbms', 'pbd'].map((subject) => (
          <div key={subject}>
            <label htmlFor={subject} className="block text-sm font-medium text-gray-700">
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </label>
            <input
              type="text"
              id={subject}
              name={subject}
              value={marks[subject]}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border rounded-md ${
                errors[subject] ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors[subject] && <p className="text-red-500 text-sm mt-1">{errors[subject]}</p>}
          </div>
        ))}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold"
        >
          Submit Marks
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddMarks;
;
