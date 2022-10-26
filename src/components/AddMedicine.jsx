import React, { useEffect } from "react";
import format from "date-fns/format";
import { useRemindersContext } from "../hooks/useRemindersContext";
import { MdDeleteOutline } from "react-icons/md";

const AddMedicine = () => {
  const {reminders, dispatch} = useRemindersContext()

  useEffect(() => {
    const fetchMedicine = async () => {
      const response = await fetch("/reminders");
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_REMINDERS', payload: json})
      }
    };
    fetchMedicine();
  }, []);


  // Notification.requestPermission().then((allowed) => {
  //   if (allowed === "granted") setPermission(true);
  // });

  //Tried this outside the return function
  // medicines && medicines.map((medicine) =>(
  //   if((medicine.time == new Date().toISOString()) && (permission == true)){
  //     return new Notification("Example Notification")
  //   }
  // ))

  // console.log(new Date().toISOString());
  
  return (
    <div>
      <div className="border-sky-500">
        {reminders &&
          reminders.map((medicine) => (
            <div key={medicine._id} className="p-4 m-4 bg-sky-50 hover:shadow-lg rounded-xl ">
              <h2 className="font-bold text-2xl text-sky-900 inline">
                {medicine.title}
              </h2>
              <span className="absolute right-[50px] md:right-20 mx-2 p-1 text-2xl bg-red-100 rounded-full hover:text-red-600">
                <MdDeleteOutline onClick={
                async () => {
                  const response = await fetch('/reminders/' + medicine._id, {
                    method: 'DELETE'
                  })
                  const json = await response.json()
              
                  if(response.ok){
                    dispatch({type: 'DELETE_REMINDER', payload: json})
                  }
                }
                }/>
              </span>
              
              <p className="pt-4 font-medium"><strong>Count: </strong>
                {medicine.count}
              </p>
              <p className="font-medium"><strong>Description: </strong>
                {medicine.about}
              </p>
              <p className="font-medium"><strong>Remind At: </strong>
                {format(new Date(medicine.time), "ccc PPp")}
              </p>
              {/* Tried this inside the return function while mapping through the array*/}
              {/* if((medicine.time == new Date().toISOString()) && (permission == true)){
                  new Notification("Example Notification")
                }  */}
            </div>
          ))}
      </div>

      {/* Tried this inside the return function while mapping seperately */}
      {/* <div>
        {medicines && medicines.map((medicine) => (
              <div>
                {medicine.about}
              if((medicine.time == new Date().toISOString()) && (permission == true)){
                new Notification("Example Notification")
              }
              </div>
        ))}
      </div> */}
    </div>
  );
};

export default AddMedicine;
