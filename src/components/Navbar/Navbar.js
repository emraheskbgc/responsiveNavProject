import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "../Button";
import { BsList } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { data } from "../../assets/data";
//BsList
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between  ">
          <img src={Logo} alt="logo" className="cursor-pointer h-9" />
          <div
            className="text-3xl cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <BsList />}
          </div>
        </div>
        {/* divleri yan yana getiri */}
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] ml-9 ">
          <li className="hover:bg-slate-200 rounded-full ">
            <Link to="/" className="py-7 px-3 inline-block">
              Anasayfa
            </Link>
          </li>
          <NavLinks />
          <li className="hover:bg-slate-200 rounded-full  py-7">
            {data.map((data) => (
              <li className="px-3">
                <Link to={data.route} className="">
                  {data.name === "İletişim" ? data.name : ""}
                </Link>
              </li>
            ))}
          </li>
        </ul>
        <div className="  md:block hidden ">
          <Button />
        </div>
        {/* mobile nav   */}
        <ul
          className={`
        md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          {/* //  duration yazan kısım menüyü açıp kapatmaya yarıyor */}
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Anasayfa
            </Link>
          </li>

          <NavLinks />
          <li className="py-7 ">
            {data.map((data) => (
              <li className="px-3">
                <Link to={data.route}>
                  {data.name === "İletişim" ? data.name : ""}
                </Link>
              </li>
            ))}
          </li>
          <Button />
          <div className="py-5"></div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
