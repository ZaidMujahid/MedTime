import React from "react";
import HeroImage from "../assets/HeroImage.png";
const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="flex flex-col justify-center">
        <span className="font-bold text-[2.75rem] pb-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-900 md:pt-0 pt-6">Never Forget your Medicine</span>
        <p className="text-gray-900 font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia{" "}
          <br />  ducimus exercitationem quod culpa nulla dicta repellat{" "}
          <br /> voluptate enim
          dignissimos autem? Lorem ipsum dolor sit
        </p>
      </div>
      <div>
        <img src={HeroImage} alt="Hero" className="h-52 sm:h-52 md:h-[24rem] lg:h-[30rem] md:ml-14" />
      </div>
    </div>
  );
};

export default Hero;
