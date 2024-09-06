import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VisaApplication = () => {
  const navigate = useNavigate();

  // Define the steps in the visa process
  const steps = [
    "Fill the Application",
    "Submit Required Documents",
    "Pay the Visa Fee",
    "Receive Your Visa",
    "Finish Successfully"
  ];

  // State to track the current step (0-indexed)
  const [currentStep, setCurrentStep] = useState(0);

  // Function to simulate progress (for demonstration purposes)
  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  const handleNavigate = () => {
    navigate(`/visaapplication/details`);  // Navigates to the TripDetails page with the trip ID
  };
  const handleNavigate1 = () => {
    navigate(`/visaapplication/form`);  // Navigates to the TripDetails page with the trip ID
  };

  return (
    <div className="w-full h-screen p-8 bg-white flex flex-col items-center justify-between" style={{ paddingTop: "120px", marginBottom: "330px" }}>
      {/* Dynamic Progress Bar */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${index <= currentStep ? 'bg-[#112240]' : 'bg-gray-300'}`}>
                <span className={`text-2xl ${index <= currentStep ? 'text-white' : 'text-gray-500'}`}>
                  {index <= currentStep ? '✔️' : (index + 1)}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`h-2 w-full flex-1 ${index < currentStep ? 'bg-[#112240]' : 'bg-gray-300'}`}></div>
              )}
            </div>
            {/* Step Name */}
            <span className={`mt-2 text-sm ${index <= currentStep ? 'text-[#112240]' : 'text-gray-500'}`}>
              {step}
            </span>
          </div>
        ))}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

      


        <div
          className="font-[Prompt] transition-colors duration-500 text-white border-2 border-black p-6 rounded-3xl shadow shadow-lg bg-[#0B2838]"
          style={{ width: "475px", height: "345px" }}
        >
          <h2
            className="text-left text-xl font-semibold text-[#D68631] mb-4"
            style={{ fontSize: 40 }}
          >
            <div className="mt-6">Overview of the Visa</div>
          
          </h2>
          <p
            className="text-left text-xl font-prompt mb-4"
            style={{ fontSize: 20, lineHeight: 1.5 }}
          >
            Learn about the types of visas available and the requirements for traveling to Sri Lanka
          </p>
          <button className="hover:bg-none bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:bg-[#D68631] text-white px-6 py-3 rounded-xl flex items-center text-lg ">
            <span>Learn More</span>
            <svg
              className="w-6 h-6 ml-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
              />
            </svg>
          </button>
        </div>


        <div style={{ width: "475px", height: "345px" }} className=" font-[Prompt] transition-colors duration-500 text-white border-2 border-black p-6 rounded-3xl shadow shadow-lg bg-[#0B2838] ">
          <h2 className=" text-[#D68631] text-left text-xl font-semibold  mb-4" style={{ fontSize: 40 }}>
            <div className='mt-6'>Visa Application</div>

         

          </h2>
          <p className="text-left text-xl   mb-4" style={{ fontSize: 20, lineHeight: 1.5 }}>
          Start your visa application process with step-by-step guidance and form submission          </p>
          <button className=" hover:bg-none bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:bg-[#D68631] text-white px-6 py-3 rounded-xl flex items-center text-lg ">
            <span>Apply Now</span>
            <svg className="w-6 h-6 ml-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
            </svg>
          </button>
        </div>

        <div style={{ width: "475px", height: "345px" }} className="font-[Prompt] transition-colors duration-500 text-white border-2 border-black p-6 rounded-3xl shadow shadow-lg bg-[#0B2838]">
          <h2 className=" text-[#D68631] text-left text-xl font-semibold  mb-4" style={{ fontSize: 40 }}>

            <div className='mt-6'>Documents/Fees </div>

            <div className='mt-6 mb-6'>Submission & Review</div>

          </h2>
          <p className="text-left text-xl   mb-4" style={{ fontSize: 20, lineHeight: 1.5 }}>
          Upload required documents and track the review process to complete your visa application
          </p>
          <button
  style={{ width: "186px", height: "56px" }}
  className="hover:bg-none bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:bg-[#D68631] text-white px-6 py-3 rounded-xl flex justify-center items-center text-lg"
>
  <span>Check</span>
  <svg
    className="w-6 h-6 ml-2 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
    />
  </svg>
</button>

        </div>

        <div style={{ width: "475px", height: "345px" }} className=" font-[Prompt] transition-colors duration-500 text-white border-2 border-black p-6 rounded-3xl shadow shadow-lg bg-[#0B2838]">
          <h2 className=" text-[#D68631] text-left text-xl font-semibold  mb-4" style={{ fontSize: 40 }}>



            <div className='mt-6'>Support &</div>

            <div className='mt-6 mb-6'>Contact</div>



          </h2>
          <p className=" font-[Prompt] text-left text-xl mb-4" style={{ fontSize: 20, lineHeight: 1.5 }}>
          Get assistance with your visa application and find answers to your <br/>
          questions.
          </p>

       



          <button
  style={{ width: "186px", height: "56px" }}
  className="hover:bg-none bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:bg-[#D68631] text-white px-6 py-3 rounded-xl flex justify-center items-center text-lg"
>
  <span>Contact</span>
  <svg
    className="w-6 h-6 ml-2 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
    />
  </svg>
</button>


        </div>

      </div>



      {/* Button to simulate progress */}
      <button  onClick={handleNextStep} className="mt-12 bg-[#112240] text-white font-bold py-2 px-4 rounded-lg">
        Next Step
      </button>
    </div>
  );
};

export default VisaApplication;