import React from 'react';
import { useNavigate } from 'react-router-dom';
import bcoverImage from '../../assets/bcoverImage.png';

const ExploreCard = () => {
  const navigate = useNavigate();

  const handleExploreMoreClick = () => {
    navigate('/explore'); // Replace with your actual explore route
  };

 return (
    <div
      className="relative flex flex-col justify-between p-3 mb-4 transition duration-200 ease-in-out border border-transparent shadow-lg cursor-pointer rounded-[30px] bg-white w-[260px] mx-auto hover:bg-[#D68631] group"
    >
      <img
        src={bcoverImage}
        alt="Sri Lanka Explorer"
        className="object-cover mb-4 rounded-[20px] w-full h-[170px] shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
      />
      <div className="text-left">
        <p className="text-[12px] font-light text-[#0B2838] font-[Prompt]">
          Explore 2000 years of history through UNESCO World Heritage sites. From sacred temples to majestic fortresses.
        </p>
        <button
          onClick={handleExploreMoreClick}
          className="w-[140px] h-[38px] text-white bg-[#D68631] text-[14px] font-medium rounded-[10px] mt-4 transition-colors duration-200 group-hover:bg-[#0B2838] group-hover:text-white shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};
export default ExploreCard;
