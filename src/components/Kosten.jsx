import React from "react";
import screenbottom from "/screenbottom.png";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const Kosten = () => {
  return (
    <div className="w-full h-full  flex flex-col lg:flex-row items-center justify-center overflow-hidden text-white">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 flex items-start justify-center flex-col bg-[#AEBD48] p-6 lg:px-20 lg:py-12 h-full">
  <h1 className="text-5xl lg:text-8xl mt-4 lg:mt-8 mb-4 lg:mb-8">
    Was kostet es?
  </h1>
  <p className="text-lg lg:text-3xl mb-1 w-2/3">
    Medisuite ist komplett kostenlos. Ihre Bewohner profitieren von
    unseren attraktiven Heim­preisen. Vereinbaren Sie jetzt eine
    un­verbindliche Vorführung.
  </p>
  {/* <p className="text-lg lg:text-3xl mb-1">anbinden und zentral  über eine</p>
  <p className="text-lg lg:text-3xl mb-1">Plattform bestellen.</p> */}
   <button className="flex items-center space-x-2 mt-4 bg-black border border-none text-white font-bold md:px-4 md:py-2 px-2 py-1 text-xs rounded-full">
    <span>Demoanfragen</span>
    <FaArrowRight />
  </button>
</div>  

      {/* Right Section */}
      <div className="w-full lg:w-1/3 lg:bg-white bg-[#AEBD48] p-6 lg:relative flex justify-center items-center lg:justify-end">
        <img
          className="w-72 h-72 lg:w-96 lg:h-96 lg:absolute lg:-left-32  object-contain"
          src={screenbottom}
          alt="Medisuite"
        />
      </div>
    </div>
  );
};

export default Kosten;
