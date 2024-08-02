import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { UserContext } from '../../Contexts/UserContext/UserContext';
import { NavLink } from 'react-router-dom';


function UploadPage() {

    const [activities, setActivities] = useState([]);
    const [userMenuOpen, setUserMenuOpen] = useState(-1);
    const [user,setUser ] = useContext(UserContext)
    const [days,setDays] = useState(null)

    const toggleUserMenu = (index) => {
        if(index === userMenuOpen){
            setUserMenuOpen(-1)
        }
        setUserMenuOpen(index);
    };


    async function createRecord(eventId) {
        if (!days) {
            return;
        }
        // Validate that days is a positive number
        const daysInt = parseInt(days, 10);
        if (isNaN(daysInt) || daysInt <= 0) {
            console.log("Please enter a valid number of days");
            return;
        }
        // Ensure user is defined
        if (!user || !user._id) {
            console.log("User is not defined");
            return;
        }
        console.log(`creating activity for ${eventId} for user ${user._id} with days ${days}`);
        const createRecordURL = "http://127.0.0.1:13020/record"
        const params = {
            userId : user._id,
            eventId : eventId,
            numberOfDaysAttended : days,
            assessmentYear : "22-23",
            certificateURL : "https://marketplace.canva.com/EAFlVDzb7sA/1/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-bK_WEelNCjo.jpg"
        }        
        try {
            const response = await axios.post(createRecordURL,params)    
            console.log(response.data)
            alert("Notified 👍")

        } catch (error) {
            alert('You have already Notified')
        }
    }
    
    function updateDays(e){
        setDays(e.target.value)
    }




    useEffect(() => {
        const fetchActivities = async () => {
          const eventURL = "http://127.0.0.1:13020/event"
          const response = await axios.get(eventURL)
          const data = response.data;
          console.log(data)
    
          // @Arya Please create a context for this data also
    
          setActivities(data)
        };
    
        fetchActivities();
    }, []);


  return (
    <div>
        
        <div className="content">
            <h2 className="activity-title">Activity</h2>
            <table className="data-table">
            <thead>
                <tr>
                <th>S.No.</th>
                <th>Name of Program</th>
                <th>Mode</th>
                <th>Start Date</th>
                <th>End Date</th>
                </tr>
            </thead>
            <tbody>
                {activities.map((activity, index) => (
                        <tr key={activity._id} className='text-black'>
                            <td>{index + 1}</td>
                            <td>{activity.name}</td>
                            <td>{activity.mode}</td>
                            <td>{activity.startDate.substr(0,10)}</td>
                            <td>{activity.endDate.substr(0,10)}</td>
                            <td><button onClick={()=>toggleUserMenu(index)}>add</button></td>
                            <td>{!(userMenuOpen-index) && (<div><input type='text' onChange={updateDays} placeholder='number of days attended'></input> <input type='file' className='text-white' placeholder="Choose Certificate File"></input> <button onClick={()=>createRecord(activity._id)}>Submit</button></div>)} </td>
                        </tr>
                ))}
            </tbody>
            </table>
            <NavLink to={'/uploadForm'}><button>Not Found</button></NavLink>
        </div>
    </div>
  )
}

export default UploadPage