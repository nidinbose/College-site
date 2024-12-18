import react from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Site from './Components/Site';
import Addss from './Components/Admin/AddSection';
import Signup from './Login.Signup/Signup';
import Login from './Login.Signup/Login';
import Students from './ui/Students';
import Staff from './ui/Staff';
import Admin from './ui/Admin';
import AddStudents from './additionals/Admin/AddStudent';
import AddAdmin from './additionals/Admin/AddAdmin';
import AddStaff from './additionals/Admin/AddStaff';
import EditStudents from './additionals/Admin/EditStudent';
import ViewStudent from './additionals/Students/ViewStudent';
import StudentView from './Components/StudentView';
import StaffView from './Components/StaffView';
import StaffSA from './Components/Staff/StaffSA';
import SSignup from './Components/Staff/Slogin';
import ViewStaff from './additionals/Staff/ViewStaff';
import StudentsEdit from './additionals/Students/StudentEdit';
import EditStaff from './additionals/Staff/EditStaff';
import ForgotEmail from './Login.Signup/ForgotPassword/ForgotEmail';
import ViewStudent1 from './Components/Students/ViewsStudentp';
import ViewStudentt from './Components/Students/ViewsStudentp';

import Feedback from './Components/Feedback';
import Gallery from './Components/Gallary';
import Corses from './Components/Courses';
import AddMarks from './Components/Marks';
import ResetPassword from './Login.Signup/ForgotPassword/Passforget';
import ViewMark from './additionals/Staff/ViewMark';
import AddMark from './additionals/Students/AddMark';
import Navbar from './additionals/Navbar';
import Admissions from './Components/Admissions';
import AddMarksForm from './Components/Marks';
import StudentViewSD from './additionals/Staff/StudentViewSD';
import Marklist from './additionals/Admin/Marklist';
import Footer from './Components/Footer';
import FeeStructure from './additionals/Students/FeeStructure';
import Notifications from './additionals/Students/Noifications';




const App=()=>{
    return(
      <BrowserRouter>
    <Navbar/>
      <Routes>


      <Route path='/' Component={Site}/>

      <Route exact path='/login' Component={Login}/>
      <Route path='/students' Component={Students}/>
      <Route path='/staff' Component={Staff}/>
      <Route path='/admin'  Component={Admin}/>
      <Route path='/signup' Component={Signup}/>
      <Route path='/forgot-password' Component={ForgotEmail}/>
      <Route path='/resetpassword' Component={ResetPassword}/>
      <Route path='/ssignup' Component={SSignup}/>
     
      <Route path='/addstudents' Component={AddStudents}/>
     <Route path='/addstaff' Component={AddStaff}/>
      <Route path='/addadmin' Component={AddAdmin}/>
      <Route path='/vstudent' Component={StudentView}/>
      <Route path='/vstaff' Component={StaffView}/>
      <Route path='/addmarks' Component={AddMarksForm}/>
      <Route path='/getmarks/:id' Component={ViewMark}/>

      <Route path='/editstudents/:id' Component={EditStudents}/>
      <Route path='/view/:id' Component={ViewStudent}/>
      {/* <Route path='/view1/:id' Component={ViewStudentt}/> */}
      <Route path='/views/:id' Component={ViewStaff}/>
      <Route path='/editstudent/:id' Component={StudentsEdit}/>
      <Route path='/editstaff/:id' Component={EditStaff}/>
         <Route path='/feedback' Component={Feedback}/>
      <Route path='/gallary' Component={Gallery}/>
      <Route path='/courses' Component={Corses}/>
      {/* <Route path='/addmark' Component={AddMark}/> */}
      <Route path='/admissions' Component={Admissions}/>

      <Route path='/studentviewsd' Component={StudentViewSD}/>
      <Route path='/marklist' Component={Marklist}/>
      <Route path='/fees' Component={FeeStructure}/>
      <Route path='/notify' Component={Notifications}/>





     

      </Routes>
      <Footer/>
      </BrowserRouter>
    )
}
export default App;


