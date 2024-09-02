import React from 'react';
import { useNavigate } from 'react-router-dom';
import bcoverImage from '../../assets/logo.png'; // Use the the image destination path here

const TourCard = () => {
  const navigate = useNavigate();

  const handleExploreMoreClick = () => {
    navigate('/exploremore'); // Replace with your actual explore route
  };

  return (
    <div
      className="relative flex flex-col justify-between p-4 mb-4 transition duration-200 ease-in-out border border-transparent shadow-lg cursor-pointer rounded-[45px] bg-white w-full max-w-[438px] mx-auto hover:bg-[#D68631] group"
    >
      <img
        src={bcoverImage}
        alt="Sri Lanka Explorer"
        className="object-cover mb-4 rounded-[29.25px] w-full h-[279.75px] shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
      />
      <div className="text-left">
        <p className="text-[14px] font-light text-[#0B2838] font-[Prompt]">
          Explore 2000 years of history through UNESCO World Heritage sites. From sacred temples to majestic fortresses.
        </p>
        <button
          onClick={handleExploreMoreClick}
          className="w-[187px] h-[48px] text-white bg-[#D68631] text-[16px] font-medium rounded-[14px] mt-4 transition-colors duration-200 group-hover:bg-[#0B2838] group-hover:text-white shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default TourCard;