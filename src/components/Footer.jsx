import React from 'react';
import logo1 from "/gvs-group.png";
import logo2 from "/dhys-group.svg";

const Footer = () => {
    return (
        <div className='bg-[#212529] text-white py-6 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between'>
            <div className='text-center md:text-left'>
                <p className='text-sm md:text-base md:w-9/12'>
                    © Scheitlin Medical und Medisuite sind Marken der Scheitlin Papier AG. Alle Rechte vorbehalten.
                </p>
            </div>
            <div className='flex md:flex-row items-center justify-center gap-4 md:gap-8 mt-4 md:mt-0'>
                <img className='h-12 md:h-16' src={logo1} alt="Logo 1" />
                <img className='h-12 md:h-16' src={logo2} alt="Logo 2" />
            </div>
        </div>
    );
};

export default Footer;
