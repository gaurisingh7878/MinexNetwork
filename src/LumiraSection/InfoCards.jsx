import React from "react";

const InfoCards = () => {
  return (
    <div className="bg-[#071205] md:-mt-50 text-white flex flex-col md:flex-row items-center justify-center gap-6 p-6">
      {/* Card 1 */}
      <div className="bg-green-500/75 p-8 rounded-2xl shadow-lg border border-neutral-800 w-full md:w-[40rem] hover:scale-[1.02] hover:shadow-[0_0_30px_#1f2937] transition duration-500 ease-in-out">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          About Minex Network
        </h2>
        <div className="h-[1px] w-full bg-green-400/75 mb-4"></div>
        <p className="text-gray-300 text-base leading-relaxed">
          Minex Network is a decentralized blockchain platform focused on secure, scalable digital asset solutions.
          It fosters innovation through its native token and supports a variety of decentralized applications and services.
          Join the Minex ecosystem to explore new opportunities in blockchain technology.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-green-500/75 p-8 rounded-2xl shadow-lg border border-neutral-800 w-full md:w-[40rem] hover:scale-[1.02] hover:shadow-[0_0_30px_#1f2937] transition duration-500 ease-in-out">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Minex Tokenomics
        </h2>
        <div className="h-[1px] w-full bg-green-400/75 mb-4"></div>
        <p className="text-gray-300 text-base leading-relaxed">
          Comprehensive tokenomics will be shared following regulatory review and strategic development.
          Stay updated via our official channels and app to learn about token distribution, utility, and governance.
        </p>
      </div>
    </div>
  );
};

export default InfoCards;
