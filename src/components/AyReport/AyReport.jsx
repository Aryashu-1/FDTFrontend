import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';

function AyReport() {

  const [activities, setActivities] = useState([]);

  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: false,
  });


  useEffect(() => {
    const fetchActivities = async () => {
      const recordURL = "http://127.0.0.1:13020/report"
    
      const response = await axios.get(recordURL)
      const data = response.data;
      // console.log(data)


      // @Arya Please create a context for this data also

      setActivities(data)
    };

    fetchActivities();
  }, []);

    

  return (


    <div>
          
      <div className="content">
        <h2 className="activity-title">Activity</h2>
        <table ref={contentToPrint} className="data-table p-3">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name of Faculty</th>
              <th>Roll Number</th>
              <th>Total FDP's Attended</th>
              <th>Total Score</th>
              
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={activity._id} className='text-black'>
                <td>{index + 1}</td>
                <td>{activity.user.name}</td>
                <td>{activity.user?.rollNumber}</td>
                <td>{activity.totalAttended}</td>
                <td>{activity.totalScore} / {10 *activity.totalAttended} </td>
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
  )
}

export default AyReport