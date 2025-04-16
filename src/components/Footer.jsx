import React from 'react';
import Icon2 from '../assets/Images/Icon2.png';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white body-font">
      <motion.div
        className="container px-5 py-24 mx-auto flex md:items-start items-center md:flex-row flex-col"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <img src={Icon2} alt="Logo Icon" />
            <span className="ml-3 text-3xl font-bold">Nexcent</span>
          </a>
          <p className="mt-2 text-sm">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
          <div className="flex justify-center md:justify-start mt-4">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2 }}
                className="text-gray-500 ml-3 first:ml-0"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {['CATEGORIES', 'CATEGORIES'].map((title, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                {title}
              </h2>
              <nav className="list-none mb-10 space-y-2">
                {['First Link', 'Second Link', 'Third Link', 'Fourth Link'].map((link, i) => (
                  <li key={i}>
                    <a className="hover:text-gray-300 cursor-pointer">{link}</a>
                  </li>
                ))}
              </nav>
            </div>
          ))}

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-md mb-3">Stay up to date</h2>
            <div className="flex justify-center md:justify-start">
              <div className="relative w-72">
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-slate-700 bg-opacity-50 
                  focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 
                  text-base outline-none py-2 pl-4 pr-10 transition-colors duration-200 ease-in-out"
                  placeholder="Your email address here"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:text-lime-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10l19-7-7 19-4-8-8-4z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
