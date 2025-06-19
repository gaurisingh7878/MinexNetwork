import React from "react";
import { motion } from "framer-motion";

const Lumira = () => {
  return (
    <div className="bg-[#071205] h-[40rem] text-white py-33 px-4 sm:px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
            <img src="/src/Imges/Minex Network.webp" alt="Lumira Logo" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl bg-gradient-to-r from-green-500 to-amber-600 bg-clip-text text-transparent font-semibold">Lumira</h1>
            <p className="text-white text-sm sm:text-base">
              A Stable Digital Currency Engineered for Trust and Scalability
            </p>
          </div>
        </motion.div>

        {/* Right Button */}
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

      {/* Disclaimer Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 bg-green-500/75 rounded-xl border border-white/10 p-6 text-sm sm:text-base text-gray-300"
      >
        <p>
          <span className="font-bold text-white">Disclaimer:</span> The information
          presented here outlines the early concept of the Lumira Stable Coin and its
          proposed role within the broader Minex Network. This content is subject to
          change as we finalize technical architecture, regulatory considerations,
          and legal structuring. Please follow official updates for the most current
          developments.
        </p>
      </motion.div>
    </div>
  );
};

export default Lumira;
