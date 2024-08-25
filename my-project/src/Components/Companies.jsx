import React from 'react';
import { motion } from 'framer-motion';

const Companies = () => {
  return (
    <section className='w-full bg-white py-[50px] flex justify-center items-center p-4 overflow-hidden'>
      <motion.div 
        className='md:max-w-[1100px] m-auto max-w-[400px]'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-center text-xl font-bold text-[#A0CE4E]"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', delay: 0.2 }}
        >
          Trusted by over 25,000 teams around the world
        </motion.h1>
        <motion.p
          className="text-center text-[#A0CE4E] text-2xl py-2"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', delay: 0.22 }}
        >
          Leading companies use the same courses to help their employees keep skills up
        </motion.p>
        <motion.div
          className='flex space-x-4 whitespace-nowrap'
          animate={{ x: ['0%', '-100%'] }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          style={{ display: 'flex', flexWrap: 'nowrap' }}  // Ensure the images stay on a single line
        >
          <div className="flex space-x-4">
            <motion.img 
              src="company1.png" 
              alt="company1" 
              className="w-full mt-8 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src="company2.png" 
              alt="company2" 
              className="w-full inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src="company3.png" 
              alt="company3" 
              className="w-full inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src="company4.png" 
              alt="company4" 
              className="w-full inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
            {/* Duplicate the images to create a loop effect */}
            <motion.img 
              src="company1.png" 
              alt="company1" 
              className="w-full mt-8 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src="company2.png" 
              alt="company2" 
              className="w-full inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src="company3.png" 
              alt="company3" 
              className="w-full inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src="company4.png" 
              alt="company4" 
              className="w-full inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Companies;

