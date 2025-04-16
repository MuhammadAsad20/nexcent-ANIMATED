import React from 'react';
import { motion } from 'framer-motion';

function Action() {
  return (
    <section className="text-black body-font bg-white flex items-center justify-center">
      <div className="container px-5 py-24 mx-auto text-center">
        <motion.h1
          className="sm:text-6xl text-4xl font-bold mb-8"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pellentesque suscipit <br /> fringilla libero eu.
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white bg-lime-600 border-0 py-3 px-10 focus:outline-none hover:bg-lime-700 rounded text-lg font-bold inline-flex items-center justify-center gap-2"
        >
          Get a Demo
          <span className="text-2xl">→</span>
        </motion.button>
      </div>
    </section>
  );
}

export default Action;
