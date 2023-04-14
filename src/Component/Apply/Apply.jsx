import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../utils/fakeDB";
import Applyed from "./Applyed";
import {CurrencyDollarIcon,BriefcaseIcon,EnvelopeIcon,PhoneIcon,MapPinIcon,ChevronDoubleDownIcon } from '@heroicons/react/24/solid'
import FullTime from "../FindJob/FullTime";

const Apply = () => {
  const { initialJob } = useLoaderData();
 const filterButton = () =>{
  
 }


  return (
    <>
     <div className="relative">
     <h2 className="my-24 text-center bold text-3xl">Applied Jobs</h2>
          <select className="select select-bordered w-fit max-w-xs absolute top-10 right-28">
                      <option disabled selected>Filter By <ChevronDoubleDownIcon/> </option>
                        <Link><button> <option>Fulltime</option></button></Link> <option>Fulltime</option>
                        <Link><button> <option>Fulltime</option></button></Link> <option>Remote</option>
                          
          </select>
      </div>
      <div className="mx-24 justify-center text-center">
        {initialJob.map((data) => 
           <Applyed Apply={data} key={data.id}></Applyed>
        )}
      </div>
    </>
  );
};

export default Apply;
