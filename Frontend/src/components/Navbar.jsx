import { React } from "react";
import { GiMedicines } from "react-icons/gi";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  //for logout button
  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <nav className="shadow-md w-full fixed top-0 left-0 bg-sky-50 py-3 md:pt-3 md:py-3 px-2 md:px-7 flex items-center justify-between z-20">
        <div className="flex justify-between w-full">
          <div>

          <Link to="/">
            <div className="">
              <span>
                <GiMedicines className="inline text-3xl md:text-5xl md:mx-2 text-sky-600 mr-1" />
              </span>
              <h1 className="font-bold text-2xl cursor-pointer bg-clip-text text-gray-900 inline">
                Medtracker
              </h1>
            </div>
          </Link>
          </div>

          {!user && (
            <div>
              <Link to="/login">
                <button className="py-1 md:px-2 font-medium md:text-lg bg-sky-50 border-2 border-sky-600 rounded-lg text-sky-500 md:mr-2 hover:shadow-md px-1 sm:ml-4">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="py-1 md:px-2 font-medium md:text-lg border-2 border-sky-600 rounded-lg text-white bg-sky-500 md:ml-2 hover:shadow-md md:mr-2 px-1 ml-1 mr-2">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </div>

        {user && (
          <div className="flex">
            <span className=" py-1 text-lg font-medium mr-2">
              {user.email.split("@", 1)}
            </span>
            <button
              className="py-1 px-2 font-medium text-lg bg-sky-50 border-2 border-sky-600 rounded-lg hover:shadow-md"
              onClick={handleClick}
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
