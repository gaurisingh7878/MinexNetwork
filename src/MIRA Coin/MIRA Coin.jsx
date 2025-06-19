import React from "react";
import { motion } from "framer-motion";

const MinexCoinPage = () => {
  return (
    <div className="bg-[#071205] text-white py-33 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side (Logo + Title) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
            <img src="/src/Imges/Minex Network.webp" alt="Minex Logo" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl bg-gradient-to-r from-green-500 to-amber-600 bg-clip-text text-transparent font-semibold">
              Minex Network
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Powering the Future of Decentralized Infrastructure
            </p>
          </div>
        </motion.div>

        {/* Button */}
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

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 bg-green-500/75 rounded-xl border border-white/10 p-6 text-sm sm:text-base text-gray-300"
      >
        <p>
          <span className="font-bold text-white">Notice:</span> Minex Network is actively working on regulatory compliance and legal structuring in Switzerland. During this process, token utility details and governance frameworks may evolve. Stay connected through our official channels for the latest announcements regarding MNX and AUX tokens.
        </p>
      </motion.div>
    </div>
  );
};

export default MinexCoinPage;
