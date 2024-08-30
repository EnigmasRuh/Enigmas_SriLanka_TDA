import React from 'react'
import logo from "../../assets/logo.png";
import Button from '../../Components/UI/Button';

const Hero = () => {
  return (
<div className="w-full h-screen flex items-center justify-center  relative z-[-1] mt-6">
  <img src={logo} alt="logo" className="w-1/2 h-auto" />
  <Button text="Secondary Button" variant="secondary" />
</div>
    )
}

export default Hero
