import React from "react";

const PopupAppoint = ({ onClose }) => {
  return (
    <div className="flex justify-center items:center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <form
        action=""
        className="flex flex-col justify-center items:center shadow-2xl rounded-xl w-[400px] h-[525px] bg-white my-auto px-2"
      >
        <label htmlFor="" className="text-md font-semibold pt-2 pl-2">
          Doctor Name:
        </label>
        <input
          type="text"
          className="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none "
        />
        <label htmlFor="" className="text-md font-semibold pt-2 pl-2">
          Contact Number:
        </label>
        <input
          type="number"
          className="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none "
        />
        <label htmlFor="" className="text-md font-semibold pt-2 pl-2">
          About:
        </label>
        <input
          type="text"
          className="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none "
        />

        <label htmlFor="" className="text-md font-semibold pt-2 pl-2">
          Select Date:
        </label>
        <input
          type="date"
          className="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none"
        />
        <label htmlFor="" className="text-md font-semibold pt-2 pl-2">
          Select Time:
        </label>
        <input
          type="time"
          className="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none"
        />

        <div className="flex justify-center p-1">
          <button className="p-2 my-2 mx-2 font-semibold text-md bg-sky-500  hover:bg-sky-400 rounded-xl text-white">
            Save
          </button>
          <button
            className="p-2 my-2 mx-2 font-semibold text-md bg-sky-100 hover:shadow-medium rounded-xl text-gray-900"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PopupAppoint;
