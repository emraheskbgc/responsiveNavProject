import React from "react";
import { data } from "../assets/data";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="flex flex-row  ">
      <button className=" flex  bg-primary px-6 py-2 mr-3 text-white rounded-full ">
        <Link to={data[1].route}>{data[1].name}</Link>
      </button>
      <br />
      <button className=" flex  bg-primary px-6 py-2 text-white rounded-full ">
        <Link to={data[2].route}>{data[2].name}</Link>
      </button>
    </div>
  );
};

export default Button;
