import React from 'react'
import Button from '../UI/Button'

const LoginForm = () => {
  return (
    <div className='h-[674px] w-[505px] bg-white border-2 rounded-3xl items-center flex flex-col justify-center'>
    <h3 className='text-center text-[24px] font-medium'>Sign in to</h3>
    <span className='pt-2 text-center text-[16px]'>Sri Lanka Tourism Development Authority</span>

    <div className='w-[360px] content-center flex flex-col justify-center'>

    <div className='flex flex-col gap-0 pt-5'>
        <span className='text-[16px]'>Email or Username</span>
        <input type="text" className='my-2 h-[45px] rounded-lg border border-gray-600 text-gray-900 text-sm w-full p-2.5' placeholder='Enter your email'/>
    </div>

    <div className='flex flex-col gap-0 pt-5'>
        <span className='text-[16px]'>Password</span>
        <input type="text" className='my-2 h-[45px] rounded-lg border border-gray-600 text-gray-900 text-sm w-full p-2.5' placeholder='Enter your password'/>
    </div>
        <button
            className="w-full h-[48px] text-white bg-[#0B2838] text-[16px] font-medium rounded-[14px] transition-colors duration-200 group-hover:bg-white group-hover:text-[#0B2838]"
          >
           Login
          </button>
    </div>

    <div className='flex pt-4 text-[16px]'>
        <p className='font-light'>Create an account ?</p>
        <p className='font-semibold pl-1'>Sign Up</p>
    </div>

</div>
  )
}

export default LoginForm