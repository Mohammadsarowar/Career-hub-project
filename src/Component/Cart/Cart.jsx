import React from 'react';

const Cart = ({data}) => {
    console.log(data)
    const {company_logo,job_title,company_name,remote_or_onsite,location,fulltime_or_part_time,salary} = data
    return (
        <div className='mx-auto my-10'>
            <div className="card w-full bg-base-100 shadow-xl">
         <figure>
              <img className='mt-5' src={company_logo} alt="Shoes" />
         </figure>
    <div className="card-body">
         <h2 className="card-title">
             {job_title}
        </h2>
         <p>
           {company_name}
         </p>
    <div className="card-actions justify-end">
       <div className="badge badge-outline">{remote_or_onsite}</div>
       <div className="badge badge-outline">{fulltime_or_part_time}</div>
    </div>
    <div className='flex'>
        <p className='mr-5'>{location}</p>
        <p>{salary}</p>
    </div>
    <button className='btn'>View Details</button>
  </div>
</div>
        </div>
    );
};

export default Cart;