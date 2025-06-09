import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Red Navbar */}
      <nav className="bg-red-600 text-white pl-6 pr-4 py-1 flex justify-between items-center">
        {/* Left: Logo & Location */}
        <div className="flex items-center gap-6">
          <h1 className="text-3xl font-medium">magicbricks</h1>
<span className="text-sm cursor-pointer pl-5 flex items-center gap-2">
  <select className="text-sm outline-none font-medium bg-transparent bg-white text-gray-700 px-2 py-1 rounded">
    <option value="varanasi">Varanasi, India</option>
    <option value="delhi">Delhi, India</option>
    <option value="mumbai">Mumbai, India</option>
    <option value="bangalore">Bangalore, India</option>
  </select>
</span>
        </div>

        {/* Right buttons for md+ */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-1 text-white hover:rounded hover:bg-white hover:text-red-500 px-3 py-2 text-base">
            MB Prime
            <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
          </button>
          <button className="flex items-center gap-1 text-white hover:rounded hover:bg-white hover:text-red-500 px-3 py-2 text-base">
            Login
            <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
          </button>
          <button className="bg-white text-gray-500 px-4 py-1 rounded cursor-pointer flex items-center gap-2">
            Post Property
            <span className="bg-yellow-300 text-gray-500 text-xs px-2 py-0.5 rounded-full">
              FREE
            </span>
          </button>
        </div>

        {/* Hamburger menu button for mobile */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown menu panel */}
      <div
        className={`md:hidden bg-white text-gray-600 border-b border-gray-200 transition-max-height duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {/* Right buttons stacked */}
        <div className="flex flex-col px-6 py-4 border-b border-gray-200 gap-4">
          <button className="flex items-center gap-1 text-gray-700 hover:text-red-600 px-3 py-2 rounded-md border border-gray-300 hover:border-red-500 transition">
            MB Prime
            <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
          </button>
          <button className="flex items-center gap-1 text-gray-700 hover:text-red-600 px-3 py-2 rounded-md border border-gray-300 hover:border-red-500 transition">
            Login
            <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full cursor-pointer flex items-center gap-2 justify-center font-semibold">
            Post Property
            <span className="bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">
              FREE
            </span>
          </button>
        </div>

        {/* Bottom nav links stacked vertically */}
        <nav className="flex flex-col gap-3 px-6 py-4">
          <span className="hover:text-red-600 cursor-pointer text-lg font-medium border-b border-gray-300 pb-2">
            Buy
             <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
          </span>
          <span className="hover:text-red-600 cursor-pointer text-lg font-medium border-b border-gray-300 pb-2">
            Rent
             <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
          </span>
          <span className="hover:text-red-600 cursor-pointer text-lg font-medium border-b border-gray-300 pb-2">
            Sell
             <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
          </span>
          <span className="hover:text-red-600 cursor-pointer text-lg font-medium border-b border-gray-300 pb-2">
            Home Loans
             <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
          </span>
          <span className="hover:text-red-600 cursor-pointer text-lg font-medium border-b border-gray-300 pb-2">
            Home Interiors
             <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
          </span>
          <span className="hover:text-red-600 cursor-pointer flex items-center gap-2 text-lg font-medium border-b border-gray-300 pb-2">
            MB Advice{" "}
            <span className="bg-yellow-500 text-xs text-white px-1 py-0.5 rounded-full font-bold">
              NEW
              
            </span>
             <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
          </span>
          <span className="hover:text-red-600 cursor-pointer text-lg font-medium border-b border-gray-300 pb-2">
            Help
             <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
          </span>
        </nav>
      </div>

      {/* Desktop bottom nav */}
      <nav className="hidden md:flex bg-white text-gray-600 py-2 pl-[50px] pr-6 font-medium border-b border-gray-200 justify-start gap-10">
        <span className="hover:text-red-600 cursor-pointer">Buy
           <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
        </span>
        <span className="hover:text-red-600 cursor-pointer">Rent
           <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
        </span>
        <span className="hover:text-red-600 cursor-pointer">Sell
           <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
        </span>
        <span className="hover:text-red-600 cursor-pointer">Home Loans
           <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
        </span>
        <span className="hover:text-red-600 cursor-pointer">Home Interiors
           <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
        </span>
        <span className="hover:text-red-600 cursor-pointer flex items-center gap-1">
          MB Advice{" "}
          <span className="bg-yellow-400 text-xs text-gray-600 px-1 py-0.5 rounded-full font-bold">
            NEW
          </span>
           <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
        </span>
        <span className="hover:text-red-600 cursor-pointer">Help
           <select className="text-sm outline-none font-medium bg-transparent">
              <option></option>
            </select>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
