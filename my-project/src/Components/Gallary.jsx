import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    '/images/g.webp',
    '/images/h.webp',
    '/images/i.avif',
    '/images/j.jpg',
    '/images/k.jpg',
    '/images/l.jpeg',
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
