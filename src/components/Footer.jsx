import React from "react";
import { GiMedicines } from "react-icons/gi";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full text-sm flex flex-col shadow-xl bg-sky-100 px-4 sm:px-5 md:px-6 lg:px-8 "
    >
      <div className="flex flex-row space-x-8 pb-2 pt-2">
        <div className="flex flex-col md:flex-row space-x-4 mx-auto items-center">
          <div className="items-start">
            <span>
              <GiMedicines className="inline text-5xl mx-2 text-sky-600" />
            </span>
            <h1 className="font-bold text-3xl cursor-pointer bg-clip-text text-gray-900 inline">
              Medtime
            </h1>
          </div>
          <div className="flex flex-col text-center mx-auto pb-2 pt-4">
            <a
              href="mailto: zaidmujahid274@gmail.com"
              target="_blank"
              className="text-xs sm:text-sm md:text-lg font-medium"
              rel="noreferrer"
            >
              Write to us: zaidmujahid274@gmail.com
            </a>
            <a
              href="https://github.com/ZaidMujahid/MedTime"
              target="_blank"
              className="text-xs sm:text-sm md:text-lg font-medium"
              rel="noreferrer"
            >
              Contribute: github.com/ZaidMujahid/MedTime
            </a>
          </div>
        </div>

        {/* <div className="basis-[36%] hidden  md:block ">
            <h5 className="font-bold text-lg mb-4">Page Section</h5>
            <div className="text-start space-y-2 -mt-2 ">
              <p className="">
                <a href="/" className="hover:text-sky-500 text-[15px] font-medium">
                  {" "}
                  Home{" "}
                </a>{" "}
              </p>
              <p className="">
                <a href="#event" className="hover:text-sky-500 text-[15px] font-medium">
                  {" "}
                  Reminders{" "}
                </a>{" "}
              </p>
              <p className="">
                <a href="#team" className="hover:text-sky-500 text-[15px] font-medium">
                  {" "}
                  Nearby{" "}
                </a>{" "}
              </p>
            </div> */}

        {/* </div> */}
      </div>
      <div className="border-t-2 border-sky-200">
        <p className="text-xs md:text-lg text-center py-1 font-medium">
          &copy; Medtime 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
