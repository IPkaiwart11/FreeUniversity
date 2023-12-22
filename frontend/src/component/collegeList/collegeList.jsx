import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './collegelist.css'
import { NavLink } from 'react-router-dom';
export default function CollegeList() {
  //  const [colleges,setColleges] = useState([]);
                
   const [colleges, setColleges] = useState([]);
  //  const path = location.pathname.split("/")[1];


   useEffect(() => {
     axios.get('/api/colleges')
       .then((res) => {
         console.log("API Response:", res.data);
         setColleges(res.data);
       })
       .catch((error) => {
         console.error("Error fetching user data:", error);
       });
   }, []);
                
  return (
    <table className='collegelist'>
      <tr>
            <th>Name: </th>
            <th>City:</th>
            <th>Address:</th>
            <th>view</th>
            </tr>
    {Array.isArray(colleges) && colleges.length > 0 ? (
        colleges.map((college) => (
          <tr key={college._id}>
            {/* <li>College ID: {college._id}</li> */}
            
            
              <td>{college.name}</td>
              <td>{college.city}</td>
              <td>{college.address}</td>
             <NavLink to={`/colleges/${college._id}`}> 
              <td>View</td>
             </NavLink>
           
            {/* <div className='singlerow'> */}
              {/* <div> <span>{college.name}</span></div>
              <div><span> {college.city}</span></div>
              <div> <span> {college.address}</span></div>
              <div><span></span></div>
              </div> */}
            
           
          </tr>
        ))
      ) : (
        // <p>Loading...</p>
        <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
        </button>

      )}
  </table>
  )
}
