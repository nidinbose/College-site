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


const App=()=>{
    return(
      <BrowserRouter>
      
      <Routes>


      <Route path='/' Component={Site}/>
      <Route path='/login' Component={Login}/>
      <Route path='/signup' Component={Signup}/>
      <Route path='/students' Component={Students}/>
      <Route path='/staff' Component={Staff}/>
      <Route path='/admin' roles={['admin']}  Component={Admin}/>
      <Route path='/addstudents' Component={AddStudents}/>
      {/* <Route path='/addstudents' Component={AddStudents}/> */}
      <Route path='/addstaff' Component={AddStaff}/>
      <Route path='/addadmin' Component={AddAdmin}/>
    
     

      </Routes>
      
      </BrowserRouter>
    )
}
export default App;


