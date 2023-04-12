import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({data}) => {
    const {id,company_logo,job_title,company_name,remote_or_onsite,location,fulltime_or_part_time,salary} = data
    return (
        <div className=''>
            <div className="card w-full h-max bg-base-100 shadow-xl">
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
    <Link to={`../details/${id}`} >
      <button className='btn'>View Details</button>
    </Link>
   
  </div>
</div>
        </div>
    );
};

export default Cart;