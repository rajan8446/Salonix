import React from "react";
import { FaSearch } from "react-icons/fa";
import HeadingTag from "./HeadingTag";

const SearchBar: React.FC = () => {
  return (
    <section className="bg-brand-900 py-14 ">
      <div className="  text-grey-50  flex flex-col items-center mx-auto max-w-[1250px] gap-8">

        {/* <h2 className="text-4xl mb-6 text-center">What are you looking for?</h2> */}

        <HeadingTag
          text="What are you looking for?"
          color="text-dark-50"
          maxWidth="600px"
        />
        <div className="flex items-center w-full max-w-2xl relative font-lato">
          <input
            type="text"
            placeholder="Search for salons, spas or services near you..."
            className="searchbar w-full py-3 px-6 text-black text-brand-800 rounded-full"
          />
          <button className="absolute right-0 flex items-center m-2 text-white bg-brand-600 p-2 rounded-full">
            <FaSearch className="text-brand-50 text-lg"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
