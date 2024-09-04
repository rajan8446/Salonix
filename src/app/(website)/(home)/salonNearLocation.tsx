/* eslint-disable react/no-unescaped-entities */
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const salons = [
  {
    name: "Civil Lines",
    num: 12,
  },
  {
    name: "Civil Lines",
    num: 12,
  },
  {
    name: "Civil Lines",
    num: 12,
  },
  {
    name: "Civil Lines",
    num: 12,
  },
  {
    name: "Civil Lines",
    num: 12,
  },
  {
    name: "Civil Lines",
    num: 12,
  },
];

const SalonNearLocation: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="flex flex-col justify-between gap-8 mx-auto max-w-[1250px]">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl text-[#7B2B3E]">
            Discover Salons Near Lucknow's
          </h2>
          <h2 className="text-4xl text-[#7B2B3E]">Most Renowned Spots</h2>
        </div>

        {/* Deals Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {salons.map((salon, index) => (
            <>
              <div
                key={index}
                className="rounded-lg border-1 overflow-hidden flex justify-between p-4 border-brand-400"
              >
                <div>
                  <p className="text-3xl">{salon.name}</p>
                  <span className="font-lato">{salon.num}</span>
                  <span className="font-lato"> salons</span>
                </div>
                <div>
                  <HiOutlineArrowLongRight className="m-4 text-3xl text-brand-900" />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalonNearLocation;
