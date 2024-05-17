import React from 'react';
import { useForm } from 'react-hook-form';
import './uploadData.css';

function UploadData() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    calculateDays(data.startDate, data.endDate);
  };

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
                  <input {...register("eventType", { required: true })} type="radio" value="fdp" className="mr-2" />
                  Faculty Development Program (FDP)
                </label>
                <label>
                  <input {...register("eventType", { required: true })} type="radio" value="sttp" className="mr-2" />
                  Short Term Training Program (STTP)
                </label>
                <label>
                  <input {...register("eventType", { required: true })} type="radio" value="workshop" className="mr-2" />
                  Workshop
                </label>
                <label>
                  <input {...register("eventType", { required: true })} type="radio" value="training" className="mr-2" />
                  Training
                </label>
              </div>
              {errors.eventType && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Event name  */}
            <div className="mb-4">
              <label htmlFor="eventName" className="block text-gray-700">Event Name :-</label>
              <input {...register("eventName", { required: true })} type="text" id="eventName" className="border rounded-lg py-2 px-3 w-full" />
              {errors.eventName && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Domain */}
            <div className="mb-4">
              <label htmlFor="domain" className="block text-gray-700">Domain :- </label>
              <input {...register("domain", { required: true })} type="text" id="domain" className="border rounded-lg py-2 px-3 w-full" />
              {errors.domain && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Event mode */}
            <div className="mb-4">
              <label className="block text-gray-700">Mode:-</label>
              <div className="flex items-center space-x-4">
                <label>
                  <input {...register("modeOfEvent", { required: true })} type="radio" value="online" className="mr-2" />
                  Online
                </label>
                <label>
                  <input {...register("modeOfEvent", { required: true })} type="radio" value="offline" className="mr-2" />
                  Offline
                </label>
              </div>
              {errors.modeOfEvent && <span className="text-red-500">This field is required</span>}
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
              <label htmlFor="venue" className="block text-gray-700">Venue & Organised by :-</label>
              <input {...register("venue", { required: true })} type="text" id="venue" className="border rounded-lg py-2 px-3 w-full" />
              {errors.venue && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Certificate details */}
            <div className="mb-4">
              <label htmlFor="certificate" className="block text-gray-700">Certificate image</label>
              <input {...register("certificate", { required: true })} type="file" id="certificate" accept="image/*" className="border rounded-lg py-2 px-3 w-full" />
              {errors.certificate && <span className="text-red-500">This field is required</span>}
            </div>

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadData;
