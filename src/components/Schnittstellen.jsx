import React from "react";
import sortiment from "/sortiment.png";
import { FaCheck } from "react-icons/fa";

const Schnittstellen = () => {
  return (
    <div className="w-full h-full font-segoe  flex flex-col lg:flex-row items-center justify-center overflow-hidden  lg:gap-0 gap-8 text-white">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 flex items-start justify-center flex-col bg-[#AEBD48] py-6 px-8 md:px-16 h-full">
      <h1 className="text-5xl lg:text-5xl mt-4 lg:mt-8 mb-4 lg:mb-8">
      Schnittstellen
        </h1>
        <p className="text-base md:text-lg lg:text-3xl mb-1 w-full md:w-2/3 lg:w-9/12 font-light">
        Artikel von Drittanbietern anbinden und zentral über eine Plattform
          bestellen.
        </p>
     
      

        <div className="mt-6 lg:mt-10">
          <ul className="space-y-2 lg:space-y-4 text-sm lg:text-lg">
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> Schnittstelle zu
              Ihrer Apotheke
            </li>
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> Fremdartikel
              hinzufügen & bewohnerbezogen bestellen
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 lg:bg-white bg-[#AEBD48] px-8 md:px-16 md:py-4 lg:py-0 lg:px-0  lg:relative flex justify-center items-center lg:justify-end">
        <img
          className="w-96 h-96 lg:w-72 lg:h-72  lg:absolute lg:-left-16    xl:-left-36  object-contain"
          src={sortiment}
          alt="Medisuite"
        />
      </div>
    </div>
  );
};

export default Schnittstellen;

