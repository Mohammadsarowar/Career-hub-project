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
    console.log(details)
    return (
        <div>
           <p>{details.salary}</p>
        </div>
    );
};

export default ViewDetails;