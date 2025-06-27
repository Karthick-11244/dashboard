import React, { useState } from "react";
import { Menu, Bell, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white shadow-lg px-6 py-4 fixed  top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
          Security Dashboard
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-pink-500 transition"
            >
              Services <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 right-0 bg-black bg-opacity-70 backdrop-blur-md border border-gray-700 rounded-lg w-40 shadow-xl p-2 z-50">
                <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded">Design</a>
                <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded">Development</a>
                <a href="#" className="block px-3 py-2 hover:bg-gray-700 rounded">Security</a>
              </div>
            )}
          </div>

          {/* Notification */}
          <Bell className="w-5 h-5 hover:text-pink-500 transition cursor-pointer" />

          {/* Profile */}
          <div className="relative group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s"
              alt="User"
              className="w-8 h-8 rounded-full ring-2 ring-pink-500 object-cover cursor-pointer"
            />
            <div className="absolute hidden group-hover:block right-0 mt-2 bg-black bg-opacity-80 backdrop-blur-md p-3 rounded-lg shadow-xl w-40 z-50">
              <a href="#" className="block px-2 py-1 hover:bg-gray-700 rounded">Profile</a>
              <a href="#" className="block px-2 py-1 hover:bg-gray-700 rounded">Settings</a>
              <a href="#" className="block px-2 py-1 hover:bg-gray-700 rounded">Logout</a>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm bg-gray-900 bg-opacity-90 p-4 rounded shadow-xl">
          <a href="#" className="block text-white hover:text-pink-500">Home</a>
          <a href="#" className="block text-white hover:text-pink-500">Services</a>
          <a href="#" className="block text-white hover:text-pink-500">Contact</a>
          <div className="flex space-x-3 mt-3">
            <Bell className="w-5 h-5 text-white hover:text-pink-500" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s" className="w-6 h-6 rounded-full border border-pink-500" alt="profile" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;