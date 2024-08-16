import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    '/images/a.avif',
    '/images/a.avif',
    '/images/a.avif',
    '/images/a.avif',
    '/images/a.avif',
    '/images/a.avif',
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
