import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'


const MainLayOut = () => {
  return (
    <>
    <Navbar/>
    <Outlet />
    <Footer/>
    </>  
  )
}

export default MainLayOut

