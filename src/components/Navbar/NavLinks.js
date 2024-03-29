import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylink";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div>
          {/* px-3 text-left md:cursor-pointer group */}
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group  hover:bg-slate-200 rounded-full px-3"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden  inline">
                {heading === link.name ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <FaChevronDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20  hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-slate-200 rotate-45"></div>
                  </div>
                  <div className="bg-slate-200 p-5 grid grid-cols-3 gap-10  ">
                    {link.sublinks.map((mysublink) => (
                      <div>
                        <h1 className="text-lg font-semibold">
                          {mysublink.Head}
                        </h1>
                        {mysublink.sublink.map((slink) => (
                          <div>
                            <li className="text-sm text-black my-2.5">
                              <Link
                                to={slink.link}
                                className="hover:text-primary"
                              >
                                {slink.name}
                              </Link>
                              {slink?.sublinkes?.map((item) => (
                                <div
                                  className="group-hover:block"
                                  style={{
                                    fontSize: "10px",
                                    marginLeft: "19px",
                                    marginBottom: "15px",
                                    marginTop: "5px",
                                  }}
                                >
                                  <Link
                                    to={item.link}
                                    className="hover:text-primary   "
                                  >
                                    {item.sname}
                                  </Link>
                                </div>
                              ))}
                            </li>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* mobile menu */}
          <div
            className={`
          ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center  "
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <div>
                        <li className="py-3 pl-12">
                          <Link to={slink.link} className="hover:text-primary">
                            {slink.name}
                          </Link>
                        </li>
                        {slink?.sublinkes?.map((item) => (
                          <div className="ml-14">
                            <Link
                              to={item.link}
                              className="hover:text-primary   "
                            >
                              {item.sname}
                            </Link>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
