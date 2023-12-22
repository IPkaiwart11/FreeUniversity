

import React, { useEffect, useState } from 'react';
import './college.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function College() {
  const { collegeId } = useParams();
  const [college, setCollege] = useState(null);

  useEffect(() => {
    const fetchCollegeData = async () => {
      try {
        console.log("College ID:", collegeId);
        // Assuming your API endpoint is correct, adjust it accordingly
        const response = await axios.get(`/api/colleges/${collegeId}`);
        console.log("API Response:", response.data);
        setCollege(response.data);
      } catch (error) {
        console.error("Error fetching college data:", error.message);
        // Handle the error or set an error state
      }
    };

    fetchCollegeData();
  }, [collegeId]);

  if (!college) {
    // Render loading state or return null if college data is not available yet
    return <p>Loading...</p>;
  }

  return (
    <div className='container'>
      <div>
               <img 
                style={{width:"100%"}}
                src={college ? college.photos : "Loading..."} alt="" />
               </div>
      <div>
        <h1>{college.name}</h1>
        <p>{college.city}</p>
        <p>{college.address}</p>
      </div>
    </div>
  );
}

export default College;
