import { motion } from "framer-motion";
import { Player } from '@lottiefiles/react-lottie-player';

export default function CommunityEventsSection() {
  return (
    <section className="bg-[#0d2109] text-white px-6 py-24 md:px-20 relative">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Earn Rewards & Fuel Innovation <br /> with Minex Community Events
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Minex Network empowers the community through tokenized crowdfunding and
          airdrop events. Support visionary startups while earning crypto rewards
          by completing simple tasks like learning, sharing, or referring others.
        </p>
      </div>

      {/* Content Cards */}
      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1c6a20] rounded-2xl p-8 shadow-xl border border-gray-800 hover:shadow-lime-500/10 transition"
        >
          <h3 className="text-2xl font-semibold mb-2">01</h3>
          <h4 className="text-xl md:text-2xl font-bold mb-4">
            Earn MNX & Partner Tokens
          </h4>
          <hr className="border-gray-700 mb-4" />
          <p className="text-gray-300 text-sm leading-relaxed">
            Join Minex-powered tokenization and crowdfunding events to earn MNX and
            other valuable crypto tokens. Each event is vetted and backed by real-world
            innovation within the Minex Ecosystem — bringing both value and purpose.
          </p>
          
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#1c6a20]/90 w-full max-w-2xl rounded-2xl p-6 md:p-8 shadow-xl border border-gray-800 relative overflow-hidden backdrop-blur-md"
        >
          <h4 className="text-xl md:text-3xl font-bold mb-4">
            Launch with <br className="hidden md:block" /> Minex Network
          </h4>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            Are you building the future? Minex supports early-stage Web3 startups through
            tokenization, exposure, and community-powered funding. Partner with us to
            access our growing network and infrastructure.
          </p>

          

          <div className="absolute top-10 right-45 w-32 md:w-40 lg:w-48 opacity-10 pointer-events-none z-0">
            <Player
              autoplay
              loop
              src="/src/Animation - 1747563045022.json"
              className="w-[20rem] h-[13rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
