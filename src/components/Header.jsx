import React, { useEffect, useState } from 'react';
import { NAV } from '../utils/helper';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleAdd = () => {
      if (nav && window.innerWidth < 768) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    handleAdd();
  }, [nav]);

  return (
    <div className="bg-amber-400 py-4 ">
      <div className="container max-w-[1440px] mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-900 z-10">
          Logo
        </a>
        <ul
          className={`max-md:min-h-screen max-md:top-0 max-md:left-0 max-md:w-screen max-md:justify-center max-md:items-center max-md:bg-green-600 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 max-md:fixed transition-transform duration-300 ${nav ? "max-md:-translate-y-0" : "max-md:-translate-y-full"
            }`}
        >
          {NAV.map((obj, index) => (
            <li key={index}>
              <a
                onClick={handleClick}
                href={obj.link}
                className="text-lg text-gray-800 hover:text-white transition-all duration-700"
              >
                {obj.title}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={handleClick}
              className="px-3 py-2 rounded-lg border-black border-[2px] md:hidden hover:text-white transition-all duration-500"
            >
              Contact
            </button>
          </li>
        </ul>
        <button className="px-3 py-2 rounded-lg border-black border-[2px] hover:border-white hidden md:block hover:text-white transition-all duration-500">
          Contact
        </button>
        <button
          onClick={handleClick}
          className="md:hidden z-10 relative"
        >
          {nav ? "Close" : "Menu"}
        </button>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae vero expedita assumenda voluptates eaque facilis nam ab aliquam quasi recusandae debitis, quod sunt reiciendis animi ipsam veritatis sequi. Maiores, pariatur?</p>
    </div>
  );
};

export default Header;
