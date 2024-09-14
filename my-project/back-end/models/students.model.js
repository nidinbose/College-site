import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema({
  name: { type: String},
  studentid: { type: String},
  class: { type: String},
  department: { type: String },
  semester: { type: String},
  bloodType: { type: String },
  dateOfBirth: { type: String },
  photo: { type: String },

  // Add semester-wise subjects and scores
  semesters: [
    {
      semester: { type: String},  // e.g., "Semester 1"
      subjects: [
        {
          subjectName: { type: String},  // e.g., "Mathematics"
          score: { type: Number}         // e.g., 85
        }
      ]
    }
  ]
});

export default mongoose.models.student || mongoose.model('student', studentsSchema);
