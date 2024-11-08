import React from 'react';
import { motion } from 'framer-motion';

const Feedback = () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit quam. 
    Praesent vehicula nisi nec sem dignissim, non dignissim nunc aliquam. 
    Integer lacinia mi sit amet libero suscipit, et sollicitudin odio elementum. 
    Sed ut magna vitae ante bibendum faucibus. 
    Nullam vitae tortor arcu. Proin id odio nec elit pulvinar gravida. 
    Duis a risus ut magna condimentum bibendum.`;

  const handleReadMore = () => {
    alert('Read More clicked!');
  };

  return (
    <div className="container mx-auto p-6 flex justify-center items-center w-[70vw] xl:mb-[8vw] xl:mt-[8vw]">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-3xl mb-4 font-semibold'>
            WE AIM TO EDUCATE AND INSPIRE - <br />
            <span className='text-[#A0CE4E] font-bold'>Cambridge College.....</span>
          </h1>
          <p className="text-gray-600 text-lg mb-4 ">
            {text.split('. ').slice(0, 7).join('. ')}.
          </p>
          <motion.button
            onClick={handleReadMore}
            className="bg-[#A0CE4E] text-white px-4 py-2 rounded hover:bg-[#536e90] transition duration-400"
            whileHover={{ scale: 1.05 }}
          >
            Read More
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/o.jpg"
            alt="Feedback"
            className="rounded-lg shadow-lg w-full md:w-[36vw] h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Feedback;



