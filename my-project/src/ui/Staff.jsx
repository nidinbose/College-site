import React,{useEffect} from "react";
import Navbar from "../additionals/Navbar";
import Start from "../Components/Start";
import Asb from "../additionals/Staff/Asb";


const Staff = ()=>{
  
    return(
        <div>
          <Navbar/>
          <Asb/>
          <Start/>
        </div>
    )
}

export default Staff