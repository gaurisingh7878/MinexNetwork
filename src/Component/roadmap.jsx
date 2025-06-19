import { motion } from "framer-motion";

const roadmapItems = [
  {
    year: "2023–2024",
    title: "Foundation Laid. [Completed]",
    points: [
      "Architecting the Minex Protocol",
      "Core Blockchain Development",
      "Validator Framework & Node Setup",
      "Partnership Onboarding",
      "Smart Contract Audits",
      "xUSD Stablecoin Design",
      "Web3 Wallet Integration",
      "Testnet Deployment",
      "Android Wallet App Launch"
    ]
  },
  {
    year: "2025",
    title: "Mainnet Launch. [In Progress]",
    points: [
      "Launch of Minex Mainnet",
      "Public Sale of MNX Token",
      "xUSD Stablecoin Activation",
      "Launch Minex Launchpad for Projects",
      "Onboard First Tokenized Assets",
      "Global Brand Campaigns",
      "Web & iOS App Launch",
      "Staking & Governance Features",
      "100+ Strategic Partners",
      "Cross-chain Bridge Integration",
      "Release Technical Documentation",
      "Initiate Community Grant Program",
      "Developer DAO Launch"
    ]
  },
  {
    year: "2026",
    title: "Global Expansion.",
    points: [
      "Apply for E-Money & Banking Licenses",
      "Launch Regulated Asset Marketplace",
      "Partnerships with Real-World Asset Issuers",
      "Decentralized Identity System (DID)",
      "Corporate Tokenization Framework",
      "Major CEX/DEX Listings",
      "Fiat On/Off Ramps Integration",
      "AI-Powered Compliance Suite",
      "Launch of Mainsafe Custody Platform",
      "Minex Learn – Educational Hub",
      "Expand into 20+ Countries",
      "Sustainability & ESG Protocol Layer",
      "Foundation for Minex DeFi 2.0"
    ]
  }
];

export default function RoadmapSection() {
  return (
    <section className="bg-[#0d2109] text-white px-6 py-20 md:px-20">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          The Minex Network Roadmap
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6 text-sm md:text-base">
          Explore the milestones shaping Minex Network — a Layer-1 blockchain
          enabling tokenized real-world assets, stablecoins, and global Web3 adoption.
        </p>

        <div className="text-center mt-8 animate-bounce">
          <span className="text-3xl">⬇️</span>
        </div>
      </div>

      {/* Roadmap Cards */}
      <div className="grid gap-10 md:grid-cols-3">
        {roadmapItems.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1c6a20] rounded-2xl p-8 shadow-xl border border-gray-800 hover:shadow-green-500/75 transition"
          >
            <h3 className="text-amber-400 text-xl font-semibold mb-2">
              {item.year}
            </h3>
            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
            <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
