import React from 'react'
import TourCard from '../../Components/UI/TourCard';
import { useAuth } from '../../Contexts/Authprovider';

const Landing = () => {

  const {user} = useAuth();

  return (
    <div className="w-full h-screen flex items-center justify-center  relative z-[-1]">
    <TourCard />
  
</div>
  )
}

export default Landing