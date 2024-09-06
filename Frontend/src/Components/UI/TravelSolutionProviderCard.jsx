import React from 'react';

const TravelSolutionProviderCard = () => {
    return (
        <div
            className="relative flex flex-col justify-between w-[350px] h-[136px] p-4 border border-[#D68631] rounded-[15px] cursor-pointer bg-transparent transition-all duration-300 ease-in-out hover:bg-[#D68631] group"
        >
            <div className="text-left">
                <h5
                    className="text-[24px] font-bold text-[#0B2838] font-[Prompt] leading-tight transition-all duration-300 group-hover:text-white"
                    style={{ transform: 'translateY(0)', transition: 'transform 0.3s' }}
                >
                    Reach a Global Audience
                </h5>
                <p
                    className="mt-2 text-[20px] font-normal text-[#5A3111] font-[Prompt] transition-all duration-300 group-hover:text-white"
                >
                    Showcase your services to travelers worldwide
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