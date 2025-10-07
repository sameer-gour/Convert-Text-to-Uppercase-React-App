import React from "react";


const Navbar = (props) => {
  return (
     <nav className="bg-white shadow-md">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center py-3">

        
        <div className="text-2xl font-bold text-blue-600">
          {props.name}
        </div>

        
        <div className="hidden md:flex space-x-6">
          <a href="/  " className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="/" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="/" className="text-gray-600 hover:text-blue-600">Services</a>
          <a href="/" className="text-gray-600 hover:text-blue-600">Contact</a>
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
      <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</a>
      <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
      <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Services</a>
      <a href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
    </div>
  </nav>

  );
};

export default Navbar;
