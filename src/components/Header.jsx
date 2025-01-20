import React, { useState } from 'react';
import { NAV } from '../utils/helper';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);

  };

  return (
    <div className="bg-amber-400 py-4">
      <div className="container max-w-[1440px] mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-900 z-10">
          Logo
        </a>

        <ul
          className={`max-md:min-h-screen max-md:top-0 max-md:left-0 max-md:w-screen max-md:justify-center max-md:items-center max-md:bg-green-600 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 max-md:absolute transition-transform duration-300 ${nav ? "max-md:-translate-y-0" : "max-md:-translate-y-full"
            }`}
        >
          {NAV.map((obj, index) => (
            <li key={index}>
              <a onClick={handleClick} href={obj.link} className="text-lg text-gray-800">
                {obj.title}
              </a>
            </li>
          ))}
          <li>
            <button onClick={handleClick} className="px-3 py-2 rounded-lg border-black border-[2px] md:hidden">
              Contact
            </button>
          </li>
        </ul>
        <button className="px-3 py-2 rounded-lg border-black border-[2px] hidden md:block">
          Contact
        </button>
        <button
          onClick={handleClick}
          className="md:hidden z-10 relative"
        >
          {nav ? "Close" : "Menu"}
        </button>
      </div>
    </div>
  );
};

export default Header;
