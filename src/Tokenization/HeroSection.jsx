import React from "react";

const HeroFromSection = () => {
  return (
    <section className="bg-[#071205] text-white py-16 mt-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
        {/* Label */}
        <span className="inline-block bg-green-500/75 text-white text-xs sm:text-sm font-semibold tracking-wider px-4 py-1 rounded-full mb-5 uppercase">
          Crowd Funding & Tokenization
        </span>

        {/* Title */}
        <h1 className="text-3xl bg-gradient-to-r from-green-400 to-amber-600 bg-clip-text text-transparent  sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-snug">
          Elevate Your Business & Become Part of the Minex Network
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          The Minex Network enables tokenized crowdfunding and airdrop events,
          empowering startups to raise capital and connect with our global
          community of over 1.5 million members. Interested in this service?
          Fill out the form to get started.
        </p>
      </div>
    </section>
  );
};

export default HeroFromSection;
