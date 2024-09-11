import React, { useEffect, useRef } from "react";
import aberungimg from "/aberungimg.jpg";
import { FaCheck } from "react-icons/fa";

const Abrechung = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const intervalDelay = 1500; // Delay between animations in milliseconds
    const animationDuration = 50; // Duration of each animation in milliseconds
    let currentIndex = 0;

    function animateImages() {
      if (imagesRef.current.length === 0) return; // Ensure there are images to animate

      // Move current image up
      imagesRef.current[currentIndex].style.transform = 'translateY(0px)';
      imagesRef.current[currentIndex].style.transition = `transform ${animationDuration}ms`;

      // Move current image back down after animationDuration
      setTimeout(() => {
        imagesRef.current[currentIndex].style.transform = 'translateY(-8%)';
      }, animationDuration);

      // Increment index or reset to 0 if at the end
      currentIndex = (currentIndex + 1) % imagesRef.current.length;
    }

    // Start the animation
    animateImages(); // Immediately start the first animation

    const animationInterval = setInterval(() => {
      animateImages();
    }, intervalDelay + animationDuration);

    // Cleanup interval on component unmount
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center text-white">
      {/* Left Section */}
      <div className="w-full h-full lg:w-2/3 bg-[#AEBD48] p-6 lg:px-20 lg:py-12 flex flex-col justify-center">
        <h1 className="text-5xl lg:text-8xl mt-4 lg:mt-8 mb-4 lg:mb-8">Abrechnung</h1>
        <p className="text-lg lg:text-3xl mb-1">Direktabrechnung mit den</p>
        <p className="text-lg lg:text-3xl mb-1">Krankenkassen durch uns.</p>
        <p className="text-lg lg:text-3xl mb-1">Keine Schnittstelle. Keine Kosten.</p>
        <p className="text-lg lg:text-3xl mb-1">Kein Aufwand.</p>

        <div className="mt-6 lg:mt-10">
          <ul className="space-y-2 lg:space-y-4 text-sm lg:text-lg">
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> Alle Schweizer Krankenkassen
            </li>
            <li className="flex items-center">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> 80% automatisch
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full  bg-[#AEBD48] p-6 flex justify-center lg:hidden">
        <img
          className="w-full h-full object-contain"
          src={aberungimg}
          alt="aberungimg"
        />
      </div>
      <div className="w-full hidden lg:flex lg:w-1/3 bg-[#AEBD48] lg:bg-white p-4 h-full  items-end justify-end relative">
        <img
          ref={(el) => (imagesRef.current[0] = el)}
          src={aberungimg}
          className="w-[80%] h-[80%] xl:bottom-8 xl:left-8 lg:bottom-2 lg:left-8 border absolute border-gray-400 z-[100]"
          alt=""
        />
        <img
          ref={(el) => (imagesRef.current[2] = el)}
          src={aberungimg}
          className="w-[80%] h-[80%] xl:bottom-12 xl:left-12 lg:bottom-6 lg:left-12  border absolute border-gray-400 z-[80]"
          alt=""
        />
        <img
          ref={(el) => (imagesRef.current[1] = el)}
          src={aberungimg}
          className="w-[80%] h-[80%] xl:bottom-10   xl:left-10 lg:bottom-4 lg:left-10 border absolute border-gray-400 z-[90]"
          alt=""
        />
        <img
          ref={(el) => (imagesRef.current[3] = el)}
          src={aberungimg}
          className="w-[80%] h-[80%] xl:bottom-14 xl:left-14 lg:bottom-8 lg:left-14 border absolute border-gray-400 z-40"
          alt=""
        />
        <img
          ref={(el) => (imagesRef.current[4] = el)}
          src={aberungimg}
          className="w-[80%] h-[80%] xl:bottom-16 xl:left-16 lg:bottom-10 lg:left-16 border absolute border-gray-400 z-90"
          alt=""
        />
       
      </div>
    </div>
  );
};

export default Abrechung;
