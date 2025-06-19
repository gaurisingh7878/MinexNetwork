import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const inputAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#071205] text-white p-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-24 px-4"
      >
        <h1 className="text-4xl sm:text-5xl  font-bold bg-gradient-to-r from-green-500 to-amber-600 bg-clip-text text-transparent mb-4">
          CONTACT MINEX NETWORK
        </h1>
        <p className="text-white  text-lg sm:text-xl mb-2">
          Reach out to Minex Network for any questions or support.
        </p>
        <p className="text-white text-sm">
          We typically respond within 1 to 10 business days, depending on our current workload.
        </p>
      </motion.div>

      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-4xl"
        >
          <div className="bg-green-500/75 backdrop-blur-lg rounded-xl p-6 sm:p-8 shadow-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold bg-gradient-to-r text-white mb-8"
            >
              Get in Touch with Minex Network
            </motion.h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={inputAnimation} initial="hidden" animate="visible">
                  <label className="block text-sm font-medium text-white mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                      focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-700"
                  />
                </motion.div>

                <motion.div variants={inputAnimation} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
                  <label className="block text-sm font-medium text-white  mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                      focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-700"
                  />
                </motion.div>
              </div>

              <motion.div variants={inputAnimation} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                <label className="block text-sm font-medium text-white  mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                      focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-700"
                />
              </motion.div>

              <motion.div variants={inputAnimation} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                <label className="block text-sm font-medium text-white  mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                      focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-700"
                  placeholder="Tell us how we can assist you"
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                      focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-700"
                >
                  Submit
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
