import react from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Site from './Components/Site';

import Signup from './Login.Signup/Signup';
import Login from './Login.Signup/Login';
import Students from './ui/Students';
import Staff from './ui/Staff';
import Admin from './ui/Admin';



const App=()=>{
    return(
      <BrowserRouter>
      
      <Routes>


      <Route path='/' Component={Site}/>
      <Route path='/login' Component={Login}/>
      <Route path='/signup' Component={Signup}/>
      <Route path='/students' Component={Students}/>
      <Route path='/staff' Component={Staff}/>
      <Route path='/admin' Component={Admin}/>

      </Routes>
      
      </BrowserRouter>
    )
}
export default App;


