/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    // <footer className="bg-[#7B2B3E] py-10 px-4">
    //   <div className="flex flex-col mx-auto max-w-[1250px] font-lato text-brand-50">
    //     <div className="flex ">
    //       {/* <div className="flex justify-between"> */}
    //       <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
    //         <div>
    //           <h3 className="font-bold mb-4">Explore</h3>
    //           <div className="space-y-2">
    //             <p>Salons</p>
    //             <p>Spas</p>
    //             <p>Nails</p>
    //             <p>Deals</p>
    //           </div>
    //         </div>
    //         <div>
    //           <h3 className="font-bold mb-4">Services</h3>
    //           <div className="space-y-2">
    //             <p>Salons</p>
    //             <p>Spas</p>
    //             <p>Nails</p>
    //             <p>Deals</p>
    //           </div>
    //         </div>
    //         <div>
    //           <h3 className="font-bold mb-4">Menu</h3>
    //           <div className="space-y-2">
    //             <p>Salons</p>
    //             <p>Spas</p>
    //             <p>Nails</p>
    //             <p>Deals</p>
    //           </div>
    //         </div>
    //         <div>
    //           <h3 className="font-semibold mb-4">Customer Services</h3>
    //           <div className="space-y-2">
    //             <p>Salons</p>
    //             <p>Spas</p>
    //             <p>Nails</p>
    //             <p>Deals</p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Right Side: Newsletter Signup */}
    //       <div className="flex justify-center mx-auto">
    //         <div className="flex flex-col ">
    //           <h3 className="">JOIN OUR NEWSLETTER</h3>
    //           <p className="mb-4 text-sm ">
    //             Get all the latest Salonix updates delivered to your mailbox
    //           </p>
    //           <div className="flex space-x-2 mb-6">
    //             <input
    //               type="email"
    //               placeholder="email@salonix.com"
    //               className="px-4 py-2 bg-white text-black outline-none rounded-sm"
    //             />
    //             <button className="px-6 py-2 bg-white text-brand-50 border-1 rounded-sm">
    //               SIGN UP
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="mt-8 flex flex-col items-center lg:flex-row justify-between">
    //       {/* Salonix Logo */}
    //       <div className="mb-6 lg:mb-0">
    //         <img
    //           src="/website/icons/footerLogo.svg"
    //           alt="Salonix Logo"
    //           className="w-40 text-dark-950"
    //         />
    //       </div>
    //       {/* Social Icons */}
    //       <div className="flex space-x-4">
    //         <FaInstagram className="w-5 h-5 cursor-pointer text-brand-300" />
    //         <FaFacebookF className="w-5 h-5 cursor-pointer text-brand-300" />
    //         <FaWhatsapp className="w-5 h-5 cursor-pointer text-brand-300" />
    //         <FaPhone className="w-5 h-5 cursor-pointer text-brand-300" />
    //       </div>
    //       {/* </div> */}
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-brand-800 py-10 px-4">
      <div className="flex flex-col mx-auto max-w-[1250px] font-lato text-brand-50">
        <div className="flex flex-col lg:flex-row justify-between lg:space-x-4">
          <div className="sm:flex justify-between gap-10 sm:gap-24 hidden">
            <div className="">
              <h3 className="font-bold mb-4">Explore</h3>
              <div className="space-y-2">
                <p>Salons</p>
                <p>Spas</p>
                <p>Nails</p>
                <p>Deals</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <div className="space-y-2">
                <p>Salons</p>
                <p>Spas</p>
                <p>Nails</p>
                <p>Deals</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Menu</h3>
              <div className="space-y-2">
                <p>Salons</p>
                <p>Spas</p>
                <p>Nails</p>
                <p>Deals</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Customer Services</h3>
              <div className="space-y-2">
                <p>Salons</p>
                <p>Spas</p>
                <p>Nails</p>
                <p>Deals</p>
              </div>
            </div>
          </div>

          {/* Right Side: Newsletter Signup */}
          <div className="mt-8 lg:mt-0 lg:w-[40%]">
            <h3 className="font-bold mb-2">JOIN OUR NEWSLETTER</h3>
            <p className="mb-6 text-sm">
              Get all the latest Salonix updates delivered to your mailbox
            </p>
            <div className="flex sm:flex-row space-x-2 mb-6">
              <input
                type="email"
                placeholder="email@salonix.com"
                className="px-4 py-3 sm:py-0bg-white text-black outline-none rounded-sm w-2/3"
              />
              <button className="px-4 bg-white text-brand-50 border-1 rounded-sm ">
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row justify-between mt-8 lg:mt-12">
          {/* Salonix Logo */}
          <div className="mb-6 lg:mb-0">
            <Image
              src="/website/icons/footerLogo.svg"
              alt="Salonix Logo"
              width={300}
              height={120}
              className=" text-dark-950"
            />
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mr-8">
            <FaInstagram className="text-2xl cursor-pointer text-brand-300" />
            <FaFacebookF className="text-2xl cursor-pointer text-brand-300" />
            <FaWhatsapp className="text-2xl cursor-pointer text-brand-300" />
            <FaPhone className="text-2xl cursor-pointer text-brand-300" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
