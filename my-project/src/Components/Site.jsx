import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../additionals/Navbar';
import Start from './Start';
import Companies from './Companies';
import Achievement from './Achevements';
import Courses from './Courses';
import Categories from './Category';
import Slide1 from './CollegeView';
import Gallery from './Gallary';
import Footer from './Footer';
import Feedback from './Feedback';
// import Overview from './Overview';

const Site = () => {
  

    return (
        <div>
            <Navbar />
            <Start />
            <Feedback/>
            <Companies />
            <Achievement />
            <br />
            <br />
            <Courses />
            <Categories />
           
            <Slide1 />
            <Gallery />
            <Footer />
            {/* <Overview/> */}
        </div>
    );
}

export default Site;
