import mongoose from 'mongoose';

const marksSchema = new mongoose.Schema({
  physics: { type: String },
  chemistry: { type: String },  
  maths: { type: String },      
  dbms: { type: String },     
  pbd: { type: String },
  studentid:{type:String}
});

export default mongoose.models.Mark || mongoose.model('Mark', marksSchema);
  