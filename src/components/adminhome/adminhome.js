import React from 'react';
import './adminhome.css';

function AdminHome() {
  return (
    <div className="adminhome">
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
            <div className="admin-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPXG-9c1j983Z3EAwScbiKGnII2UoAEgfZsPPEDvrA0A&s" className="admin-photo" alt="" />
              <span className="adminname">Admin Name</span>
            </div>
          </div>
        </div>
      </header>
      <div className="buttons">
        <div className="container">
          <div className="row">
            <div className="col">
              <button className="btn">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VB8iYVjVMtOvYI6sT6gFbHbBiQyxN7UNbwrtFON4fw&s" alt="lecture" />
                <span>Lecture Progress</span>
              </button>
            </div>
            <div className="col">
              <button className="btn">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2TbWxiPdaRrjANdWpUZ1_K4f__nUIE_6lMMBqkOrUQ&s" alt="yearwise" />
                <span>AY-wise Report</span>
              </button>
            </div>
            <div className="col">
              <button className="btn">
                <img src=" https://previews.123rf.com/images/stuartphoto/stuartphoto1906/stuartphoto190600839/124929722-executive-summary-text-icon-showing-short-condensed-report-roundup-3d-illustration-summing-up.jpg  " className='sr' alt="summary" />
                <span>Summary Report</span>
              </button>
            </div>
        </div>
      </div>
</div>
    </div>



  );
}

export default AdminHome;
