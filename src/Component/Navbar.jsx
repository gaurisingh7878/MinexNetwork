import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" rounded-xl bg-[#071205]  py-4   fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between  items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="w-20 md:w-24 h-auto"
              src="/src/Imges/Minex Network.webp"
              alt="Minex Logo"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-14">
            <li>
              <Link
                to="/"
                className="text-white hover:text-white  p-3 font-medium transition"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/MiraCoinICOpage"
                className="text-white hover:text-white  font-medium transition"
              >
                MINEX COIN
              </Link>
            </li>
            <li>
              <Link
                to="/LumiraSection"
                className="text-white hover:text-white  font-medium transition"
              >
               LUMIRA COIN
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="text-white hover:text-white  font-medium transition"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                to="/Tokenization"
                className="text-white hover:text-white  font-medium transition"
              >
                 CONTACT FORM
              </Link>
            </li>
          </ul>
          <ul className="hidden md:flex space-x-6">
             
             <li>
              <Link
                to="/Explorer"
                className="text-white hover:text-white  p-3 font-medium transition"
              >
                EXPLORER
              </Link>
            </li>

          </ul>
         

          {/* Mobile Menu Button */}
          <div className="bg-linear-to-r from-[#92e784]  to-[#3def1e] p-3 rounded-md md:hidden">
            <buttonpage
              onClick={() => setIsOpen(!isOpen)}
              className="text-white  font-medium transition"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </buttonpage>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-2 pt-2 bg-[#071205] space-y-2 shadow-lg rounded-b-xl">
          <ul className="space-y-0">
             <li>
              <Link
                to="/"
                 onClick={() => setIsOpen(!isOpen)}
                className="block text-white hover:text-white  p-2 font-medium transition"
              >
                
                HOME
                <hr className="border-[#f2f8f742] mb-2" />
              </Link>
            </li>
            <li>
              <Link
                to="/MiraCoinICOpage"
                 onClick={() => setIsOpen(!isOpen)}
                className="block text-white hover:text-white  p-2 font-medium transition"
              >
                Minex Coin
                <hr className="border-[#f2f8f742] mb-2" />
              </Link>
            </li>
            <li>
              <Link
                to="/LumiraSection"
                 onClick={() => setIsOpen(!isOpen)}
                className="block text-white hover:text-white  p-2 font-medium transition"
              >
               LUMIRA COIN
               <hr className="border-[#f2f8f742] mb-2" />
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                 onClick={() => setIsOpen(!isOpen)}
                className="block text-white hover:text-white  p-2 font-medium transition"
              >
                CONTACT
                <hr className="border-[#f2f8f742] mb-2" />
              </Link>
            </li>
            <li>
              <Link
                to="/Tokenization"
                 onClick={() => setIsOpen(!isOpen)}
                className="block text-white hover:text-white b p-2 font-medium transition"
              >
                 CONTACT FORM
                 <hr className="border-[#f2f8f742] mb-2" />
              </Link>
            </li>
          </ul>
           <ul className="space-y-2">
             <li>
              <Link
                to="/Explorer"
                 onClick={() => setIsOpen(!isOpen)}
                className="block text-white hover:text-white  p-2 font-medium transition"
              >
                EXPLORER
                <hr className="border-[#f2f8f742] mb-2" />
              </Link>
            </li>
             
          </ul>
        </div>
      )}
    </nav>
  );
}
