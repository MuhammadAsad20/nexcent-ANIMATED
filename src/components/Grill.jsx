import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Importing useInView
import pana from '../assets/Images/pana.png';

const Grill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Check if the section is in view

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
        {/* Image Section with Animation */}
        <motion.div
          ref={ref}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move the image from below
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} // Fade and slide into view
          transition={{ duration: 1 }} // Smooth transition
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={pana}
          />
        </motion.div>

        {/* Text Content with Animation */}
        <motion.div
          ref={ref}
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          initial={{ opacity: 0, x: -50 }} // Start with opacity 0 and slide from the left
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }} // Fade and slide into view
          transition={{ delay: 0.3, duration: 1 }} // Slight delay and smooth transition
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            How to design your site footer like we did
            <br className="hidden lg:inline-block" />
            we did
          </h1>
          <p className="mb-8 leading-relaxed">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
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

export default Grill;
