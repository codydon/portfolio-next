import React, { useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseCircleFill } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="flex items-center justify-between p-6">
      <div className="flex items-center">
        {/* Avatar */}
        <img src="avatar.jpg" className="w-10 h-10 rounded-full" />
      </div>

      <div className="flex gap-4 items-center justify-center">
        <div className="hidden md:block items-center">
          {/* Page links */}
          <button
            className="bg-gray-800 text-white p-2 rounded-full"
            onClick={() => setDarkMode(!darkMode)}
          >
            <BsMoonStars />
          </button>
          <a href="#" className="px-4 py-2">
            Home
          </a>
          <a href="#" className="px-4 py-2">
            About
          </a>
          <a href="#" className="px-4 py-2">
            Contact
          </a>
        </div>

        {/* Dark mode toggle */}
        <div className="flex gap-2">
          <button
            className="md:hidden bg-gray-800 text-white p-2 rounded-full"
            onClick={() => setShowMenu(!showMenu)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="fixed inset-0 bg-gray-900 opacity-90 p-6">
          {/* Page links */}

          <div className="text-white p-4 mt-20 mx-16 space-y-4 text-center">
            <a href="#" className="px-4 py-2 block">
              Home
            </a>
            <a href="#" className="px-4 py-2 block">
              About
            </a>
            <a href="#" className="px-4 py-2 block">
              Contact
            </a>
            {/* //closing btn */}
            <button
              className="bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto"
              onClick={() => setShowMenu(false)}
            >
              <RiCloseCircleFill size={40} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
