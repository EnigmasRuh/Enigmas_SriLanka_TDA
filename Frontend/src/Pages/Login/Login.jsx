import LoginForm from '../../Components/Forms/LoginForm'
import PopUpMessage from '../../Components/UI/PopUpMessage'
import React from 'react'
import { useState, useEffect } from 'react'

const Login = () => {

    const [showPopup, setShowPopup] = useState(true);

  // Function to close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // Automatically show the popup when the component mounts
    setShowPopup(true);
  }, []);

  return (
    <div className="bg-cover bg-center bg-login-bg lg:mx-[10px] mt-24 lg:px-[60px] lg:py-0 rounded-[60px] flex lg:flex-row items-center justify-between flex-col-reverse">
        <div className=''>
            <LoginForm/>
        </div> 
        <div className='lg:h-screen flex-col flex lg:items-end text-center pt-24 w-[475px]'>
            <h1 className='text-white text-[48px] font-semibold max-2xl:text-[52px]'>
                Welcome Back,
            </h1>
            <div className='text-[48px] font-medium text-white h-[96px] bg-[#F57552] rounded-[36px] flex justify-center px-5 max-2xl:text-[52px] max-2xl:h-[76px] max-2xl:rounded-[28px]'>
                Traveler!
        </div>
        <div className='text-[18px] items-end font-regular text-white lg:text-right h-[96px] rounded-[36px] flex justify-center max-2xl:text-[18px] max-2xl:h-[76px] max-2xl:rounded-[28px] mb-3 lg:mb-0'>
                Log in to your account to access your personalized travel dashboard.
            </div>
        </div>
          {/* Show the popup message */}
      {showPopup && (
        <PopUpMessage
          message="We are currently creating your profile page. No need to create an account—simply sign up!"
          onClose={handleClosePopup}
        />
      )}
    </div>
  )
}

export default Login;