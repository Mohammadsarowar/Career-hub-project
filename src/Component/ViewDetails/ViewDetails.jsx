import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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
    const {job_description,job_responsibility,educational_requirements,experiences} = details
    return (
        <div className='text-center mt-20'>
        <div className='grid grid-cols-2'>
        <div className='align-middle'>
             <p className='bold m-2'>Job Description:<span>{job_description}</span></p>
             <p className='bold m-2'>Job Responsibility:<span>{job_responsibility}</span></p>
             <p className='bold m-2'>Educational Requirements:<span>{educational_requirements}</span></p>
             <p className='bold m-2'>Experiences:<span>{experiences}</span></p>
           </div>
           <div>
            <div>
                <h2></h2>
                <h4></h4>
            </div>
           </div>
        </div>
        </div>
    );
};

export default ViewDetails;