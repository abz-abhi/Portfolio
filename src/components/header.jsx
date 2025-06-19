"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-hdbackground flex justify-between items-center md:h-[113px] p-2 xxs:h-[80px] relative">
      <img
        className="md:h-[110px] xxs:h-[90px] pt-3 md:ml-60 xxs:ml-0 xs:ml-0 sm:ml-16 "
        src="../assets/logos/myLogo.png"
        alt="Logo"
      />

      {/* Desktop Menu */}
      <ul className="space-x-24 text-xl md:flex items-center mr-60 hidden  text-white">
        <li className="hover:text-gray-300 cursor-pointer transition-colors">
          Home
        </li>
        <li className="hover:text-gray-300 cursor-pointer transition-colors">
          About
        </li>
        <li className="hover:text-gray-300 cursor-pointer transition-colors">
          Lab
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={toggleMenu}
        className="md:hidden text-gray-700 focus:outline-none z-50 mr-4 xxs:mr-0 xs:mr-0 sm:mr-16"
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: menuOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            animate={{
              d: menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16",
            }}
            transition={{ duration: 0.3 }}
          />
        </svg>
      </motion.button>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="z-0 md:z-auto h-10 p-6 absolute xxs:top-[80px] right-0 bg-[#D5D4D6] w-full text-textPurple text-center flex justify-around items-center md:hidden shadow-lg backdrop-blur-sm"
          >
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="hover:text-black cursor-pointer transition-colors py-2"
            >
              Home
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="hover:text-black cursor-pointer transition-colors py-2"
            >
              About
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hover:text-black cursor-pointer transition-colors py-2"
            >
              Lab
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
