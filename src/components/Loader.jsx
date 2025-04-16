import React from 'react';
import { motion } from 'framer-motion';
import member from '../assets/Images/member.png';
import payment from '../assets/Images/payment.png';
import Group from '../assets/Images/Group.png';
import wallet from '../assets/Images/wallet.png';

const Loader = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex justify-evenly flex-col md:flex-row items-start md:items-center gap-10">
        {/* Heading section */}
        <div>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
            Helping a local
            <br />
            <span className="text-lime-600">business reinvent itself</span>
          </h1>

          <h2 className="text-sm tracking-widest font-medium title-font mb-1">
            We reached here with our hard work and dedication
          </h2>
        </div>

        {/* Store buttons: 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Common styles for all buttons */}
          {[
            { img: member, value: '2,245,341', label: 'Members' },
            { img: Group, value: '46,328', label: 'Clubs' },
            { img: payment, value: '828,867', label: 'Event Bookings' },
            { img: wallet, value: '1,926,436', label: 'Payments' },
          ].map((item, index) => (
            <motion.button
              key={index}
              className="bg-gray-100 py-4 px-5 rounded-lg flex items-center hover:bg-gray-200 min-w-[250px] min-h-[100px] transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.95 }}   // Shrink button on tap
            >
              <img
                src={item.img}
                className="w-12 h-12 object-contain"
                alt={item.label}
              />
              <span className="ml-4 flex flex-col items-start leading-none">
                <span className="title-font text-2xl font-bold">{item.value}</span>
                <span className="text-sm text-gray-600 mb-1">{item.label}</span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loader;
