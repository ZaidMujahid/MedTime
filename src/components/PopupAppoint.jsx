import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useRemindersContext } from "../hooks/useRemindersContext";
const PopupAppoint = ({ onClose }) => {
  
  const {user} = useAuthContext()
  const { dispatch } = useRemindersContext()
  const [name, setName] = useState('');//for name
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!user){
      setError('You must be logged in')
      return
    }

    const appointment = {name, number, description, time}

    const response = await fetch('/appointments', {
      method: 'POST',
      body: JSON.stringify(appointment),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if(!response.ok){
      setError(json.error)
    }
    if(response.ok){
      //if response is ok then reset the field to empty
      setName('')
      setTime('')
      setNumber('')
      setDescription('')
      setError(null)
      dispatch({type: 'CREATE_REMINDERS', payload: json})
    }
  }


  return (
    <div className="flex justify-center items:center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50">
      <form
        action=""
        className="flex flex-col justify-center items:center shadow-2xl rounded-xl w-[300px] h-[390px] md:w-[400px] md:h-[490px] bg-white my-auto px-2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="" className="text-md font-semibold md:pt-2 md:pl-2 pt-1 pl-1">
          Doctor Name: *
        </label>
        <input
          type="text"
          className="border-2 rounded-xl hover:border-sky-400 md:p-2 md:m-2 p-1 m-1 outline-none"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="" className="text-md font-semibold md:pt-2 md:pl-2 pt-1 pl-1">
          Contact Number: *
        </label>
        <input
          type="number"
          className="border-2 rounded-xl hover:border-sky-400 md:p-2 md:m-2 p-1 m-1 outline-none"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <label htmlFor="" className="text-md font-semibold md:pt-2 md:pl-2 pt-1 pl-1">
          About:
        </label>
        <input
          type="text"
          className="border-2 rounded-xl hover:border-sky-400 md:p-2 md:m-2 p-1 m-1 outline-none"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label htmlFor="" className="text-md font-semibold md:pt-2 md:pl-2 pt-1 pl-1">
          Select Date & Time: *
        </label>
        <input
          type="datetime-local"
          className="border-2 w-auto rounded-xl hover:border-sky-400 md:p-2 md:m-2 p-1 m-1 outline-none"
          onChange={(e) => setTime(e.target.value)}
          value={time}
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
        {error && <div className="text-lg text-red-600 block text-center">{error}</div>}
      </form>
    </div>
  );
};

export default PopupAppoint;
