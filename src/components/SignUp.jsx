import React from "react";

const SignUp = () => {
  return (
    <div class="flex h-screen justify-center items-center bg-sky-50">
      <div class="w-6/12 border-2 border-sky-400 shadow-xl rounded-xl bg-white">
        <h1 class="text-center text-4xl p-2 text-sky-600 font-bold m-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-900">
          MedTime
        </h1>
        <div class="flex">
          <div class="flex justify-center">
            <p class="p-2 pl-6 w-4/5 m-2 text-gray-500 mb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              eius officiis adipisci cumque, illo deleniti error architecto quam
              voluptatem, ut impedit delectus in enim maiores earum quas
              corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde exercitationem, dignissimos maxime impedit veritatis dolores, nobis reprehenderit facilis ex architecto! Omnis rerum, assumenda deserunt quidem amet laudantium tempora id?
            </p>
          </div>
          <div class="flex justify-center items-center">
            <form action="" class="pr-8">
              <div class="relative shadow-lg rounded-xl bg-sky-100 m-2">
                <button
                  type="submit"
                  // class="border-2 border-sky-400 hover:bg-sky-400 hover:text-white rounded-xl hover:border-sky-200 p-2 m-2 mb-5"
                  class="px-7 py-2 relative bg-gradient-to-r from-sky-200 to-blue-400 rounded-xl"
                >
                  Login
                </button>
                <button
                  type="submit"
                  // class="border-2 border-sky-400 hover:bg-sky-400 hover:text-white rounded-xl hover:border-sky-200 p-2 m-2 mb-5"
                  class="px-6 py-2 relative"
                >
                  Sign Up
                </button>
              </div>
              <input
                type="text"
                placeholder="First Name"
                class="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                class="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Gmail"
                class="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none"
                required
              />
              <input
                type="password"
                placeholder="Password"
                class="border-2 rounded-xl hover:border-sky-400 p-2 m-2 outline-none"
                required
              />
              <button
                type="submit"
                class="border-2 border-sky-400 hover:bg-sky-400 hover:text-white rounded-xl hover:border-sky-200 p-2 m-2 mb-5 shadow-lg"
              >
                Login
              </button>
              <button
                type="submit"
                class="border-2 border-sky-400 hover:bg-sky-400 hover:text-white rounded-xl hover:border-sky-200 p-2 m-2 mb-5 shadow-lg"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
