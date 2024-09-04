/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";


const SectionHeading: React.FC =()=>{
    const [heading, setHeading] = useState("");
    return (
      <div>
        <div className="text-center mb-8">
          <h2 className="text-4xl text-[#7B2B3E]">{heading}</h2>
        </div>
      </div>
    );
}

export default SectionHeading;