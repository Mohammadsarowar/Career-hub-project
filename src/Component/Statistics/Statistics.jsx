import React, { useEffect, useState } from 'react';

const Statistics = () => {
    const [bar,setBat] = useState([])
    useEffect(()=>{
        fetch('mark.json')
        .then(res=>res.json)
        .then(data=>setBat(data))
    })
    console.log(bar)
     return (
        <div>
          {

          }  
        </div>
    );
};

export default Statistics;