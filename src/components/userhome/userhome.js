import React from 'react';
import './userhome.css';

function UserHome() {
  return (
    <div className="userhome">
      <header className="header">
        <div className="container-fluid">
          <div className="flex">
            <div className="logo-container">
              <img src="https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png" className="logo" alt="VNRVJIET Logo" />
            </div>
            <div className="logo-text">
              <span className="text">VNRVJIET</span>
            </div>
          </div>
          <div className="rightside">
            <div className="user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPXG-9c1j983Z3EAwScbiKGnII2UoAEgfZsPPEDvrA0A&s" className="user-photo" alt="" />
              <span className="username">Sample Name</span>
            </div>
          </div>
        </div>
      </header>
      <div className="buttons">
        <div className="container">
          <div className="row">
            <div className="col">
              <button className="btn">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbKYW1bf5yHlEY3-IhLEa8yOvDUrZKzTl64Zf5X22cYrstqyg4SFs0_GY198WY7qzvj8&usqp=CAU" alt="Upload" />
                <span>Upload</span>
              </button>
            </div>
            <div className="col">
              <button className="btn">
                <img src="https://media.istockphoto.com/id/1491754746/vector/business-growth-chart-logo-with-arrow-bar-and-line-chart-diagram.jpg?s=612x612&w=0&k=20&c=kfZKV3WUirRRb_dEbda8mUmbTQmgiPdApeTwRDwt1ew=" alt="Dashboard" />
                <span>Dashboard</span>
              </button>
            </div>
         
            <div className="col">
              <button className="btn">
                <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRULhDp4W-He4wkiNSBYuMRLzfC5PFJ7zIORWsDLpHSQ&s" alt="Activity" />
                <span>Activity</span>
              </button>
            </div>
            
          </div>
        </div>
      </div>

    </div>



  );
}

export default UserHome;
