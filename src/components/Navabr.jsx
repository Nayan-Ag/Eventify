import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logos, menu, close } from "../assets";

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`sm:px-16 px-6 w-full navbars flex fixed top-0 left-0 z-20 bg-transparent `}
    >
      <div className="w-full flex justify-between items-center  mx-auto">
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logos}
            alt="logo"
            className="lg:h-[5rem] sm:h-[4rem] h-[5rem]  mt-[2rem] object-contain lg:ml-[6rem] sm:ml-[1rem] xs:"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row lg:gap-10 lg:mr-[4rem] sm:mr-[0rem] sm:gap-4">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-[#c0ccc0]" : "text-white-100"
              } hover:text-[#c0ccc0] lg:text-[22px] sm:text-[18px] font-medium cursor-pointer navitems`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-[#c0ccc0]" : "text-white-100"
                  }font-poppinsfont-medum cursor-pointer text-[16px] text-white-100 navitems`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
