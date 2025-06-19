import React from "react";

const CloudMiningSection = () => {
  return (
    <div className="bg-[#071205]  text-white py-12 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left - Mobile App Preview */}
      <div className="w-full lg:w-1/2 flex justify-center relative animate-fade-in-up">
        <img
          src="/src/Imges/Mobile.png" // Replace with your image path
          alt="Mobile App Preview"
          className="max-w-[300px] md:max-w-[400px]"
        />
      </div>

      {/* Right - Text & Stats */}
      <div className="w-full lg:w-1/2 animate-fade-in-up">
        <h2 className="text-3xl md:text-5xl bg-gradient-to-r from-green-500 to-amber-600 bg-clip-text text-transparent font-bold leading-tight mb-6">
          Unlock the <br /> benefits of secure <br />
          <span className=" bg-gradient-to-r from-green-500 to-amber-600 bg-clip-text text-transparent">cloud mining with Minex Network.</span>
        </h2>

        <p className="text-white mb-6 text-base md:text-lg leading-relaxed">
          Join Minex Network today and be part of a revolutionary blockchain ecosystem that leverages cloud mining,
          tokenization, and decentralized finance to empower users and businesses worldwide.
        </p>

        <button className="bg-gradient-to-r from-green-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-full mb-8 transition transform hover:scale-105">
          Download the app
        </button>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 text-center text-sm md:text-base">
          <div className="bg-green-500/75 rounded-xl py-6 px-4 border border-neutral-800 hover:shadow-[0_0_20px_#1f2937] transition">
            <p className="text-white text-xl font-bold">1,500,000+</p>
            <p className="text-white">Active Users</p>
          </div>
          <div className="bg-green-500/75 rounded-xl py-6 px-4 border border-neutral-800 hover:shadow-[0_0_20px_#1f2937] transition">
            <p className="text-white text-xl font-bold">50+</p>
            <p className="text-white">Partnered Projects</p>
          </div>
          <div className="bg-green-500/75 rounded-xl py-6 px-4 border border-neutral-800 hover:shadow-[0_0_20px_#1f2937] transition">
            <p className="text-white text-xl font-bold">100%</p>
            <p className="text-white">Encrypted Data</p>
          </div>
          <div className="bg-green-500/75 rounded-xl py-6 px-4 border border-neutral-800 hover:shadow-[0_0_20px_#1f2937] transition">
            <p className="text-white text-xl font-bold">CISA+</p>
            <p className="text-white">Security Certification</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudMiningSection;
