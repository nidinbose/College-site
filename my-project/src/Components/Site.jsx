import react from 'react'
import Navbar from '../additionals/Navbar';
import Start from './Start';
import Companies from './Companies';
import Achievement from './Achevements';
import Courses from './Courses';
// import Over from './Overview';
import Categories from './Category';
import Slide1 from './CollegeView';
import Gallery from './Gallary';
import FeedBack from './Feedback';
import Footer from './Footer';


const Site =()=>{
    return(
        <div>
      

      <div>
      <Navbar/>
      <Start/>
      <Companies/>
      <Achievement/>
      <Categories/>
      <Courses/>
      <Slide1/>
      <Gallery/>
      {/* <FeedBack/> */}
      <Footer/>

     

      </div>

            
        </div>
    )
}

export default Site;