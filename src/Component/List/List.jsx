import React from 'react';
import img1 from '../../assets/Icons/accounts 1.png';
import img2 from '../../assets/Icons/business 1.png';
import img3 from '../../assets/Icons/chip 1.png';
import img4 from '../../assets/Icons/chip 1.png';
const List = () => {
    return (
      <div className='mt-10'>
      <h2 className='text-center sm:text-4xl lg:text-5xl bold'>Job Category List</h2>
      <p className='text-center text-lg m-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className="md:flex md:justify-around md:items-center lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 py-16">
            <div className="card max-w-max bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={img1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Account & Finance</h2>
    <p>300 Jobs Available</p>
  </div>
</div>
            <div className="card max-w-max bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Creative Design</h2>
    <p>100+ Jobs Available</p> 
  </div>
</div>
            <div className="card max-w-max bg-base-100 shadow-xl ml-10">
  <figure className="px-10 pt-10">
    <img src={img3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Marketing & Sales</h2>
    <p>150 Jobs Available</p>
  </div>
</div>
            <div className="card max-w-max bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img4} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Engineering Job</h2>
    <p>224 Jobs Available</p>
  </div>
</div>
        </div>
        </div>
    );
};

export default List;