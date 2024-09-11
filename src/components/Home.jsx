import React from "react";
import homeimg from "/homeslider.png";
import { FaCheck } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full h-full  flex flex-col lg:flex-row items-center justify-center overflow-hidden text-white">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 flex items-start justify-center flex-col bg-[#AEBD48] p-6 lg:px-20 lg:py-12 h-full">
        <h1 className="text-5xl lg:text-8xl mt-4 lg:mt-8 mb-4 lg:mb-8">Medisuite</h1>
        <p className="text-lg lg:text-3xl mb-1">Die Komplettlösung</p>
        <p className="text-lg lg:text-3xl mb-1">für eine unkomplizierte</p>
        <p className="text-lg lg:text-3xl mb-1 font-bold">MiGeL-Versorgung</p>
        <div className="mt-6 lg:mt-10">
          <ul className="space-y-2 lg:space-y-4 text-sm lg:text-lg">
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> Krankenkassen-Abrechnung
            </li>
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> Rezeptmanagement
            </li>
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> Bewohnerverwaltung
            </li>
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> Fremdsortiment (Apotheke)
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 lg:bg-white bg-[#AEBD48] p-6 lg:relative flex justify-center items-center lg:justify-end">
        <img
          className="w-72 h-72 lg:w-96 lg:h-96 lg:absolute lg:-left-32  object-contain"
          src={homeimg}
          alt="Medisuite"
        />
      </div>
    </div>
  );
};

export default Home;
