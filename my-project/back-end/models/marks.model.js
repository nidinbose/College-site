import mongoose from 'mongoose';

const marksSchema = new mongoose.Schema({
  physics: { type: String },
  chemistry: { type: String },  // Corrected spelling from 'chemestry' to 'chemistry'
  maths: { type: String },      // Changed 'Maths' to 'maths' to keep consistent casing
  stat: { type: String },
  dbms: { type: String },       // Corrected 'dmbs' to 'dbms'
  pbd: { type: String }
});

export default mongoose.models.Mark || mongoose.model('Mark', marksSchema);
