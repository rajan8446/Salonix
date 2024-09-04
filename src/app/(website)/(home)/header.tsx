import React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { BiMap } from "react-icons/bi";

const Header: React.FC = () => {
  return (
    <header className="bg-brand-900 px-4 py-3 font-lato">
      <div className="flex items-center justify-between mx-auto max-w-[1250px] text-brand-50">
        {/* <div className="flex items-center space-x-2"> */}
        <div className="flex items-center cursor-pointer text-white">
          <FaBars className="text-2xl cursor-pointer text-white" />
          <h3 className="ml-2 text-lg">Menu</h3>
          <select
            name="cars"
            id="cars"
            className="bg-brand-700 ml-2 px-3 py-1 hidden sm:block"
          >
            <option value="Lucknow">Lucknow</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Lucknow">Lucknow</option>
          </select>
        </div>
        {/* </div> */}

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/website/icons/headerLogo.svg"
            alt="Salonix Logo"
            width={120}
            height={40}
          />
        </div>

        <div className="flex items-center space-x-4">
          <Image
            src="profile-pic.svg"
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <button className="text-brand-50 py-2 rounded-full hidden sm:block">
            Book Your Slot
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
