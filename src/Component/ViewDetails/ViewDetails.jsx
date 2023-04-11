import React, { useState } from 'react';

const ViewDetails = () => {
    const [data,setData] = useState()
    console.log(data)
    const passData =(props)=>{
      setData(props)
    }
    return (
        <div>
            <p>gdfv</p>
        </div>
    );
};

export default ViewDetails;