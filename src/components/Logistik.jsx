import React from "react";
import { FaCheck } from "react-icons/fa";
import rollwagen from "/rollwagen.png";
import lille_labeled from "/lille_labeled.png";

const Logistik = () => {
  return (
    <div className="w-full font-segoe  h-full flex flex-col lg:flex-row items-center justify-center overflow-hidden lg:gap-0 gap-8 text-white">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 flex items-start justify-center flex-col bg-[#AEBD48] py-6 px-8 md:px-16 h-full">
      <h1 className="text-5xl lg:text-5xl mt-4 lg:mt-8 mb-4 lg:mb-8">
      Logistik
        </h1>
        <p className="text-base md:text-lg lg:text-3xl mb-1 w-full md:w-2/3 lg:w-9/12 font-light">
        Lieferungen etikettiert mit Bewohnernamen erhalten. Separate
        Rollwagen­lieferung für jede Abteilung.
        </p>
     
        <div className="mt-6 lg:mt-10">
          <ul className="space-y-2 lg:space-y-4 text-sm lg:text-lg">
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" />{" "}
              Krankenkassen-Abrechnung
            </li>
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> Rezeptmanagement
            </li>
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" />{" "}
              Bewohnerverwaltung
            </li>
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> Fremdsortiment
              (Apotheke)
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 lg:bg-white bg-[#AEBD48] px-8 md:px-16 md:py-4 lg:py-0 lg:px-0  lg:relative flex items-center justify-center md:block lg:flex">
        <img
          className="w-96 h-96  hidden md:flex lg:w-full lg:h-[600px] xl:w-[420px] xl:h-[500px] md:absolute lg:-left-28 xl:-left-48  object-contain"
          src={rollwagen}
          alt="Medisuite"
        />
        <img
          className="w-80  h-80   md:w-60 md:right-48 md:-bottom-[400px]  lg:w-80 lg:h-80  xl:w-60 xl:h-60 xl:-bottom-60 md:absolute lg:left-0 xl:left-28  object-contain"
          src={lille_labeled}
          alt="Medisuite"
        />
      </div>
    </div>
  );
};

export default Logistik;
