import React from "react";
import HeroImage from "../assets/HeroImage.png";
const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="flex flex-col justify-center">
        <span className="font-bold text-[2.75rem] pb-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-900 md:pt-0 pt-6">Track Medicines and Appointments</span>
        <p className="text-gray-900 font-semibold text-xl">
          Keep track of your medicines and appoiontments in your busy schedule
          <br /> Also Navigate Hospitals and Pharmacies 
        </p>
      </div>
      <div>
        <img src={HeroImage} alt="Hero" className="h-52 sm:h-52 md:h-[24rem] lg:h-[30rem] md:ml-14 mx-auto" />
      </div>
    </div>
  );
};

export default Hero;
