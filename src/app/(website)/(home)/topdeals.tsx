/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import HeadingTag from "./HeadingTag";

const deals = [
  {
    src: "/website/images/salon-pic1.png",
    title: "Flat 50% off on hair styling",
    salon: "Lakme Salon",
  },
  {
    src: "/website/images/salon-pic2.png",
    title: "Flat 20% off on Hair Smoothening",
    salon: "Lakme Salon",
  },
  {
    src: "/website/images/salon-pic3.png",
    title: "Upto 70% off on Nail extensions",
    salon: "Lakme Salon",
  },
  {
    src: "/website/images/salon-pic4.png",
    title: "Upto 40% off on Body Spa",
    salon: "Lakme Salon",
  },
];

const TopDeals: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="flex flex-col justify-between gap-8 mx-auto max-w-[1250px]">
        {/* Title Section */}
        <div className="text-center mb-8">

          <HeadingTag
            text="Today's Top Deals"
            color="text-heading-50"
            maxWidth="600px"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 ">
          {deals.map((deal, index) => (
            <div key={index} className="relative rounded-md">
              <Image
                src={deal.src}
                alt={deal.title}
                width={700}
                height={480}
                className="w-full h-80 object-fit rounded-t-md"
              />
              <div className=" bottom-0 left-0 font-lato w-full bg-brand-600 bg-opacity-90 text-brand-50 p-4 flex justify-between items-center rounded-b-md">
                <div>
                  <p className="text-3xl sm:text-2xl md:text-2xl xl:text-3xl">
                    {deal.title}
                  </p>
                  <p className="text-sm">{deal.salon}</p>
                </div>
                <div className="bg-white p-2 rounded-full">
                  <GoArrowRight className="text-3xl rounded-full text-brand-600 bg-brand-50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDeals;
