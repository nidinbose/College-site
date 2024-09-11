import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const photos = [
    {  src: 'https://t4.ftcdn.net/jpg/06/30/76/11/360_F_630761173_Hkeqf7J3DYfICjQQaMkTiSpCOK7XOq1q.jpg', large: true },
    {  src: 'https://images.i3c.tech/2021/07/28/fd3d81396e8942d782e2d9ed0003a7be.jpg', large: false },
    {  src: 'https://images.i3c.tech/2021/07/28/4499bce26f9e435dacc511101c02662f.jpg', large: false },
    {  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1haOXlSx8F2A8Ijnk_o4b9qMRRkgHULSmmfAlsSSsVH7yQ2GqpGJVa3mDWjDrc5f3ak&usqp=CAU', large: false },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIry1w7nZFd-_Jjl_3GaMVZKMcNp9f_gaj_o4tutovitXtmb8BrBDKY1dd0WJLooUylU&usqp=CAU', large: false },
    {  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Q66NXzx6xDZagys9T7AP3sZ7ZMej6mZM4A&s', large: false },
    {  src: 'https://images.i3c.tech/2021/07/28/9f03326b53f84578bdc7a05c5572b878.jpg', large: true },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRub-rWcXILLdXrjKXdYQNArSNhpOJK2rgk0TCI4CC3ZbjM0bL4kZfvjqIFIvA7rOzH0&usqp=CAU', large: false },
    {  src: 'https://campusways.com/wp-content/uploads/2022/03/acharya-14-bg_11zon-1024x593.jpeg.webp', large: false },
    {  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTD8D_zjeccCG-1a7se_GEesRy04HAO14uoRQ1PSE4dW2bYkseZQghXYFqwweCh9f4hO4&usqp=CAU', large: false },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            className={`relative ${
              photo.large ? 'md:col-span-2 md:row-span-2' : ''
            } overflow-hidden rounded-lg`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-full">
              <img
                src={photo.src}
                alt={`Photo ${photo.id}`}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center text-white font-bold text-xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {photo.id}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

