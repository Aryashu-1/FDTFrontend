// UserHome.js
import React, { useState, useEffect,useRef } from 'react';
import './userhome.css';
import Searchdata from '../Searchdata/searchdata';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';

function UserHome() {
  
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);

  // react to print code 

  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: false,
  });

  

  useEffect(() => {
    const fetchActivities = async () => {
      const recordURL = "http://127.0.0.1:13020/record"
      const params = {
        user : '6649dc4686b1375d28dd472d'
      }
      const response = await axios.get(recordURL,params)
      const data = response.data;
      console.log(data)

      // @Arya Please create a context for this data also

      setActivities(data)
    };

    fetchActivities();
  }, []);

  return (
    <div className="userhome">
    
      <div className="content">
        <h2 className="activity-title">Activity</h2>
        <table ref={contentToPrint} className="data-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name of Program</th>
              <th>Venue</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Attended Days</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={activity._id} className='text-black'>
                <td>{index + 1}</td>
                <td>{activity.event.name}</td>
                <td>{activity.event.venue.name}</td>
                <td>{activity.event.startDate.substr(0,10)}</td>
                <td>{activity.event.endDate.substr(0,10)}</td>
                <td>{activity.numberOfDaysAttended}</td>
                <td>{activity.score} / 10</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <button onClick={() => {
          handlePrint(null, () => contentToPrint.current);
        }}>
      PRINT
      </button>
    </div>
  );
}

export default UserHome;
