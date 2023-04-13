import React from "react";
import { Link } from "react-router-dom";

const Applyed = ( apply) => {
console.log(apply)

  const {
    id, 
    image,
    name,
    company_logo ,
    company_name,

    location,
    salary,
    Job_Type,
    Employment_type,
  } = apply.Apply;

  return (
    <div className="p-5  text-center flex items-center border mb-3">
      <div className="inline-flex mr-5 bg-slate-500 px-3 py-5 w-24 h-24">
        <img src={company_logo} alt="" className="" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3>{company_name}</h3>
          <h2>{Job_Type}</h2>
          <div className="flex">
            <p>{Job_Type}</p>
            <p>{Employment_type}</p>
          </div>
          <div className="flex">
            <h5>{location}</h5>
            <h5>{salary}</h5>
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
