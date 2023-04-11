import React from 'react';
import img1 from '../../assets/Icons/accounts 1.png';
import img2 from '../../assets/Icons/business 1.png';
import img3 from '../../assets/Icons/chip 1.png';
import img4 from '../../assets/Icons/chip 1.png';
const List = () => {
    return (
        <div className='grid lg:gap-4 md:gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ml-14 mt-8 mb-5'>
            <div className="card max-w-max bg-base-100 shadow-xl ml-10">
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
    );
};

export default List;