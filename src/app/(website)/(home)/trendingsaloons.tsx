/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { FaCalendarAlt, FaClock, FaStar } from "react-icons/fa";
import { LuClock10 } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import Button from "./button";
import HeadingTag from "./HeadingTag";
import CardsComp from "./CardsComp";

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
          <HeadingTag
            text="Lucknow’s Trending Salons: Find the Best Near You"
            color="text-heading-50"
            maxWidth="600px"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 font-lato">
          {salons.map((salon, i) => (
            <CardsComp
              key={i}
              src={salon.src}
              name={salon.name}
              location={salon.location}
              rating={salon.rating}
              reviews={salon.reviews}
              distance={salon.distance}
              distanceDetail={salon.distanceDetail}
              timing={salon.timing}
              days={salon.days}
              type={salon.type}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Button text="BOOK NOW" />
        </div>
      </div>
    </section>
  );
};

export default TrendingSaloons;
