import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {MapPinIcon,CurrencyDollarIcon,BriefcaseIcon } from '@heroicons/react/24/solid'

const ViewDetails = () => {
    const data = useParams();
    const receivedData = useLoaderData()
    const [details,setDetails] = useState({})
    useEffect(()=>{
        if(receivedData){
            const foundData = receivedData.find(item=>item.id==data.id);
            setDetails(foundData)  
          }
    })
    const {
        job_description,job_responsibility,educational_requirements,experiences,
        job_title,salary,contact_information,location
        } = details
    return (
        <div className=' mt-20'>
        <div className='lg:flex md:flex-none lg:justify-around'>
        <div className=''>
             <p className='bold m-2'>Job Description:<span className="font-light">{job_description}</span></p>
             <p className='bold m-2'>Job Responsibility:<span className="font-light">{job_responsibility}</span></p>
             <p className='bold m-2'>Educational Requirements:<span className="font-light">{educational_requirements}</span></p>
             <p className='bold m-2'>Experiences:<span className="font-light">{experiences}</span></p>
           </div>
           <div className='card w-96 bg-fuchsia-100 ml-20 shadow-xl text-center'>
            <div className="text-start mx-auto">
                <h2 className='text-center bold'>Job Details</h2>
                <hr className="text-neutral-900 m-2"/>
                <h4 className='flex '><CurrencyDollarIcon className='w-6 h-6 text-indigo-600 mr-1'/>  Salary: <span>{salary}</span> </h4>
                <h4 className='flex'> <BriefcaseIcon className='w-6 h-6 text-indigo-600 mr-1'/> Job title: <span>{job_title}</span></h4>
            </div>
           </div>
        </div>
        </div>
    );
};

export default ViewDetails;