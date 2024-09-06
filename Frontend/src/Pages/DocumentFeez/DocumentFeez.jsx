import React from 'react'
import TourCard from "../../Components/UI/TourCard"
import { useNavigate

 } from 'react-router-dom';
const DocumentFeez = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
          navigate(`/`);  // Navigates to the TripDetails page with the trip ID
    }
 
  return (
        <div className="pt-36 p-4">
          <div className="flext item-center pb-11">
          <div
      className="relative flex flex-col justify-between w-[260px] h-auto p-6 mb-4 transition duration-200 ease-in-out border border-black shadow-lg cursor-pointer rounded-[20px] bg-white hover:bg-[#0B2838] group"
    >
      <div className="text-left">
        <h5 className="text-[24px] font-medium text-[#D68631] font-[Prompt] leading-tight">
          Document Submission
        </h5>
        <p className="mt-4 text-[14px] font-light text-[#0B2838] font-[Prompt] transition-colors duration-200 group-hover:text-white">
          Submit the related documents
        </p>
      </div>
      <button
        className="w-[140px] h-[38px] mt-8 text-white bg-[#D68631] text-[16px] font-[Prompt] font-regular rounded-[10px] shadow-md" onClick={handleNavigate}
      >Done
      </button>
    </div>
  
  </div>
  </div>
    
  )
}

export default DocumentFeez;