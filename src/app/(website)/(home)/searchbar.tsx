import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
  return (
    <section className="bg-brand-900 py-10 ">
      <div className="  text-brand-50  flex flex-col items-center mx-auto max-w-[1250px]">
        <h2 className="text-4xl mb-6 text-center">What are you looking for?</h2>

        <div className="flex items-center w-full max-w-2xl relative font-lato">
          <input
            type="text"
            placeholder="Search for salons, spas or services near you..."
            className="searchbar w-full py-3 px-6 text-black text-brand-800 rounded-full"
          />
          <button className="absolute right-0 flex items-center m-2 text-white bg-brand-600 p-2 rounded-full">
            <FaSearch />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SearchBar;
