import Image from "next/image";
import { FaCalendarAlt, FaClock, FaStar } from "react-icons/fa";
import { LuClock10 } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import Badges from "./Badges";

interface SalonCardProps {
  src: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  distance: string;
  distanceDetail: string;
  timing: string;
  days: string;
  type: string;
}

const CardsComp: React.FC<SalonCardProps> = ({
  src,
  name,
  location,
  rating,
  reviews,
  distance,
  distanceDetail,
  timing,
  days,
  type,
}) => {
  return (
    <div className="bg-brand-50 rounded-sm overflow-hidden shadow-sm shadow-brand-600 border-t-0 hover:bg-brand-100">
      <div className="overflow-hidden">
        <Image
          src={src}
          alt={name}
          width={365}
          height={250}
          className="w-full h-auto object-fill transition-transform duration-300 ease-in-out hover:scale-90"
        />
      </div>
      <div className="p-2 flex flex-wrap gap-1 text-xs text-brand-50">
        <Badges text={distance} />
        <Badges text="UNISEX" />
        <Badges text={type} />
      </div>

      <div className="px-2 pb-2">
        <h3 className="text-xl font-sans text-dark-950">{name}</h3>
        <p className="text-sm text-dark-800">{location}</p>
        <div className="flex items-center mt-2">
          <span className="ml-1 text-sm">{rating}</span>
          <FaStar className="text-brand-200" />
          <FaStar className="text-brand-200" />
          <FaStar className="text-brand-200" />
          <FaStar className="text-brand-200" />
          <span className="ml-2 text-xs text-dark-800">({reviews})</span>
        </div>
      </div>

      <div className="px-2 py-2 flex justify-between text-dark-800 font-lato text-sm">
        <div className="flex items-center space-x-1 text-sm">
          <span>{distanceDetail}</span>
        </div>

        <GoDotFill className="text-[10px] my-1 text-brand-600 " />

        <div className="flex items-center  space-x-1">
          <LuClock10 className="text-sm text-dark-400" />
          <span>{timing}</span>
        </div>

        <GoDotFill className="text-[10px] my-1 text-brand-600" />

        <div className="flex items-center space-x-1">
          <FaCalendarAlt className="text-sm text-dark-400" />
          <span>{days}</span>
        </div>
      </div>
    </div>
  );
};

export default CardsComp;
