import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-linear-to-r from-green-600 to-green-950 text-white pt-16 pb-10 px-6">
       <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Minex Network</h2>
          <p className="text-sm text-gray-400">Empowering the decentralized future.</p>
        </div>

        {/* Center Section */}
        <div className="text-sm text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} Minex Network. All rights reserved.
        </div>

        {/* Right Section (Optional Links) */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition duration-200">Privacy</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-200">Terms</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-200">Contact</a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-0 right-6  z-50  cursor-pointer"
          aria-label="Scroll to top"
        >
          <div className="pyramid-loader">
            <div className="wrapper">
              <span className="side side1"></span>
              <span className="side side2"></span>
              <span className="side side3"></span>
              <span className="side side4"></span>
              <span className="shadow"></span>
            </div>
          </div>
        </button>
      )}
    </footer>
  );
}
