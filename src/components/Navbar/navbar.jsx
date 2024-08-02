import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext/UserContext';

function Navbar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [isAdmin, setAdmin] = useState(true)
    const [user,setUser ] = useContext(UserContext)

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleNavigation = () => {
        setSidebarOpen(false);
    };

    const toggleUserMenu = () => {
        setUserMenuOpen(!userMenuOpen);
    };




  return (
    <div>
        <header className="header">
        <div className="container-fluid">
          <div className="flex">
            <div className="menu-icon" onClick={toggleSidebar}>
              <img src="https://icon-library.com/images/menu-icon-white-png/menu-icon-white-png-27.jpg" className="menu-img" alt="Menu Icon" />
            </div>
            <div className="logo-container">
              <img src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" className="logo" alt="VNRVJIET Logo" />
            </div>
            <div className="logo-text">
              <span className="text">VNRVJIET</span>
            </div>
          </div>
          <div className="rightside">
            <div className="user-info" onClick={toggleUserMenu}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPXG-9c1j983Z3EAwScbiKGnII2UoAEgfZsPPEDvrA0A&s" className="user-photo" alt="User" />
              <span className="username">{user.name}</span>
            </div>
            {userMenuOpen && (
              <div className="user-menu">
                <NavLink to={'/signin'}><button className="user-menu-item">Logout</button></NavLink>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <NavLink to={'/'}><button className="sidebar-btn" onClick={toggleSidebar}>Home</button></NavLink>
        <NavLink to={'/upload'}><button className="sidebar-btn" onClick={toggleSidebar}>Upload</button></NavLink>
        {isAdmin && <NavLink to={'/ay-report'}><button className="sidebar-btn" onClick={toggleSidebar}>AY-REPORT</button></NavLink>}
        {isAdmin && <NavLink to={'/upload'}><button className="sidebar-btn" onClick={toggleSidebar}>Search</button></NavLink>}
      </div>

      <div className={`overlay ${sidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>

    </div>
  )
}

export default Navbar