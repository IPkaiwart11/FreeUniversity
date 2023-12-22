import React from 'react'
import Header from "../../component/header/Header"
import Navbar from "../../component/navbar/Navbar"
import Sidebar from '../../component/sidebar/Sidebar'
import Main from '../../component/main/Main'
import Footer from '../../component/footer/Footer'
import './home.css'
// import Footer from '../../component/footer/Footer'
export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className='body'>
               <div className='sidebar'><Sidebar/></div>
               <div className='main'>
               <Main/>
               </div>
              
       </div>
       <div className='footer'>
                   <Footer/>
               </div>
     
    </div>
  )
}
