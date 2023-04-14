import React from "react";
import { Link } from "react-router-dom";
import {CurrencyDollarIcon,BriefcaseIcon,EnvelopeIcon,PhoneIcon,MapPinIcon } from '@heroicons/react/24/solid'
const Applyed = ( apply) => {


  const {
    id, 
    remote_or_onsite,
    company_logo ,
    company_name,

    location,
    salary,
    job_title,
    fulltime_or_part_time,
  } = apply.Apply;

  return (
    <div className="p-5 flex justify-between items-center border mb-3">
    <div className="flex text-start">
      <div className=" mr-5 my-auto bg-slate-100 px-3 py-5 w-24 h-auto ">
        <img src={company_logo} alt="" className="" />
      </div>
      <div className="">
          <h3>{job_title}</h3>
          <h2>{company_name}</h2>
          <div className="flex">
            <p className="border px-2 my-2 border-cyan-500">{remote_or_onsite}</p>
            <p className="border px-2 my-2 ml-2 border-cyan-500">{fulltime_or_part_time}</p>
          </div>
          <div className=" flex gap-2">
            <h5 className="flex"><MapPinIcon className="w-6 h-6 text-indigo-600"/>{location}</h5>
            <h5 className="flex"><CurrencyDollarIcon className="w-6 h-6 text-indigo-600 " />{salary}</h5>
          </div>
        </div>
        
      </div>
      <div className="">
          <Link to={`../details/${id}`}>
            <button className="btn bg-blue-700 border-none">View Details</button>
          </Link>
        </div>
    </div>
  );
};

export default Applyed;
