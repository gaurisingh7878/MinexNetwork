import React from "react";
import { motion } from "framer-motion";

const CoinsCardSection = () => {
  return (
    <section className="bg-linear-to-r from-green-600 to-green-950 text-white px-6 py-16 md:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Minex Coin & xUSD Stablecoin
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          The economic engine of the Minex Network — powering fast, secure transactions and offering a stable on-chain currency for real-world utility and decentralized finance.
        </p>

        <button
          className="relative px-10 py-3.5 overflow-hidden group bg-gradient-to-r from-green-600 to-green-800 rounded hover:bg-gradient-to-r hover:from-green-800 hover:to-green-600 text-white transition-all ease-out duration-300"
        >
          <span
            className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"
          ></span>
          <span className="relative text-xl font-semibold">Whitepaper</span>
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row items-center md:gap-0 gap-4 justify-center ">
        {/* Minex Coin Card */}
       
            {/* xUSD Stablecoin Card */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="w-full max-w-md mx-auto  flex flex-col justify-between"
>
  <div className="relative w-full rounded-2xl h-[30rem] overflow-hidden shadow-2xl">
    {/* Background Video */}
    <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/src/Video/Minex3.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Foreground Content */}
    <div className="relative z-10 p-4 sm:p-6 ">
      <div className="flex justify-center mb-4">
        <img
          src="/src/Imges/Minex Network.webp"
          alt="xUSD Stablecoin"
          className="shadow-2xl shadow-emerald-500/70 rounded-full w-20 h-20 sm:w-24 sm:h-24"
        />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-center mb-3">
        xUSD Stablecoin
      </h3>

      <p className="text-gray-400 text-center text-sm sm:text-base mb-4">
        xUSD is a decentralized, overcollateralized stablecoin pegged to the U.S. dollar, designed for payments, trading, and DeFi within the Minex ecosystem.
      </p>

     <div className="text-sm text-gray-300 space-y-2 mb-6">
              <p>Total Supply: <span className="text-white">100,000,000 MNX</span></p>
              <p>Staking Rewards: <span className="text-white">Enabled</span></p>
              <p>Current Value: <span className="text-white">$0.032 per coin</span></p>
              <p>Utility: <span className="text-white">Gas | Governance | Rewards</span></p>
            </div> <div className="text-xs sm:text-sm text-gray-300 space-y-2 mb-4">
        
      </div>

      <button className="w-full border border-gray-400 py-2 rounded-full hover:border-white hover:text-white transition">
        Learn more
      </button>
    </div>
  </div>
</motion.div>

        {/* xUSD Stablecoin Card */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="w-full max-w-md mx-auto flex flex-col justify-between"
>
  <div className="relative w-full rounded-2xl h-[30rem] overflow-hidden shadow-2xl">
    {/* Background Video */}
    <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/src/Video/Minex4.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Foreground Content */}
    <div className="relative z-10 p-4 sm:p-6 ">
      <div className="flex justify-center mb-4">
        <img
          src="/src/Imges/Minex Network.webp"
          alt="xUSD Stablecoin"
          className="shadow-2xl shadow-emerald-500/70 rounded-full w-20 h-20 sm:w-24 sm:h-24"
        />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-center mb-3">
        xUSD Stablecoin
      </h3>

      <p className="text-gray-400 text-center text-sm sm:text-base mb-4">
        xUSD is a decentralized, overcollateralized stablecoin pegged to the U.S. dollar, designed for payments, trading, and DeFi within the Minex ecosystem.
      </p>

      <div className="text-xs sm:text-sm text-gray-300 space-y-2 mb-4">
        <p>
          Collateral Type: <span className="text-white">MNX-backed</span>
        </p>
        <p>
          Stability Mechanism:{" "}
          <span className="text-white">Algorithmic & Reserve-backed</span>
        </p>
        <p>
          Use Cases:{" "}
          <span className="text-white">Payments, Lending, Trading</span>
        </p>
        <p>
          Status: <span className="text-white">In Development</span>
        </p>
      </div>

      <button className="w-full border border-gray-400 py-2 rounded-full hover:border-white hover:text-white transition">
        Learn more
      </button>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default CoinsCardSection;
