import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function PricingSection() {
  const cardData = [
    {
      title: "Minex X-10 Miner (Coming Soon)",
      price: "$699",
      availability: "ONLY 1,000 AVAILABLE",
      description:
        "The compact and sustainable Minex X-10 device is built to mine MNX – the native currency of the Minex Network.",
      features: [
        "Earn MNX Coins by mining",
        "Physical Eco-Efficient Miner",
        "Optimized for the Minex Blockchain",
      ],
      preorder: "07/07/25",
    },
    {
      title: "Minex X-100 Miner (Coming Soon)",
      price: "$3499",
      availability: "ONLY 500 AVAILABLE",
      description:
        "The ultra-efficient Minex X-100 is engineered for maximum MNX yield and performance.",
      features: [
        "Mine 4x More MNX Coins",
        "Eco-Friendly Hardware Design",
        "Full Compatibility with the Minex Protocol",
      ],
      preorder: "07/07/25",
    },
  ];

  return (
    <section className="bg-[#0d2109] text-white px-4 py-16 md:px-8">
      <div className="text-center mb-12">
        <span className="text-sm tracking-widest text-[#3def1e] uppercase mb-2 block">
          Pricing
        </span>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
          Start <span className="text-white/80">Mining with Minex</span> to
          <br />
          Earn MNX Coins
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1c6a20] border border-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-lime-500/10 transition"
          >
            <h4 className="text-lg font-medium mb-2">{card.title}</h4>
            <p className="text-4xl font-bold mb-2">{card.price}</p>
            <p className="text-xs text-white mb-4 uppercase tracking-wide">
              / {card.availability}
            </p>
            <p className="text-white text-sm mb-6">{card.description}</p>

            <ul className="mb-6 space-y-3">
              {card.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-white">
                  <CheckCircle size={18} className="mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="text-center">
              <p className="bg-[#1c6a20] text-white py-2 rounded-full font-semibold mb-4 text-sm">
                Pre-Order Available from: {card.preorder}
              </p>
              <button className="border border-white hover:bg-white hover:text-white transition px-6 py-2 rounded-full text-sm font-medium">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto text-center text-sm text-gray-400">
        <div>
          <h5 className="text-white font-semibold mb-1">🔐 Security</h5>
          <p>Robust security within the Minex blockchain ecosystem</p>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-1">🎧 Support</h5>
          <p>Contact us at support@minexnetwork.io for assistance</p>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-1">👥 Community</h5>
          <p>Join our Telegram group to connect and get help from others</p>
        </div>
      </div>
    </section>
  );
}
