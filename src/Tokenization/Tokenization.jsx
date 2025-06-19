import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-[#0d0d0d] text-white px-4 sm:px-6 md:px-8">
      {/* Section Header */}
      <div className="text-center animate-fade-in-up mb-12">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 leading-tight">
          Elevate Your Business & Become Part of the Minex Network
        </h2>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          The Minex Network enables tokenized crowdfunding and airdrop events,
          empowering startups to raise capital and connect with our global
          community of over 1.5 million members. Interested in this service?
          Fill out the form to get started.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-gradient-to-b from-[#0f0f11] to-[#09090b] border border-neutral-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl  animate-fade-in-up">
        <h3 className="text-lg font-semibold mb-6 text-left">
          Get in contact with us
        </h3>
        <form className="space-y-6 ">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-black border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full bg-black border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full bg-black border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full bg-black border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us how we can help"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-600 hover:to-indigo-500 text-white font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-blue-700/50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
