import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css'; 
import '../Components/css/Courses.css'

const Corses = () => {
  const cards = [
    { id: 1, title: 'Computer Engineering', content: 'Final fees with all excluded exam fee included food and accommodation.', image: 'https://nietm.in/wp-content/uploads/2022/11/CSE2.png', amount: 'INR: 4,50,000' },
    { id: 2, title: 'Mechanical Engineering', content: 'Final fees with all excluded exam fee included food and accommodation.', image: '/images/22.jpg', amount: 'INR: 5,00,000' },
    { id: 3, title: 'Civil Engineering', content: 'Final fees with all excluded exam fee included food and accommodation.', image: '/images/33.jpg', amount: 'INR: 4,00,000' },
    { id: 4, title: 'Electrical Engineering', content: 'Final fees with all excluded exam fee included food and accommodation.', image: '/images/44.jpg', amount: 'INR: 3,50,000' },
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section 
      className="w-full bg-cover bg-center py-10" 
      style={{ backgroundImage: `url('https://img.freepik.com/free-vector/gradient-colorful-abstract-background-modern-design_677411-1552.jpg')` }}
    >
      <div className="w-full max-w-full mx-auto relative px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Preferred <span className="text-[#A0CE4E]">Courses</span>
        </h1>

        {/* Scroll buttons */}
        <button 
          onClick={scrollLeft} 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#A0CE4E] text-center font-bold text-white p-2 h-10  hover:bg-[#A0CE4E] z-10"
        >
          &lt;
        </button>
        <button 
          onClick={scrollRight} 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#A0CE4E] text-center font-bold text-white p-2 h-10  hover:bg-[#A0CE4E] z-10"
        >
          &gt;
        </button>

        <div 
          ref={carouselRef} 
          className="flex space-x-6 md:space-x-8 lg:space-x-10 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory touch-pan-x scrollbar-hide"
        >
          {cards.map(card => (
            <motion.div 
              key={card.id} 
              className="snap-start flex-shrink-0 min-w-[280px] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[450px] bg-white/10 p-4 hover:border border-[#A0CE4E] hover:shadow-lg transition-shadow duration-300 cursor-pointer "
              // whileHover={{ scale: 1.05 }}
            >
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-[200px] sm:h-[220px] md:h-[250px] lg:h-[300px] object-cover"
              />
              <h2 className="text-lg font-bold mt-4 mb-2 text-[#A0CE4E]">{card.title}</h2>
              <p className="text-white/50 text-sm mb-2">{card.content}</p>
              <p className="font-bold mt-4 text-[#A0CE4E]">{card.amount}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Corses;

