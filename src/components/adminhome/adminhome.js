import React, { useState } from 'react';
import './adminhome.css';

function AdminHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="adminhome">
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
            <div className="admin-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPXG-9c1j983Z3EAwScbiKGnII2UoAEgfZsPPEDvrA0A&s" className="admin-photo" alt="Admin" />
              <span className="adminname">Admin Name</span>
            </div>
          </div>
        </div>
      </header>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="sidebar-btn">Lecture Progress</button>
        <button className="sidebar-btn">AY-wise Report</button>
        <button className="sidebar-btn">Summary Report</button>
      </div>

      <div className={`overlay ${sidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
    </div>
  );
}

export default AdminHome;
