import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({trip}) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/explore:${id}`);  // Navigates to the TripDetails page with the trip ID
  };


  return (
    <div
      className="relative flex flex-col justify-between p-4 mb-4 transition duration-200 ease-in-out border border-transparent shadow-lg cursor-pointer rounded-[45px] bg-white w-full max-w-[438px] mx-auto hover:bg-[#D68631] group"
    >
      <img   
        src={trip.image} 
        alt="Sri Lanka Explorer"
        className="object-cover mb-4 rounded-[29.25px] w-full h-[279.75px] shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
      />
      <div className="text-left"> 
        <h5 className="text-[24px] font-medium text-[#5A3111] font-[Prompt]">
          {trip.title}
        </h5>
        <span className="text-[24px] font-medium text-[#5A3111] font-[Prompt]">
          {trip.duration} - Premium
        </span>
        <div className="flex items-center justify-between mt-4">
          <span className="text-[18px] font-medium text-[#0B2838] font-[Prompt]">14 Days</span>
          <span className="text-[18px] font-medium text-[#0B2838] font-[Prompt]">4 - 16 Peoples</span>
          <button
            onClick={() => handleNavigate(trip.id)} 
            className="w-[156px] h-[48px] text-white bg-[#0B2838] text-[16px] font-medium rounded-[14px] transition-colors duration-200 group-hover:bg-white group-hover:text-[#0B2838]"
          >
            View Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;