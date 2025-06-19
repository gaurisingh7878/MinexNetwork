import React from 'react';
import { motion } from 'framer-motion';

const MinexCoinPage1 = () => {
  const presaleData = [
    { round: 'Private Round', amount: '2,000,000 MNX', price: '$0.210 per token' },
    { round: 'Seed Round', amount: '1,800,000 MNX', price: '$0.380 per token' },
    { round: 'Public Round', amount: '1,500,000 MNX', price: '$0.490 per token' },
    { round: 'TGE', amount: '-', price: '$0.85 USD' },
  ];

  return (
    <div className="-mt-23 py-12 px-4 sm:px-6 lg:px-8 bg-[#071205] text-white">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-green-500/75 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-green-400 to-amber-600 bg-clip-text text-transparent mb-5">
            About Minex Token (MNX)
          </h2>
          <p className="text-slate-300 leading-relaxed text-base">
            MNX is the native token of the Minex Network, a next-generation blockchain ecosystem optimized for high-performance decentralized infrastructure. MNX fuels transactions, smart contract execution, governance utilities, and provides access to core services across the Minex ecosystem.
          </p>
        </motion.div>

        {/* Presale Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-green-600">
            MNX Presale Rounds & TGE
          </h3>

          {/* Table for Desktop */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden shadow-md">
              <thead className="bg-green-500/75">
                <tr>
                  <th className="px-6 py-4 text-white">Round</th>
                  <th className="px-6 py-4 text-white">Token Amount</th>
                  <th className="px-6 py-4 text-white">Price</th>
                </tr>
              </thead>
              <tbody>
                {presaleData.map((item, idx) => (
                  <tr key={idx} className="border-t border-white/10 hover:bg-green-500/75 transition duration-200">
                    <td className="px-6 py-4 text-slate-200">{item.round}</td>
                    <td className="px-6 py-4 text-slate-300">{item.amount}</td>
                    <td className="px-6 py-4 text-purple-300 font-medium">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="sm:hidden overflow-x-auto pb-3">
            <div className="flex flex-col gap-4 w-max">
              {presaleData.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[20rem] bg-green-500/75 backdrop-blur-xl rounded-xl p-5 flex-shrink-0 hover:bg-green-500/75 transition"
                >
                  <h4 className="text-purple-300 font-semibold text-lg mb-2">{item.round}</h4>
                  <p className="text-slate-300 text-sm">{item.amount}</p>
                  <p className="text-purple-200 text-sm font-medium">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MinexCoinPage1;
