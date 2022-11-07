import React, { useState } from "react";
import { MdOutlineNotificationAdd } from "react-icons/md";
import AddMedicine from "./AddMedicine";
import AddAppoint from "./AddAppoint";
import PopupAppoint from "./PopupAppoint";
import PopupMed from "./PopupMed";
import { useChange } from "../hooks/useChange";

const Reminders = () => {
  const {change: sectionChange} = useChange();
  const handleSectionChange = () => {sectionChange();}
  const [change, setChange] = useState(false);
  const [med, setMed] = useState(false);
  const [appoint, setAppoint] = useState(false);
  const handleOnClose = () => {
    setMed(false)
    setAppoint(false);
  }
  
  return (
    <div>
      <div>
        <h1 className="text-center pt-2 font-bold text-gray-900 text-3xl">
          Medicines and Appointments
        </h1>
      </div>
      <div className="flex flex-row justify-evenly mt-8 shadow-lg">
        <button
          onClick={() => {
            setChange(false);
            handleSectionChange();
          }}
          className={`${
            change ? "text-sky-500" : "bg-sky-500 text-white"
          } "py-2 px-8 mb-2 font-medium text-lg bg-sky-50  hover:shadow-medium border-2 border-sky-600 rounded-lg hover:text-white hover:bg-sky-500 transition-all duration-300`}
        >
          Medicine
        </button>
        
        <button
          onClick={() => {
            setChange(true);
            handleSectionChange();
          }}
          className={`${
            change ? "bg-sky-500 text-white" : "text-sky-500"
          } py-2 px-8 mb-2 font-medium text-lg bg-sky-50 hover: shadow-medium border-2 border-sky-600 rounded-lg hover:text-white hover:bg-sky-500 transition-all duration-300`}
        >
          Appointments
        </button>
      </div>
      <button
        onClick = {()=>{setMed(true)}}
        className={`${
          change ? "hidden" : ""
        }
          flex align-center justify-center group-hover:text-white text-sky-500 bg-sky-200 rounded-lg px-8 py-2 mx-auto mt-10 font-medium text-lg hover:border-2 hover:border-sky-600 hover:bg-white hover:scale-600 duration-500`}
      >
        Add Medicine
        <MdOutlineNotificationAdd className="mx-2 mt-1 h-[1.3rem] w-[1.3rem]" />
      </button>
        {
          med ? <PopupMed onClose={handleOnClose} /> : "" 
        }
        {change ? "" : <AddMedicine/>}
      <button
        onClick = {()=>{setAppoint(true)}}
        className={`${
          change ? "" : "hidden"
        } 
        flex align-center justify-center group-hover:text-white text-sky-500 bg-sky-200 rounded-lg px-8 py-2 mx-auto mt-10 font-medium text-lg hover:border-2 hover:border-sky-600 hover:bg-white hover:scale-600 duration-500`}
      >
        Add Appointment
        <MdOutlineNotificationAdd className="mx-2 mt-1 h-[1.3rem] w-[1.3rem]" />
      </button>
        {
          appoint ? <PopupAppoint onClose={handleOnClose} /> : ""
        }
        {change ? <AddAppoint/> : ""}
    </div>
  );
};

export default Reminders;
