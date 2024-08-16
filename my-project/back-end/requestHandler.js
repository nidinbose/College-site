
import userSchema from "./models/user.model.js"
import bcrypt from 'bcrypt'
import pkg from 'jsonwebtoken'
import nodemailer from 'nodemailer'



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

  const {name,username,phone,password,cpassword,email,role}=req.body

  if(!(name&&username&&phone&&password&&cpassword&&email&&role))
      return res.status(404).send("fields are empty")

  if(password!==cpassword)
      return res.status(404).send("password not matched")

bcrypt.hash(password,10).then(async(hpassword)=>{
  userSchema.create({name,username,phone,password:hpassword,email,role,otp:""}).then(()=>{
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




export async function Home(req,res){
  const {id,username}=req.user
  console.log(req.user);
  res.status(200).send({username})
}





export async function Forget(req,res){
  const {email}=req.body;
  console.log(email);
const data=await userSchema.findOne({email:email});
if(!data)
  return res.status(400).send({msg:"user not found"})

const otpLength = 6;
// Generate a random numeric OTP with exactly 6 digits
const otp = Math.floor(100000 + Math.random() * 900000);
console.log(otp);
//   update otp in data base code here
const info = await transporter.sendMail({
  from: 'peterspidy5@gmail.com', // sender address
  to: "ajithaji9404@gmail.com", // list of receivers
  subject: "OTP", // Subject line
  text: "your valid otp", // plain text body
  html: `<b>${otp}</b>`, // html body
});

console.log("Message sent: %s", info.messageId);



}