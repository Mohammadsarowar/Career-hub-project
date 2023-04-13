import React, { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import HomeHeader from '../HomeHeader/HomeHeader';
import List from '../List/List';

const ShowData = () => {
    const AllData = useLoaderData()
  const [showAll,setShow] = useState(false);
  const handleShowAll = () =>{
        setShow(true)
  }
    return (
        <div className=''>
         <HomeHeader></HomeHeader>
         <List></List>
         <Outlet></Outlet>
         <h2 className='text-center mt-10 text-5xl bold'> Featured Jobs</h2>
         <p className='text-center m-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
         <div className='grid lg:grid-cols-2 gap-5 md:grid-cols-1 lg:m-10 md:mx-auto p-10'>
         {
            AllData.slice(0,showAll ?6 :4).map(data=>(<Cart
            key={data.id}
            data={data}
            >
            </Cart>))

         } 
         </div> 
         <div className='text-center m-5'>
           {
            !showAll && (
                <button onClick={handleShowAll} className='btn'>Show All</button>
            )
           }
         </div>
            
        </div>
    );
};

export default ShowData;