import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react'
import Home from './pages/home/Home'
import Colleges from "./pages/colleges/Colleges";
import College from "./pages/college/College";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/colleges" element={<Colleges/>}/>
      <Route path="/colleges/:collegeId" element={<College/>}/>
     {/* <Route path="/login" element={}/>
      <Route path="/Registration" element={}/> */}
    </Routes>
  </BrowserRouter>
  
    )
}

export default App
