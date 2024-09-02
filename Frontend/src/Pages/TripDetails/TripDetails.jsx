import React from "react";
import shutterstock from "../../assets/shutterstock.png";


const TripDetails = () => {
  return (
    <div className="w-full h-screen relative z-[-1] ">
      <img src={shutterstock} alt="shutterstock" className="w-full h-[368px] object-cover mt-0" />
      {/* Text Overlay */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white text-xl font-bold p-2 rounded">
        Cultural Sri Lanka 14 Days - Premium
      </div>
    </div>
  );
};

export default TripDetails;
