import React from "react";
import { Link } from "react-router-dom";

const Applyed = ({ apply }) => {
  const {
    id,
    image,
    name,
    company,
    location,
    Salary,
    Job_Type,
    Employment_type,
  } = apply;
  return (
    <div className="p-5  text-center flex items-center border mb-3">
      <div className="inline-flex mr-5 bg-slate-500 px-3 py-5 w-24 h-24">
        <img src={image} alt="" className="" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3>{name}</h3>
          <h2>{company}</h2>
          <div className="flex">
            <p>{Job_Type}</p>
            <p>{Employment_type}</p>
          </div>
          <div className="flex">
            <h5>{location}</h5>
            <h5>{Salary}</h5>
          </div>
        </div>
        <div className="btn">
          <Link to={`../details/${id}`}>
            <button className="btn ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Applyed;
