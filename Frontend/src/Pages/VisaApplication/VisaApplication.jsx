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
  
    return (
        <div className="w-full h-screen p-8 bg-white flex flex-col items-center justify-between"  style={{ paddingTop: "120px", marginBottom: "80px"}}>
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


            <div className="grid grid-cols-2 gap-6">
    
                <div className="bg-[#112240] text-white p-6 rounded-xl flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Overview of the Visa</h2>
                        <p>Learn about the types of visas available and the requirements for traveling to Sri Lanka</p>
                    </div>
                    <button className="bg-[#D58752] text-[#112240] font-bold py-2 px-4 mt-6 rounded-lg"  onClick={handleNavigate}>Learn More</button>
                </div>
                
  
                <div className="bg-[#112240] text-white p-6 rounded-xl flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Visa Application</h2>
                        <p>Start your visa application process with step-by-step guidance and form submission</p>
                    </div>
                    <button className="bg-[#D58752] text-[#112240] font-bold py-2 px-4 mt-6 rounded-lg">Apply Now</button>
                </div>
                

                <div className="bg-[#112240] text-white p-6 rounded-xl flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Documents/Fees Submission & Review</h2>
                        <p>Upload required documents and track the review process to complete your visa application</p>
                    </div>
                    <button className="bg-[#D58752] text-[#112240] font-bold py-2 px-4 mt-6 rounded-lg">Check</button>
                </div>
                

                <div className="bg-[#112240] text-white p-6 rounded-xl flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Support & Assistance</h2>
                        <p>Get assistance with your visa application and find answers to your questions</p>
                    </div>
                    <button className="bg-[#D58752] text-[#112240] font-bold py-2 px-4 mt-6 rounded-lg">Learn More</button>
                </div>
            </div>

            {/* Button to simulate progress */}
            <button onClick={handleNextStep} className="mt-12 bg-[#112240] text-white font-bold py-2 px-4 rounded-lg">
                Next Step
            </button> 
        </div>
    );
};

export default VisaApplication;