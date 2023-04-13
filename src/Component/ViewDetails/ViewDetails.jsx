import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import {CurrencyDollarIcon,BriefcaseIcon,EnvelopeIcon,PhoneIcon,MapPinIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../utils/fakeDB';




const ViewDetails = () => {
    const data = useParams()
    const receivedData = useLoaderData()
    const [details,setDetails] = useState({})
 
       const handleDetails = (id) =>{
     
        addToDb(id)
       }
    useEffect(()=>{
        if(receivedData){
            const foundData = receivedData.find(item=>item.id==data.id);
            setDetails(foundData)  
          }
    })
    const {
        job_description,job_responsibility,educational_requirements,experiences,
        job_title,salary,phone,email,location,id
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
           <div className='card w-96 bg-fuchsia-100 ml-20 shadow-xl text-center lg:mt-0 md:mt-10'>
            <div className="text-start mx-auto p-10">
                <h2 className='text-center bold mt-2'>Job Details</h2>
                <hr className="text-neutral-900 m-2"/>
                <h4 className='flex '><CurrencyDollarIcon className='w-6 h-6 text-indigo-600 mr-1'/>  Salary: <span className='ml-2'>{salary}</span> </h4>
                <h4 className='flex'> <BriefcaseIcon className='w-6 h-6 text-indigo-600 mr-1'/> Job title: <span className='ml-2'>{job_title}</span></h4>
                <h2 className='text-center bold mt-2'>Contact Information</h2>
                <hr className='m-2 '/>
                <h4 className='flex '><CurrencyDollarIcon className='w-6 h-6 text-indigo-600 mr-1'/> Phone: <span className='ml-2'>{phone}</span> </h4>
                <h4 className='flex '><PhoneIcon className='w-6 h-6 text-indigo-600 mr-1'/> Email: <span className='ml-2'>{email}</span> </h4>
                <h4 className='flex '><MapPinIcon className='w-6 h-6 text-indigo-600 mr-1'/> Address: <span className='ml-2'>{location}</span> </h4>
            </div>
            <div className=''>
             <Link>
                <button onClick={()=>handleDetails(id)} className='btn w-full'>Apply Now</button>
             </Link>
           </div>
           </div>
           
        </div>
        </div>
    );
};

export default ViewDetails;