

import mongoose, { Mongoose, model } from "mongoose";

const studentsSchema= new mongoose.Schema({
  

    name: { type: String},
    studentid: { type: String},
    class: { type: String},
    department:{ type:String},
    semester: { type: String},
    bloodType: { type: String  },
    dateOfBirth: { type: String },
    photo: { type: String }
   
})

export default mongoose.model.student || mongoose.model('student',studentsSchema)