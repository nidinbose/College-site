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

const Site = () => {
  

    return (
        <div>
            <Navbar />
            <Start />
            <Companies />
            <Achievement />
            <Categories />
            <Courses />
            <Slide1 />
            <Gallery />
            <Footer />
        </div>
    );
}

export default Site;