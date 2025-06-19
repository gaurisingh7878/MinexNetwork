import React from "react";


const MinexLandingPage = () => {
  return (
    <section className="   bg-[#071205] text-white px-6 py-12 md:px-20 md:py-24 flex flex-col md:flex-row items-center justify-center md:gap-50">
      {/* Left Content */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-6">
          Scalable. Interoperable. Decentralized. <br className="hidden md:block" />
          Powering the Future of Web3 <br className="hidden md:block" />
          with Minex Network
        </h1>

        <p className="text-white mb-6">
          Minex Network is building a high-performance blockchain protocol that empowers developers, enterprises, and communities to create scalable decentralized applications, enable cross-chain asset transfers, and unlock real-world financial utility.
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-center">
            <span className="text-amber-500 text-lg mr-3">✔</span> Seamless Cross-Chain Interoperability
          </li>
          <li className="flex items-center">
            <span className="text-amber-500 text-lg mr-3">✔</span> Ultra-Fast & Low-Cost Transactions
          </li>
          <li className="flex items-center">
            <span className="text-amber-500 text-lg mr-3">✔</span> Developer-Friendly Infrastructure
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="text-white hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-amber-500 duration-700">
            Read Whitepaper
          </button>

          <button className="text-white hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-amber-500 duration-700">
            Join the Ecosystem
          </button>
        </div>
      </div>

      {/* Right Card with Lottie */}
     <div className=" flex-1 w-full h-[25rem] max-w-md  mt-5 rounded-xl shadow-2xl ">
 

  {/* Foreground content */}
  <div className="">
     <video
    className=" w-full h-full object-cover z-50 rounded-2xl "
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/src/Video/minex1.mp4" type="video/mp4" />
    
  </video>
    <h3 className="text-2xl font-semibold mb-2 text-white">
      Decentralized Finance Hub
    </h3>
    <p className="text-white">
      Minex provides a robust environment for DeFi applications, enabling users
      to stake, swap, lend, and govern digital assets seamlessly across
      blockchains.
    </p>
  </div>
</div>

    </section>
  );
};

export default MinexLandingPage;
