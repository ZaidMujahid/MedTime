import React, { useState } from "react";

const SignUp = () => {

  const [change, setChange] = useState(false);
  const handleClick = () => {
     setChange(true);
  }
 
    return(
      <div className="flex h-screen justify-center items-center bg-sky-50">
      <div className="w-6/12 border-2 border-sky-400 shadow-xl rounded-xl bg-white">
        <h1 className="text-center text-4xl p-2 text-sky-600 font-bold m-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-900">
          MedTime
        </h1>
        <div className="flex">
          <div className="flex justify-center">
            <p className="p-2 pl-6 w-4/5 m-2 text-gray-500 mb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              eius officiis adipisci cumque, illo deleniti error architecto quam
              voluptatem, ut impedit delectus in enim maiores earum quas
              corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde exercitationem, dignissimos maxime impedit veritatis dolores, nobis reprehenderit facilis ex architecto! Omnis rerum, assumenda deserunt quidem amet laudantium tempora id?
            </p>
          </div>
          <div className="flex justify-center items-center">
            <form action="" className="pr-8">
              <div className="relative shadow-lg rounded-xl bg-sky-100 m-2">
                <button onClick = {() => {setChange(false)}} 
                  type="submit"
                  // className="border-2 border-sky-400 hover:bg-sky-400 hover:text-white rounded-xl hover:border-sky-200 p-2 m-2 mb-5"
                  className="px-7 py-2 relative bg-gradient-to-r from-sky-200 to-blue-400 rounded-xl"
                >
                  Login
                </button>
                <button  onClick = {() => {setChange(true)}}
                  type="submit"
                  // className="border-2 border-sky-400 hover:bg-sky-400 hover:text-white rounded-xl hover:border-sky-200 p-2 m-2 mb-5"
                  className="px-6 py-2 relative"
                >
                  Sign Up
                </button>
              </div>
              
              <input 
              className={`${
                change
                  ? 'outline-none'
                  : 'hidden'
              } border-2 rounded-xl hover:border-sky-400 p-2 m-2 `}
                type="text"
                placeholder="First Name"
                // className="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none"
                required
              />
              <input
              className={`${
                change
                  ? 'outline-none'
                  : 'hidden'
              } border-2 rounded-xl hover:border-sky-400 p-2 m-2 `}
                type="text"
                placeholder="Last Name"
                // className="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Gmail"
                className="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none"
                required
              />

              <button
              className={`${
                !change
                  ? ''
                  : 'hidden'
              } border-2 border-sky-400 hover:bg-sky-400 hover:text-white rounded-xl hover:border-sky-200 p-2 m-2 mb-5 shadow-lg`}
                type="submit"
                // className="border-2 border-sky-400 hover:bg-sky-400 hover:text-white rounded-xl hover:border-sky-200 p-2 m-2 mb-5 shadow-lg"
              >
                Login
              </button>
              <button
              className={`${
                change
                  ? ''
                  : 'hidden'
              } border-2 border-sky-400 hover:bg-sky-400 hover:text-white rounded-xl hover:border-sky-200 p-2 m-2 mb-5 shadow-lg`}
                type="submit"
                // className="border-2 border-sky-400 hover:bg-sky-400 hover:text-white rounded-xl hover:border-sky-200 p-2 m-2 mb-5 shadow-lg"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  
};

export default SignUp;
