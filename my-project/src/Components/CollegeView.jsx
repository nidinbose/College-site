import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/images/a.avif',
  '/images/a.avif',
  '/images/a.avif',
  '/images/a.avif',  
];

const Slide1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full relative max-w-screen-lg mx-auto">
      <motion.div
        className="flex"
        initial={{ x: '-100%' }}
        animate={{ x: `${-currentIndex * 100}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="min-w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto max-w-full" />
          </motion.div>
        ))}
      </motion.div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide1;
