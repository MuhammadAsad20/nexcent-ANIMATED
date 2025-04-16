import React from 'react';
import { motion } from "framer-motion";
import illustration from '../assets/Images/Illustration.png';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Main = () => {
  const title = "Lessons and insight";

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        
          {/* Animated Heading */}
          <motion.h1
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="title-font sm:text-7xl text-3xl mb-4 font-medium text-gray-900"
>
  Lessons and insight
  <br className="hidden lg:block" />
  <span className="text-lime-600">from 8 years</span>
</motion.h1>


          {/* Paragraph */}
          <p className="mb-8 leading-relaxed">
            Where to grow your business as a photographer: site or social media?
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-lime-600 border-0 py-3 px-8 focus:outline-none hover:bg-lime-700 rounded text-lg">
              Register
            </button>
          </div>
        </div>

        {/* Image Animation */}
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={illustration}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
