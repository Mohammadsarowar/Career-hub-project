import React from 'react';
import HeaderImg from '../../assets/All Images/P3OLGJ1 copy 1.png'
const HomeHeader = () => {
    return (
        <div className='md:flex-none lg:flex max-w-max m-auto mt-3 bg-slate-100 rounded-lg'>
            <div className='mt-10 ml-10 md:mt-5'>
                <h2 className='lg:text-7xl bold text-5xl'>One Step 
                 <br/>Closer To Your
                 <br/><span className='text-blue-600'>Dream Job</span>
               </h2>
               <p className='mt-8 text-gray-500'> Explore thousands of job opportunities with all the <br/>information you need.
                   Its your future. Come find it.
                   Manage all<br/> your job application from start to finish.
               </p>
               <button className='mt-8 btn bold text-white bg-indigo-700 border-none'>Get Started</button>
            </div>
            <div>
                <img src={HeaderImg} />
            </div>
        </div>
    );
};

export default HomeHeader;