import {React, useState} from "react";
import { GiMedicines, GiHamburgerMenu } from "react-icons/gi";
import { MdAccountCircle, MdClose } from "react-icons/md";
const Navbar = () => {
  let Links = [
    {name: "Home", link:"/"},
    {name: "Reminders", link:"/Reminders"},
    {name: "Nearby", link:"/Nearby"},
  ];
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="shadow-md w-full fixed top-0 left-0 bg-sky-50 py-3 px-7 md:flex items-center justify-between">
        <div>
        <span>
        <GiMedicines className="inline text-5xl mx-2 text-sky-900"/>
        </span>
        <h1 className="font-bold text-2xl cursor-pointer bg-clip-text text-gray-900 inline">Medtime</h1>
        </div>
        
        <div>
          <ul className={`md:flex items-center absolute bg-sky-50 w-full left-0 md:z-auto md:w-auto md:pb-0 pb-2 md:pl-0 pl-10 z-[-1] md:static shadow-md md:shadow-none ${open ? 'top-20':'top-[-490px]'}`}>
            {
            Links.map((link)=>(
              <li className="md:mr-9 text-xl md:my-0 my-7 items:center">
                <a href={link.link} className="text-gray-900 hover:text-sky-600 duration-500 font-semibold">{link.name}</a>
              </li>
            ))
          }   
          </ul>
        </div>
          <button onClick={() => setOpen(!open)}className="ml-8 text-3xl cursor-pointer text-sky-900 hover:text-sky-600 duration-500 absolute top-5 right-20 md:hidden">
          {open ? <MdClose/> : <GiHamburgerMenu/>}
          </button>
          <button>
          <MdAccountCircle className="ml-8 text-3xl cursor-pointer text-sky-900 hover:text-sky-600 duration-500 absolute top-5 right-8"/>
          </button>
      </nav>
    </div>
  );
};

export default Navbar;
