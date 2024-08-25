
import userSchema from "./models/user.model.js"
import bcrypt from 'bcrypt'
import pkg from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import studentsSchema from './models/students.model.js'
import staffSchema from './models/staff.model.js'
import marksSchema from './models/marks.model.js'


const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "3bf1ace8b5aa81",
    pass: "23d9ae6b829afb",
  },
});

const {sign} = pkg




export async function userRegister(req,res) {

  const {name,username,phone,password,cpassword,email,role,photo}=req.body

  if(!(name&&username&&phone&&password&&cpassword&&email&&role&&photo))
      return res.status(404).send("fields are empty")

  if(password!==cpassword)
      return res.status(404).send("password not matched")

bcrypt.hash(password,10).then(async(hpassword)=>{
  userSchema.create({name,username,phone,password:hpassword,email,role,otp:"",photo}).then(()=>{
      return res.status(201).send({msg:"successfully created"})

  })
  .catch((error)=>{
      return res.status(400).send({error:error})
  })
}).catch((error)=>{
  res.status(400).send({error:error})
})
  
}



export async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userSchema.findOne({ email });

    if (!user) return res.status(404).send({ msg: "User not found" });

    const success = await bcrypt.compare(password, user.password);
    if (!success) return res.status(400).send({ msg: "Password not matched" });

    const { _id: id, role } = user; // Destructure role from user object
    const token = await sign({ id, email, role }, process.env.JWT_KEY, { expiresIn: "24h" });

    return res.status(200).send({ token, role }); // Send role along with the token
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
  
}



export async function Home(req, res) {
  const { id, username } = req.user; // Assuming req.user contains a photo property
  console.log(req.user);
  res.status(200).send({ id, username});
}


export async function Logout(req, res) {
  try {
 
    req.session = null; 
    res.status(200).send({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}



export async function Forget(req,res){
  const {username}=req.body;
  console.log(username);
const data=await userSchema.findOne({username:username});
if(!data)
  return res.status(400).send({msg:"user not found"})

const otpLength = 6;
// Generate a random numeric OTP with exactly 6 digits
const otp = Math.floor(100000 + Math.random() * 900000);
console.log(otp);
//   update otp in data base code here
const info = await transporter.sendMail({
  from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
  to: "nidinbose999@gmail.com", // list of receivers
  subject: "OTP", // Subject line
  text: "your valid otp", // plain text body
  html: `<b>${otp}</b>`, // html body
});

console.log("Message sent: %s", info.messageId);



}



export async function addStudents(req,res){
  try{
      console.log(req.body);
      const {...FormData} = req.body;

      await studentsSchema
      .create({...FormData})
          .then(()=>{
              res.status(200).send({msg:"sucessfully created"})
          })
          .catch((error)=>{
              res.status(400).send({error:error})
          });
  }catch(error){
      res.status(500).send(error)
  }
}

export async function getStudents(req,res){
  try{

      const data=await studentsSchema.find();
      res.status(200).send(data)
      console.log(data);
  }catch (error){
      res.status(500).send(error)
  }
}

export async function getStudentEdit(req,res) {
  try {
      const {id}=req.params;
      console.log(id);
      const data = await studentsSchema.findOne({_id:id})
      console.log(data);
      res.status(200).send(data)
  } catch (error) {
      res.status(400).send(error)
  }
}

export async function deleteStudent(req, res) {
  try {
      const { id } = req.params;
      console.log(id);    

    await studentsSchema.deleteOne({_id:id});
     res.status(200).send({msg:"successfully deleted"})
  } catch (error) {
      console.error(error);
      res.status(400).send({ error});
  }
  
}




export async function updateStudent(req,res) {
  try {
      const {id}=req.params;
      console.log(id);
  const {...FormData}=req.body
  await studentsSchema.updateOne({_id:id},{$set:{...FormData}})
      res.status(201).send({msg:"updated"})
  } catch (error) {
      res.status(400).send(error)
  }
}

// staff
export async function addStaff(req,res){
  try{
      console.log(req.body);
      const {...FormData} = req.body;

      await staffSchema
      .create({...FormData})
          .then(()=>{
              res.status(200).send({msg:"sucessfully created"})
          })
          .catch((error)=>{
              res.status(400).send({error:error})
          });
  }catch(error){
      res.status(500).send(error)
  }
}


export async function getStaff(req,res){
  try{

      const data=await staffSchema.find();
      res.status(200).send(data)
      console.log(data);
  }catch (error){
      res.status(500).send(error)
  }
}

export async function getStaffEdit(req,res) {
  try {
      const {id}=req.params;
      console.log(id);
      const data = await staffSchema.findOne({_id:id})
      console.log(data);
      res.status(200).send(data)
  } catch (error) {
      res.status(400).send(error)
  }
}

export async function deleteStaff(req, res) {
  try {
      const { id } = req.params;
      console.log(id);    

    await staffSchema.deleteOne({_id:id});
     res.status(200).send({msg:"successfully deleted"})
  } catch (error) {
      console.error(error);
      res.status(400).send({ error});
  }
  
}




export async function updateStaff(req,res) {
  try {
      const {id}=req.params;
      console.log(id);
  const {...FormData}=req.body
  await staffSchema.updateOne({_id:id},{$set:{...FormData}})
      res.status(201).send({msg:"updated"})
  } catch (error) {
      res.status(400).send(error)
  }
}



// marks

export async function addMarks(req,res){
  try{
      console.log(req.body);
      const {...FormData} = req.body;

      await marksSchema
      .create({...FormData})
          .then(()=>{
              res.status(200).send({msg:"sucessfully created"})
          })
          .catch((error)=>{
              res.status(400).send({error:error})
          });
  }catch(error){
      res.status(500).send(error)
  }
}