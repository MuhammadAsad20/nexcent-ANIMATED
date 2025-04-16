import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Importing useInView hook for animations

import Logo1 from "../assets/Images/Logo1.png";
import Logo2 from "../assets/Images/Logo2.png";
import Logo3 from "../assets/Images/Logo3.png";
import Logo4 from "../assets/Images/Logo4.png";
import Logo5 from "../assets/Images/Logo5.png";
import Logo6 from "../assets/Images/Logo6.png";

const Statistics = () => {
  const icons = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo3];
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Only trigger once when the section comes into view

  return (
    <section className="text-gray-600 body-font" ref={ref}>
      <div className="container px-5 py-24 mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Our Clients
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed font-medium text-base">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        {/* Icons Grid with Animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6 text-center">
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              className="border-2 border-gray-200 px-4 py-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }} // Start animation with low opacity and slide from below
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} // Trigger animation when section is in view
              transition={{ delay: index * 0.2, duration: 0.5 }} // Stagger the animations for each logo
            >
              <img
                src={icon}
                alt={`logo-${index + 1}`}
                className="w-14 h-14 mx-auto object-contain transition-transform transform hover:scale-105"
                // Adding hover scale effect
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
