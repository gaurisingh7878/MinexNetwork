import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "1. What is Minex Network and how does it work?",
    answer:
      "Minex Network is a decentralized blockchain ecosystem designed to support tokenization, crypto mining, and community-driven innovation. It operates on the Minex Protocol and enables secure, scalable digital asset interactions.",
  },
  {
    question: "2. What makes Minex Network unique compared to other blockchain projects?",
    answer:
      "Minex Network integrates sustainable mining hardware, decentralized governance, and real-world utility into a single, unified framework — empowering users and developers alike.",
  },
  {
    question: "3. What is the difference between MNX and AUX coins?",
    answer:
      "MNX is the main currency for transactions and rewards within the network, while AUX serves as a utility and governance token used across partner ecosystems.",
  },
  {
    question: "4. How does Minex Network ensure transparency and security?",
    answer:
      "The network uses advanced cryptography, node-based validation, and auditable smart contracts to ensure secure, tamper-proof operations across all services.",
  },
  {
    question: "5. How can I use MNX tokens within the Minex Network?",
    answer:
      "MNX tokens can be used for staking, node operation, ecosystem services, transaction fees, and accessing premium features within supported platforms.",
  },
  {
    question: "6. How can I mine MNX or AUX coins?",
    answer:
      "You can mine MNX and AUX using official Minex mining devices or by running a verified node on the Minex blockchain.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0d2109] text-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Get answers to common questions
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Learn more about how Minex Network is redefining blockchain infrastructure and mining technology.
        </p>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-linear-to-r from-[#3def1e] to-[#92e784] border border-gray-800 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-6 py-6 flex justify-between items-center hover:bg-linear-to-r from-[#92e784]  to-[#3def1e] transition"
            >
              <span className="text-sm md:text-base font-medium">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-black  " />
              ) : (
                <ChevronDown className="w-5 h-5 text-black" />
              )}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-balance font-serif text-black"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
