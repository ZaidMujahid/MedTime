import React, { useEffect } from "react";
import format from "date-fns/format";
import { useRemindersContext } from "../hooks/useRemindersContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { MdDeleteOutline } from "react-icons/md";

const AddMedicine = () => {
  const {reminders, dispatch} = useRemindersContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchAppointment = async () => {
      const response = await fetch("/appointments", {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_REMINDERS', payload: json})
      }
    };
    if(user){
      fetchAppointment();
    }
  }, [dispatch, user]);

  return (
    <div>
      <div className="border-sky-500">
        {reminders &&
          reminders.map((appointment) => (
            <div key={appointment._id} className="p-4 m-4 bg-sky-50 hover:shadow-lg rounded-xl ">
              <h2 className="font-bold text-2xl text-sky-900 inline"><p className="font-bold text-2xl text-sky-900 inline">Dr.</p>
                {appointment.name}
              </h2>
              <span className="absolute right-[50px] md:right-20 mx-2 p-1 text-2xl bg-red-100 rounded-full hover:text-red-600">
                <MdDeleteOutline onClick={
                async () => {
                  if(!user) {return}
                  const response = await fetch('/appointments/' + appointment._id, {
                    method: 'DELETE',
                    headers: {
                      'Authorization': `Bearer ${user.token}`
                    }
                  })
                  const json = await response.json()
              
                  if(response.ok){
                    dispatch({type: 'DELETE_REMINDER', payload: json})
                  }
                }
                }/>
              </span>

              <p className="pt-4 font-medium"><strong>Contact Number: </strong>
                {appointment.number}
              </p>
              <p className="font-medium"><strong>Description: </strong>
                {appointment.description}
              </p>
              <p className="font-medium"><strong>Appointment At: </strong>
                {format(new Date(appointment.time), "ccc PPp")}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AddMedicine;
