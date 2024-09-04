/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { FaCalendarAlt, FaClock, FaStar } from "react-icons/fa";
import { LuClock10 } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import Button from "./button";

const salons = [
  {
    src: "/website/images/salon-pic1.png",
    distance: "2 KMS",
    tags: ["UNISEX", "MALE, FEMALE"],
    type: "MAKEUP",
    name: "Green Trends Unisex Salon",
    location: "3rd Floor, Orion Mall, Mahodhipur",
    rating: 4.2,
    reviews: 247,
    distanceDetail: "1.5 km",
    timing: "10 am to 8 pm",
    days: "Mon - Sat",
  },
  {
    src: "/website/images/salon-pic2.png",
    distance: "2 KMS",
    tags: ["UNISEX", "MALE, FEMALE"],
    type: "MAKEUP",
    name: "Studiion Unisex Salon",
    location: "3rd Floor, Orion Mall, Mahodhipur",
    rating: 4.2,
    reviews: 247,
    distanceDetail: "1.5 km",
    timing: "10 am to 8 pm",
    days: "Mon - Sat",
  },
  {
    src: "/website/images/salon-pic3.png",
    distance: "2 KMS",
    tags: ["UNISEX", "MALE, FEMALE"],
    type: "MAKEUP",
    name: "Green Trends Unisex Salon",
    location: "3rd Floor, Orion Mall, Mahodhipur",
    rating: 4.2,
    reviews: 247,
    distanceDetail: "1.5 km",
    timing: "10 am to 8 pm",
    days: "Mon - Sat",
  },
  {
    src: "/website/images/salon-pic4.png",
    distance: "2 KMS",
    tags: ["UNISEX", "MALE, FEMALE"],
    type: "MAKEUP",
    name: "Green Trends Unisex Salon",
    location: "3rd Floor, Orion Mall, Mahodhipur",
    rating: 4.2,
    reviews: 247,
    distanceDetail: "1.5 km",
    timing: "10 am to 8 pm",
    days: "Mon - Sat",
  },
  {
    src: "/website/images/salon-pic5.png",
    distance: "2 KMS",
    tags: ["UNISEX", "MALE, FEMALE"],
    type: "MAKEUP",
    name: "Studiion Unisex Salon",
    location: "3rd Floor, Orion Mall, Mahodhipur",
    rating: 4.2,
    reviews: 247,
    distanceDetail: "1.5 km",
    timing: "10 am to 8 pm",
    days: "Mon - Sat",
  },
  {
    src: "/website/images/salon-pic6.png",
    distance: "2 KMS",
    tags: ["UNISEX", "MALE, FEMALE"],
    type: "MAKEUP",
    name: "Lakme",
    location: "3rd Floor, Orion Mall, Mahodhipur",
    rating: 4.2,
    reviews: 247,
    distanceDetail: "1.5 km",
    timing: "10 am to 8 pm",
    days: "Mon - Sat",
  },
  {
    src: "/website/images/salon-pic7.png",
    distance: "2 KMS",
    tags: ["UNISEX", "MALE, FEMALE"],
    type: "MAKEUP",
    name: "Green Trends Unisex Salon",
    location: "3rd Floor, Orion Mall, Mahodhipur",
    rating: 4.2,
    reviews: 247,
    distanceDetail: "1.5 km",
    timing: "10 am to 8 pm",
    days: "Mon - Sat",
  },
  {
    src: "/website/images/salon-pic8.png",
    distance: "2 KMS",
    tags: ["UNISEX", "MALE, FEMALE"],
    type: "MAKEUP",
    name: "Studiion Unisex Salon",
    location: "3rd Floor, Orion Mall, Mahodhipur",
    rating: 4.2,
    reviews: 247,
    distanceDetail: "1.5 km",
    timing: "10 am to 8 pm",
    days: "Mon - Sat",
  },
];

const TrendingSaloons: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="flex flex-col justify-between mx-auto gap-8 max-w-[1250px]">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl text-brand-700">
            Lucknow’s Trending Salons: Find the
          </h2>
          <h2 className="text-4xl  text-brand-700">Best Near You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-lato">
          {salons.map((salon, i) => (
            <div
              key={i}
              className="bg-brand-50 rounded-lg overflow-hidden border-2 border-brand-600 border-t-0 hover:bg-brand-100"
            >
              {/* <div className=""> */}
                <Image
                  src={salon.src}
                  alt={salon.name}
                  width={365}
                  height={250}
                  className="w-full h-auto object-fill "
                />
              {/* </div> */}
              <div className="p-2 flex space-x-2 text-sm">
                <button className=" bg-brand-500 rounded-md text-sm text-brand-50 py-1.5 px-2">
                  {salon.distance}
                </button>
                <span className=" bg-brand-500 rounded-md text-brand-50 py-1.5 px-2">
                  UNISEX
                </span>
                <span className=" bg-brand-500 rounded-md text-brand-50 py-1.5 px-2">
                  {salon.type}
                </span>
              </div>

              <div className="px-2 pb-2">
                <h3 className="text-xl font-sans text-dark-950">
                  {salon.name}
                </h3>
                <p className="text-sm text-dark-800">{salon.location}</p>
                <div className="flex items-center mt-2">
                  <span className="ml-1 text-sm">{salon.rating}</span>
                  <FaStar className="text-brand-200" />
                  <FaStar className="text-brand-200" />
                  <FaStar className="text-brand-200" />
                  <FaStar className="text-brand-200" />
                  <span className="ml-2 text-xs text-dark-800">
                    ({salon.reviews})
                  </span>
                </div>
              </div>

              <div className="px-2 py-2 flex justify-between text-dark-800 font-lato text-sm">
                <div className="flex items-center space-x-1 text-sm">
                  <span>{salon.distanceDetail}</span>
                </div>

                <GoDotFill className="text-[10px] my-1 text-brand-600 " />

                <div className="flex items-center  space-x-1">
                  <LuClock10 className="text-sm text-dark-400" />
                  <span>{salon.timing}</span>
                </div>

                <GoDotFill className="text-[10px] my-1 text-brand-600" />

                <div className="flex items-center space-x-1">
                  <FaCalendarAlt className="text-sm text-dark-400" />
                  <span>{salon.days}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button />
      </div>
    </section>
  );
};

export default TrendingSaloons;
