import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const HeroSection = () => {
  return (
    <div className="relative bg-[#0f0f0f] min-h-screen flex flex-col items-center justify-center text-white text-center px-4 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/Video/13161043_3840_2160_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Logo with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="rounded-full mt-13 ">
            <img
              src="/src/Imges/Minex Network.webp"
              alt="MIRA Logo"
              className="w-40 h-40 mx-auto"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl bg-gradient-to-r from-green-400 to-amber-600 bg-clip-text text-transparent md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Minex Network
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl mb-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Experience the Future of Blockchain Technology
        </motion.p>

        {/* Button */}
        <div>
          <button className="fancy-button">
            P L A Y
            <div id="clip">
              <div id="leftTop" className="corner"></div>
              <div id="rightBottom" className="corner"></div>
              <div id="rightTop" className="corner"></div>
              <div id="leftBottom" className="corner"></div>
            </div>
            <span id="rightArrow" className="arrow"></span>
            <span id="leftArrow" className="arrow"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
