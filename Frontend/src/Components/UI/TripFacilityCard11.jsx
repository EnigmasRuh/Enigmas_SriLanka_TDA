import React from 'react';
import iconSrc from '../../assets/Icon.png';

const TripFacilityCard = () => {
  return (
    <div
      className="relative flex flex-col justify-between w-[358px] h-[365px] p-6 mb-4 transition duration-200 ease-in-out border border-black shadow-lg cursor-pointer rounded-[28px] bg-white hover:bg-[#0B2838] group"
    >
      <div className="text-left">
        <h5 className="text-[40px] font-medium text-[#D68631]  leading-tight">
        Accommodation<br />Finder
        </h5>
        <p className="mt-4 text-[20px] font-light text-[#0B2838]  transition-colors duration-200 group-hover:text-white">
        Discover your perfect stay. Browse and book verified accommodations across Sri Lanka, from luxury resorts to cozy homestays.
        </p>
      </div>
      <button
  className="w-[186px] h-[52px] mt-8 text-white bg-[#D68631] font-[Prompt] font-regular rounded-[14px] shadow-md flex items-center justify-center"
>
  Learn More
  <img src={iconSrc} alt="icon" className="w-6 h-6 ml-2" /> {/* Adjust the icon size as needed */}
</button>

    </div>
  );
};

export default TripFacilityCard;
