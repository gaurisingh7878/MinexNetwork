import React from "react";

const VestingInsightsSection = () => {
  return (
    <section className="bg-[#071205] text-white -mt-13 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 mt-10">
        {/* Card 1: Milestone-Based Vesting */}
        <div className="bg-green-500/75 rounded-2xl p-6 md:p-10 shadow-lg border border-neutral-800 w-full animate-fade-in-up transition-all hover:shadow-[0_0_30px_#071205]">
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">
            Milestone-Based Vesting
          </h3>
          <hr className="border-white mb-6" />
          <p className="text-white text-sm md:text-base leading-relaxed">
            To ensure sustainable market behavior and ecosystem health, MNX follows a milestone-based vesting model. Token unlocks are triggered by ecosystem achievements, such as strategic partnership launches and major network upgrades. MNX tokens are released at a fixed baseline price of $0.85 USD to reduce volatility and promote long-term value creation, tightly aligning distribution with Minex Network’s real growth milestones.
          </p>
        </div>

        {/* Card 2: Future Insights */}
        <div className="bg-green-500/75 rounded-2xl p-6 md:p-10 shadow-lg border border-neutral-800 w-full animate-fade-in-up transition-all hover:shadow-[0_0_30px_#071205]">
          <h3 className="text-2xl font-semibold text-gray-300 mb-4">
            Future Insights
          </h3>
          <hr className="border-white mb-6" />
          <p className="text-white text-sm md:text-base leading-relaxed">
            MNX is at the core of the Minex Network’s vision for a scalable decentralized economy. As the network grows, MNX will empower governance voting, node validation, and staking. It will also serve as a core asset in future DeFi utilities, tokenized services, and integrated dApps. Backed by a transparent roadmap and a progressive release structure, MNX is designed to become a long-term, utility-driven digital asset. Detailed strategies are available in the official whitepaper.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VestingInsightsSection;
