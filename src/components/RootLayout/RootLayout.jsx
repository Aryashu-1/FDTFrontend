import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/navbar'


const RootLayout = () => {
  return (
    <div>
        {/* @Arya please create a isLoggedIn context and conditional render the Navbar  */}
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default RootLayout