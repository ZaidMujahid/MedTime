import React, { useState } from "react";

const PopupMed = ({ onClose }) => {
  const [count, setCount] = useState(false);
  return (
    <div className="flex justify-center items:center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <form
        action=""
        className="flex flex-col justify-center items:center shadow-2xl rounded-xl w-[400px] h-[500px] bg-white my-auto px-2"
      >
        <label htmlFor="" className="text-md font-semibold pt-2 pl-2">
          Medicine Name:
        </label>
        <input
          type="text"
          className="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none "
        />

        <div className="flex justify-around p-1">
          <div>
            <input
              type="radio"
              name=""
              value=""
              onClick={() => {
                setCount(!count);
              }}
              className="m-2 w-4 h-4 outline-none focus:ring-2 focus:ring-blue-300 border-gray-300"
              checked
            />
            <label
              for="option-1"
              className="relative text-md bottom-0.5 font-medium text-gray-900"
            >
              Count
            </label>
          </div>
          <div>
            <input
              type="radio"
              name=""
              value=""
              onClick={() => {
                setCount(!count);
              }}
              className="m-2 w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
              for="option-1"
              className="relative text-md bottom-0.5 font-medium text-gray-900"
            >
              ml
            </label>
          </div>
        </div>

        <label
          htmlFor=""
          className={`${count ? "hidden" : ""} 
            text-md font-semibold pt-2 pl-2`}
        >
          Enter Count:
        </label>
        <input
          type="number"
          className={`${count ? "hidden" : ""} 
            border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none`}
        />
        <label
          htmlFor=""
          className={`${count ? "" : "hidden"} 
            text-md font-semibold pt-2 pl-2`}
        >
          Enter ml:
        </label>
        <input
          type="number"
          className={`${count ? "" : "hidden"} 
            border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none`}
        />

        <label htmlFor="" className="text-md font-semibold pt-2 pl-2">
          About:
        </label>
        <input
          type="text"
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
          <button className="p-2 my-2 mx-2 font-semibold text-md bg-sky-100 hover:shadow-medium rounded-xl text-gray-900"
          onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PopupMed;
