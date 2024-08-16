import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const Corses = () => {
  const cards = [
    { id: 1, title: 'Course 1', content: 'This is the first course hsabjsakasjcsamklasmxkl.', image: 'path-to-image1.jpg', amount: '$99' },
    { id: 2, title: 'Course 2', content: 'This is the second course.', image: 'path-to-image2.jpg', amount: '$149' },
    { id: 3, title: 'Course 3', content: 'This is the third course.', image: 'path-to-image3.jpg', amount: '$199' },
    { id: 4, title: 'Course 4', content: 'This is the fourth course.', image: 'path-to-image4.jpg', amount: '$249' },
    { id: 5, title: 'Course 5', content: 'This is the fifth course.', image: 'path-to-image5.jpg', amount: '$299' },
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
      <div className="w-full max-w-6xl mx-auto relative">
        {/* Scroll buttons */}
        <button 
          onClick={scrollLeft} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
        >
          &lt;
        </button>
        <button 
          onClick={scrollRight} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
        >
          &gt;
        </button>

        <div 
          ref={carouselRef} 
          className="flex space-x-8 overflow-x-hidden overflow-y-hidden scrollbar-hide snap-x snap-mandatory"
        >
          {cards.map(card => (
            <motion.div 
              key={card.id} 
              className="min-w-[300px] bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 h-[400px]"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{card.title}</h2>
              <p className="text-gray-700 mt-2">{card.content}</p>
              <p className="text-blue-600 font-bold mt-4">{card.amount}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Corses



