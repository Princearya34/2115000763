// src/components/DataComponent.tsx

import React, { useEffect, useState } from 'react';


const Data = () => {
   
  
  const [data, setData] = useState(null);
  

  useEffect(() => {
    fetch('http://localhost:3001/data').
  then((res)=>{return res.json()})
  .then((d)=>console.log(setData(d)))
  }, []);

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Data;
