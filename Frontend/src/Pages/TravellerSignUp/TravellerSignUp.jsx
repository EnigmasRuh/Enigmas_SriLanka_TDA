import TravellerSignUpForm from '../../Components/Forms/TravellerSignUpForm'
import React from 'react'

const Login = () => {
  return (
    <div className="bg-cover bg-center bg-traveller-register-bg lg:mx-[10px] mt-24 lg:px-[60px] lg:py-0 rounded-[60px] flex lg:flex-row items-center justify-between flex-col-reverse">
        <div className=''>
            <TravellerSignUpForm/>
        </div> 
        <div className='lg:h-screen flex-col flex lg:items-end text-center pt-24 w-[475px]'>
            <h1 className='text-white text-[48px] font-semibold max-2xl:text-[52px]'>
                Join Our 
            </h1>
            <div className='text-[48px] font-medium text-white h-[96px] bg-[#F57552] rounded-[36px] flex justify-center px-5 max-2xl:text-[52px] max-2xl:h-[76px] max-2xl:rounded-[28px]'>
                Travel Community
        </div>
        <div className='text-[18px] items-end font-regular text-white lg:text-right h-[96px] rounded-[36px] flex justify-center max-2xl:text-[18px] max-2xl:h-[76px] max-2xl:rounded-[28px] mb-3 lg:mb-0'>
                Welcome to Sri Lanka! Create your account to unlock a world of travel opportunities and personalized experiences.
            </div>
        </div>
    </div>
  )
}

export default Login;