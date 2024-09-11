import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';
import Abrechung from './Abrechung';
import Verordnungen from './Verordnungen';
import Administration from './Administration';
import Logistik from './Logistik';
import Schnittstellen from './Schnittstellen';
import Kosten from './Kosten';
import Home from './Home';

// Define the content for each route
const contentMap = {
  '/': <Home />,
  '/Abrechung': <Abrechung />,
  '/Verordnungen': <Verordnungen />,
  '/Administration': <Administration />,
  '/Logistik': <Logistik />,
  '/Schnittstellen': <Schnittstellen />,
  '/Kosten': <Kosten />,



};

const MainArea = () => {
  const location = useLocation();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      // Get the path of the current location
      const currentPath = location.pathname;

      // Find the index of the slide that matches the current path
      const slideIndex = Object.keys(contentMap).indexOf(currentPath);

      // Slide to the appropriate index
      if (slideIndex !== -1) {
        swiperRef.current.swiper.slideTo(slideIndex);
      }
    }
  }, [location.pathname]);

  return (
    <div className="main-area bg-[#AEBD48] lg:bg-transparent h-min lg:h-screen w-full">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper lg:h-full w-full"
        spaceBetween={0} // No space between slides
        slidesPerView={1}
        ref={swiperRef}
      >
        {/* Render slides based on the content map */}
        {Object.keys(contentMap).map((path, index) => (
          <SwiperSlide key={index} className="">
          
              {contentMap[path]}
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainArea;