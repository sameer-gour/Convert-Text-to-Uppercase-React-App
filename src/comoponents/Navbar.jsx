import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; 



const Navbar = ({dm,toggleMode}) => {

  

  return (
     <nav className={` shadow-md ${dm ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center py-3">

        
        <div className="text-2xl font-bold text-blue-600">
          Sameer
        </div>

        
        <div className="hidden md:flex space-x-6">
          <a href="/  " className={`block px-4 py-2 ${dm? 'text-white ' : 'text-black' }`}>Home</a>
          <a href="/" className={`block px-4 py-2 ${dm? 'text-white ' : 'text-black' }`}>About</a>
          <a href="/" className={`block px-4 py-2 ${dm? 'text-white ' : 'text-black' }`}>Contact</a>
          <button
        onClick={toggleMode}
        className="text-4xl p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"
      >
        {dm ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
      </button>
          
        </div>

        
        <div className="md:hidden">
          <button id="menu-btn" className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    
    <div id="mobile-menu" className="hidden md:hidden bg-white">
      <a href="/" className={`block px-4 py-2 ${dm? 'text-white ' : 'text-black' }`} >Home</a>
      <a className={`block px-4 py-2 ${dm? 'text-white ' : 'text-black' }`} >About</a>
      <a href="/" className={`block px-4 py-2 ${dm? 'text-white ' : 'text-black' }`} >Contact</a>
      
    </div>
  </nav>

  );
};

export default Navbar;
