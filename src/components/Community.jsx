import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const bgGlowVariant = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1.5,
    opacity: 0.2,
    transition: { duration: 1.5, ease: 'easeOut' },
  },
};

const Community = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cards = [
    {
      text: 'Creating Streamlined Safeguarding Processes with OneRen',
    },
    {
      text: 'What are your safeguarding responsibilities and how can you manage them?',
    },
    {
      text: 'Revamping the Membership Model with Triathlon Australia',
    },
  ];

  return (
    <section className="relative overflow-hidden text-gray-600 body-font bg-white dark:bg-gray-900 dark:text-gray-100">
      {/* Background Glow Animation */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={bgGlowVariant}
        className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] bg-lime-300 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container px-5 py-10 mx-auto flex flex-col gap-30 relative z-10" ref={ref}>
        {/* Text Content */}
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900 dark:text-white relative after:block after:w-16 after:h-[3px] after:bg-lime-500 after:mx-auto after:mt-2">
            Caring is the new marketing
          </h1>
          <p className="w-[90%] md:w-[60%] lg:w-[45%] mx-auto leading-relaxed text-sm md:text-base text-gray-700 dark:text-gray-300">
            The Nexcent blog is the best place to read about the latest membership insights,
            trends and more. See who's joining the community, read about how our community
            are increasing their membership income and lots more.
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap gap-8 justify-center text-center">
          {cards.map((card, i) => (
            <motion.article
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-[22%] px-6 py-6 border-l-2 border-gray-200 dark:border-gray-700 border-opacity-60 min-h-[200px] flex flex-col justify-between transition transform hover:-translate-y-1 hover:shadow-lg duration-300 bg-white dark:bg-gray-800 rounded"
            >
              <p className="leading-relaxed font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                {card.text}
              </p>
              <div className="flex justify-center">
                <a
                  className="text-lime-600 hover:text-lime-800 transition-colors duration-300 font-semibold text-lg inline-flex items-center"
                  href="#"
                >
                  Readmore <span className="text-2xl ml-1">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
