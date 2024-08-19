import React,{useEffect} from "react";
import Navbar from "../additionals/Navbar";
import Start from "../Components/Start";
import Asb from "../additionals/Staff/Asb";
import StaffSA from "../Components/Staff/StaffSA";


const Staff = ()=>{
  
    return(
        <div>
          <Navbar/>
          <StaffSA/>
          <Asb/>
          <Start/>
        </div>
    )
}

export default Staff