import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const ShowData = () => {
    const AllData = useLoaderData()
    console.log(AllData)
    return (
        <div className='grid grid-cols-2 gap-5'>
           {
            AllData.map(data=><Cart
            key={data.id}
            data={data}
            >
            </Cart>)

         }  
            
        </div>
    );
};

export default ShowData;