import React from "react";
import { useState } from "react";

import {
  AiOutlineMenu,
  AiOutlineClose,
} from "../../node_modules/react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const hundleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex text-white pt-5 h-24 max-w-[1240px] mx-auto">
      <h1 className="w-full text-3xl font-bold text-[#00d] ml-[6%]">JIMIN</h1>
      <ul className="hidden sm:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resourcers</li>
        <li className="p-4">About</li>
      </ul>
      <div onClick={hundleNav} className="block sm:hidden mr-[8%] mt-[3%]">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]  ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00d] m-4">BTS</h1>

        <ul className="uppercase">
          <li
            className="p-4 border-b border-gray-600
          "
          >
            Home
          </li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resourcers</li>
          <li className="p-4 border-b border-gray-600">About</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
