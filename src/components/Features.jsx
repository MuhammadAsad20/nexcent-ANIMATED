import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import Membership from '../assets/Images/Membership.png';
import BuildingIcon from '../assets/Images/BuildingIcon.png';
import GroupIcon from '../assets/Images/GroupIcon.png';

const Features = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Manage your entire community <br /> in a single system
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {/* Card 1 */}
          <motion.div
            className="xl:w-1/3 md:w-1/2 p-4"
            whileHover={{ scale: 1.05 }} // Smooth hover scale effect
            transition={{ duration: 0.3 }}
          >
            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <img src={Membership} alt="" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Membership Organisations
              </h2>
              <p className="leading-relaxed text-base">
                Our membership management software provides full automation of membership renewals and payments.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="xl:w-1/3 md:w-1/2 p-4"
            whileHover={{ scale: 1.05 }} // Smooth hover scale effect
            transition={{ duration: 0.3 }}
          >
            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <img src={BuildingIcon} alt="" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                National Associations
              </h2>
              <p className="leading-relaxed text-base">
                Our membership management software provides full automation of membership renewals and payments.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="xl:w-1/3 md:w-1/2 p-4"
            whileHover={{ scale: 1.05 }} // Smooth hover scale effect
            transition={{ duration: 0.3 }}
          >
            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <img src={GroupIcon} alt="" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Clubs And Groups
              </h2>
              <p className="leading-relaxed text-base">
                Our membership management software provides full automation of membership renewals and payments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
