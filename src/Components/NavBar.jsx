import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = ({isMenuDisplayed, setMenuDisplay}) => {
    const links = [
        {
        id: 1,
        link: "home",
        },
        {
        id: 2,
        link: "About",
        },
        {
        id: 3,
        link: "Projects",
        },
        {
          id : 4,
          link: "Skills",
        }
    ];

    return (
      <>
        <div className="absolute backdrop-blur-none w-full h-24 text-white z-20">
          <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8 h-full">
            <div>
              <h1 className="text-white tracking-widest text-3xl font-extrabold">Atharva Phatak</h1>
            </div>
  
            <div className="hidden lg:flex items-center">
              <ul className="flex">
                {links.map(({ id, link }) => (
                  <li
                    key={id}
                    className="p-4 uppercase duration-200 text-2xl hover:scale-105 cursor-pointer"
                  >
                    <Link to={link} smooth duration={500}>
                      {link} 
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
  
            <div
              onClick={() => setMenuDisplay(!isMenuDisplayed)}
              className="block lg:hidden cursor-pointer"
            >
              {isMenuDisplayed ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
          </div>
        </div>
  
        <div
          className={`w-full bg-black text-white absolute z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
            isMenuDisplayed ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
          }`}
        >
          <ul>
            {links.map(({ id, link }) => (
              <li key={id} className="p-4 uppercase cursor-pointer z-20">
                <Link
                  onClick={() => setMenuDisplay(false)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };
  

export default NavBar;