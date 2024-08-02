import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './uploadData.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function UploadData() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [domains,setDomains] = useState([])
  const [venues,setVenues] = useState([])
  let [cloudURL,setCloudURL] = useState('')
  let [uploaded,setUploaded] = useState(false)

  const onSubmit = async (data) => {

    console.log(data);
    const createEventURL = "http://127.0.0.1:13020/event"

    try{

      const response = await axios.post(createEventURL,data)
      console.log(response.data)
      alert(`New event has been added to the DataBase`)

    }catch{

    }

    // try{
    //   if (data.certificate.length > 0) {
    //       const file = data.certificate[0];
    //       console.log(file);
    //       formData.append('file', file);

    //       formData.append('upload_preset', 'ong2lcml');
    //       console.log(formData)
    
    //       const response = await axios.post(
    //         "https://api.cloudinary.com/v1_1/dzu5moxmj/image/upload",
    //         formData
    //       );
          
    //       let url = response.data.url

    //       console.log(typeof(url));

    //       setCloudURL(response.data.url)
    //       setUploaded(true)
    //       data.append('')

    //     } else {
    //       console.error("No file selected");
    //     }
    // } catch (error) {
    //   console.error("Error during image upload:", error.message);
    //   if (error.response) {
    //     console.error("Response data:", error.response.data);
    //     console.error("Status code:", error.response.status);
    //     console.error("Status text:", error.response.statusText);
    //   } else if (error.request) {
    //     console.error("No response received from the server");
    //   }
  };

  useEffect(() => {
    async function getDomains() {
        try {
            const domainURL = "http://127.0.0.1:13020/domain";
            const response = await axios.get(domainURL);
            console.log(response.data);
            setDomains([...response.data]);
        } catch (error) {
            console.error("Error fetching domains:", error);
        }
    }
    async function getVenues(){
      try {
        const venueURL = "http://127.0.0.1:13020/venue";
        const response = await axios.get(venueURL);
        console.log(response.data);
        setVenues([...response.data]);
      } catch (error) {
          console.error("Error fetching domains:", error);
      }
    }

    getDomains();
    getVenues();
}, []); 

  const calculateDays = (startDate, endDate) => {
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);
    const timeDifference = eDate.getTime() - sDate.getTime();
    const daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24));
    console.log(daysDifference);
    if (daysDifference <= 3) {
      console.log("Marks := 3");
    } else {
      console.log("Marks := 5");
    }
  };

  return (
    <div>
    

      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Event Type details */}
            <div className="mb-4">
              <label className="block text-gray-700">
                Event Type :-
              </label>
              <div className="flex items-center space-x-4">
                <label>
                  <input {...register("type", { required: true })} type="radio" value="FDP" className="mr-2" />
                  Faculty Development Program (FDP)
                </label>
                <label>
                  <input {...register("type", { required: true })} type="radio" value="STTP" className="mr-2" />
                  Short Term Training Program (STTP)
                </label>
                <label>
                  <input {...register("type", { required: true })} type="radio" value="Workshop" className="mr-2" />
                  Workshop
                </label>
                <label>
                  <input {...register("type", { required: true })} type="radio" value="Training" className="mr-2" />
                  Training
                </label>
              </div>
              {errors.type && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Event name  */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Event Name :-</label>
              <input {...register("name", { required: true })} type="text" id="name" className="border rounded-lg py-2 px-3 w-full" />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Domain */}
            <div className="mb-4">
                    <label htmlFor="domain" className="block text-gray-700">Domain :- </label>
                    <select {...register("domain", { required: true })} id="domain" className="border rounded-lg py-2 px-3 w-full">
                        <option value="">Select a domain</option>
                        {domains.map((domain) => (
                            <option key={domain._id} value={domain._id}>{domain.name}</option>
                        ))}
                    </select>
                    {errors.domain && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Event mode */}
            <div className="mb-4">
              <label className="block text-gray-700">Mode:-</label>
              <div className="flex items-center space-x-4">
                <label>
                  <input {...register("mode", { required: true })} type="radio" value="online" className="mr-2" />
                  Online
                </label>
                <label>
                  <input {...register("mode", { required: true })} type="radio" value="offline" className="mr-2" />
                  Offline
                </label>
              </div>
              {errors.mode && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Event duration details */}
            <div className="mb-4">
              <label htmlFor="startDate" className="block text-gray-700">Start Date</label>
              <input {...register("startDate", { required: true })} type="date" id="startDate" className="border rounded-lg py-2 px-3 w-full" />
              {errors.startDate && <span className="text-red-500">This field is required</span>}

              <label htmlFor="endDate" className="block text-gray-700 mt-4">End Date</label>
              <input {...register("endDate", { required: true })} type="date" id="endDate" className="border rounded-lg py-2 px-3 w-full" />
              {errors.endDate && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Venue details */}
            <div className="mb-4">
                    <label htmlFor="venue" className="block text-gray-700">Domain :- </label>
                    <select {...register("venue", { required: true })} id="venue" className="border rounded-lg py-2 px-3 w-full">
                        <option value="">Select a venue</option>
                        {venues.map((venue) => (
                        <option key={venue._id} value={venue._id}>{venue.name}</option>
                        ))}
                    </select>
                    {errors.domain && <span className="text-red-500">This field is required</span>}
                </div>

            {/* Certificate details */}
            {/* <div className="mb-4">
              <label htmlFor="certificate" className="block text-gray-700">Certificate image</label>
              <input {...register("certificate", { required: true })} type="file" id="certificate" accept="image/*" className="border rounded-lg py-2 px-3 w-full" />
              {errors.certificate && <span className="text-red-500">This field is required</span>}
            </div> */}

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadData;
