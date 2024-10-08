/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import React from "react";

const services = [
  { src: "/website/icons/haircut.svg", label: "Haircut and Styling" },
  { src: "/website/icons/coloring.svg", label: "Coloring Services" },
  { src: "/website/icons/treatment.svg", label: "Hair Treatments" },
  { src: "/website/icons/blowdry.svg", label: "Blow Dry and Styling" },
  { src: "/website/icons/manicure.svg", label: "Manicure and Pedicure" },
  { src: "/website/icons/facial.svg", label: "Facial Treatments" },
  { src: "/website/icons/waxing.svg", label: "Waxing Services" },
  { src: "/website/icons/threading.svg", label: "Threading" },
  { src: "/website/icons/massage.svg", label: "Massage Therapy" },
  { src: "/website/icons/makeup.svg", label: "Makeup Application" },
  { src: "/website/icons/bridal.svg", label: "Bridal Services" },
  { src: "/website/icons/extensions.svg", label: "Hair Extensions" },
  { src: "/website/icons/grooming.svg", label: "Men’s Grooming" },
  { src: "/website/icons/specialty.svg", label: "Specialty Treatments" },
];

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-8">
          {services.map((service, index) => (

                <div key={index} className="text-center">
                  <Image
                    src={service.src}
                    alt={service.label}
                    width={24}
                    height={24}
                    className="w-24 h-30 mx-auto mb-2 bg-[#F6D5D7] p-4"
                  />
                  <p className="text-sm text-[#40111B]">{service.label}</p>
                </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
