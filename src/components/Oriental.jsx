import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";  // Import Framer Motion for animations
import rafiki from '../assets/Images/rafiki.png';

const Oriental = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Check if the section is in view

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
        {/* Image Section with Animation */}
        <motion.div
          ref={ref}  // Adding reference to track visibility
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} // Animate when in view
          transition={{ duration: 1 }}
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={rafiki}
          />
        </motion.div>

        {/* Text Content with Animation */}
        <motion.div
          ref={ref}  // Adding reference to track visibility
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }} // Animate when in view
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            The unseen of spending three years at Pixelgrade
            <br className="hidden lg:inline-block" />
            years at Pixelgrade
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <div className="flex justify-center">
            <motion.button
              className="inline-flex text-white bg-lime-600 border-0 py-3 px-8 focus:outline-none hover:bg-lime-700 rounded text-lg"
              whileHover={{ scale: 1.05 }}  // Hover effect to scale button
              whileTap={{ scale: 0.95 }}   // Tap effect to shrink button
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Oriental;
