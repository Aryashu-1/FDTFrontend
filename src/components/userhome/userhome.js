// UserHome.js
import React, { useState, useEffect } from 'react';
import './userhome.css';
import Searchdata from '../searchdata/searchdata';
import { useNavigate } from 'react-router-dom';

function UserHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [page, setPage] = useState('home');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigation = (page) => {
    setPage(page);
    setSidebarOpen(false);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleLogout = () => {
   
    navigate('/login'); // Redirect to login page
  };

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await fetch('/api/activities');
      const data = await response.json();
      setActivities(data);
    };

    fetchActivities();
  }, []);

  return (
    <div className="userhome">
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
              <span className="username">Sample Name</span>
            </div>
            {userMenuOpen && (
              <div className="user-menu">
                <button className="user-menu-item" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="sidebar-btn" onClick={() => handleNavigation('home')}>Home</button>
        <button className="sidebar-btn" onClick={() => handleNavigation('upload')}>Upload</button>
      </div>

      <div className={`overlay ${sidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>

      {page === 'home' && (
        <div className="content">
          <h2 className="activity-title">Activity</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name of Program</th>
                <th>Venue</th>
                <th>Date</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={activity._id}>
                  <td>{index + 1}</td>
                  <td>{activity.name}</td>
                  <td>{activity.venue}</td>
                  <td>{activity.date}</td>
                  <td>{activity.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {page === 'upload' && <Searchdata />}
    </div>
  );
}

export default UserHome;
