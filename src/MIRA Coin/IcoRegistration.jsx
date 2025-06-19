import React from 'react';
import { motion } from "framer-motion";

const IcoRegistration = () => {
  return (
    <div className="bg-[#071205] flex items-center justify-center px-4 py-12">
      <div className="relative w-full max-w-2xl h-[30rem] rounded-2xl overflow-hidden">
        
        {/* Background Video */}
        <video
          className="absolute  w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/src/Video/Minex3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional Overlay for readability */}
        <div className="absolute inset-0  z-0"></div>

        {/* Foreground Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center justify-center h-full p-6 md:p-10 text-center text-white"
        >
          <h4 className="text-xl md:text-3xl font-bold mb-4">
            Join the Minex Network <br className="hidden md:block" /> ICO Whitelist
          </h4>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
            Be among the first to participate in the MNX Coin ICO. <br />
            Get early access to purchase MNX at the lowest tier price.
          </p>

          <button className="bg-lime-400 hover:bg-lime-500 text-white py-2 px-6 rounded-full transition duration-300">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default IcoRegistration;
