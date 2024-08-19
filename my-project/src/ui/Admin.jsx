import React from "react";
import Start from "../Components/Start";
import Categories from "../Components/Category";
import Addss from "../Components/Admin/AddSection";
import Navbar from "../additionals/Navbar";
import StudentView from "../Components/StudentView";
import StaffView from "../Components/StaffView";


const Admin = ()=>{
    
    return(
        <div>
            <Navbar/>
               <Addss/>
            <Start/>
            <Categories/>
            <StudentView/>
            <StaffView/>
         
        </div>
    )
}

export default Admin