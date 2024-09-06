import React from 'react';

const TravelSolutionProviderCard = () => {
    return (
      <div
        className="relative flex flex-col justify-between w-[350px] h-[136px] p-4 border border-[#D68631] rounded-[15px] cursor-pointer bg-transparent transition-all duration-300 ease-in-out hover:bg-[#D68631] group"
      >
        {/* The "1" Character */}
        <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 text-[64px] font-bold text-[#0B2838] leading-none">
          2
        </div>
        
        <div className="text-left">
          <h5
            className="text-[24px] font-bold text-[#0B2838] font-[Prompt] leading-tight transition-all duration-300 group-hover:text-white"
            style={{ transform: 'translateY(0)', transition: 'transform 0.3s' }}
          >
            Zero Upfront Costs
          </h5>
          <p
            className="mt-2 text-[20px] font-normal text-[#5A3111] font-[Prompt] transition-all duration-300 group-hover:text-white"
          >
           List your business for free, pay only for premium features
          </p>
        </div>
        <style>
          {`
            .group:hover h5 {
              transform: translateY(-3px);
            }
          `}
        </style>
      </div>
    );
  };
  
  export default TravelSolutionProviderCard;
  
