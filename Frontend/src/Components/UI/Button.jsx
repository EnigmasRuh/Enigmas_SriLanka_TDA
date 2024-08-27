import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-black  text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500 rounded-sm:'>
      {props.children}
    </button>
  )
}

export default Button