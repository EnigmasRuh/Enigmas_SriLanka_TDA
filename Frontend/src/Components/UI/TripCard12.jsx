import React from 'react';
import { useNavigate } from 'react-router-dom';
import bcoverImage from '../../assets/bcoverImage2.png';
import iconSrc from '../../assets/Icon.png';

const ExploreCard = () => {
  const navigate = useNavigate();

  const handleExploreMoreClick = () => {
    navigate('/explore'); // Replace with your actual explore route
  };

 return (
  <div
  className="relative flex flex-col justify-between p-3 mb-4 transition duration-200 ease-in-out border border-[#D68631] shadow-lg cursor-pointer rounded-[30px] bg-white w-[370px] h-[410px] mx-auto hover:bg-[#D68631] group"
>

<img
        src={bcoverImage}
        alt="Sri Lanka Explorer"
        className="object-cover mb-4 rounded-[29.25px] w-full h-[236.6px] shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
      />
      <div className="text-left">
        <p className="text-[16px] font-light text-[#0B2838] ">
        Surf, hike, raft, or safari - thrilling experiences await adventure enthusiasts across the island.
        </p>
        <button
            onClick={handleExploreMoreClick}
            className="w-[187px] h-[48px] text-white bg-[#D68631] text-[16px] font-medium rounded-[14px] mt-4 transition-colors duration-200 group-hover:bg-[#0B2838] group-hover:text-white shadow-[0_4px_10px_rgba(255,255,255,0.3)] flex items-center justify-center"
            >
                 Explore More
            <img src={iconSrc} alt="icon" className="w-6 h-6 ml-2" /> {/* Adjust the icon size as needed */}
        </button>
      </div>
    </div>
  );
};
export default ExploreCard;
