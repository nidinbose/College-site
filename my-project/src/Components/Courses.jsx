import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is properly imported

const Corses = () => {
  const cards = [
    { id: 1, title: 'Computer Engineering', content: 'Final fees with all excluded exam fee included food and accommodation.', image: '/images/11.jpeg', amount: 'INR: 4,50,000' },
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
    <section className="w-full bg-white py-10">
      <div className="w-full max-w-full mx-auto relative">
        <h1 className='text-4xl font-bold mb-12 text-center'>
          Preferred <span className='text-[#A0CE4E]'>Courses</span>
        </h1>

        {/* Scroll buttons */}
        <button 
          onClick={scrollLeft} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white font-bold text-black p-2 rounded-full hover:bg-blue-700"
        >
          &lt;
        </button>
        <button 
          onClick={scrollRight} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black font-bold p-2 rounded-full hover:bg-blue-700"
        >
          &gt;
        </button>

        <div 
          ref={carouselRef} 
          className="flex space-x-14 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory touch-pan-x scrollbar-hide xl:ml-[10vw]"
        >
          {cards.map(card => (
            <motion.div 
              key={card.id} 
              className="min-w-[250px] md:min-w-[300px] xl:w-[200px] xl:h-[58] bg-white/30 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 h-auto cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-[35vh] object-cover rounded-t-lg"
              />
              <h2 className="text-lg font-bold mt-4 mb-2 text-[#A0CE4E]">{card.title}</h2>
              <p className="text-black/80 text-sm mb-2">{card.content}</p>
              <p className="font-bold mt-4 text-[#A0CE4E]">{card.amount}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Corses;
