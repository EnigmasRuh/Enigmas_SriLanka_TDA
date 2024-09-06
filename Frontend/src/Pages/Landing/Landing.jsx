import React from 'react'
import TourCard from '../../Components/UI/TripCard1';
import TripFacilityCard from '../../Components/UI/TourCard';
import Solutionprovidercard from '../../Components/UI/TravelSolutionProviderCard';
import coverImage from '../../assets/Frame 20.png';
import imagePlane from '../../assets/Hero.png';
import Frame100 from '../../assets/Frame 100.png';
import { useAuth } from '../../Contexts/Authprovider';

const Landing = () => {

  const {user} = useAuth();

return (
    <div className="min-h-screen">
     
      <section className="flex flex-col items-center justify-center p-0 m-0">
        
        
        <div className="w-full">
          <img
            src={imagePlane}
            alt="Plane"
            className="w-full h-auto p-0 m-0" 
          />
        </div>

        
        <div className="flex justify-center mt-12 space-x-9">
          <TourCard />
          <TourCard />
          <TourCard />
        </div>

     
        <div className="mt-12">
          <img
            src={coverImage}
            alt="Cover"
            className="w-[960px] h-auto" 
          />
        </div>

        
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-[#0B2838]">Plan Your Trip</h2>
          <p className="text-lg text-[#0B2838] mt-4">
            Seamlessly organize your Sri Lankan adventure with our comprehensive planning tools.
          </p>
        </div>

     
        <div className="flex justify-center mt-12 space-x-9">
          <TripFacilityCard />
          <TripFacilityCard />
          <TripFacilityCard />
        </div>

      
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-[#0B2838]">
            Are You a Travel Solution Provider?
          </h2>
          <p className="text-lg text-[#0B2838] mt-4">
            Boost Your Business with Sri Lanka's Premier Travel Platform.
          </p>
        </div>

       
        <div className="flex flex-wrap justify-center mt-12 space-x-9">
          <div className="flex justify-center w-full space-x-9">
            <Solutionprovidercard />
            <Solutionprovidercard />
            <Solutionprovidercard />
          </div>
          <div className="flex justify-center w-full mt-8 space-x-9">
            <Solutionprovidercard />
            <Solutionprovidercard />
          </div>
        </div>

       
        <div className="w-full mt-20">
          <img
            src={Frame100}
            alt="Frame"
            className="w-full h-auto p-0 " 
          />
        </div>
      </section>
    </div>
  );
};

export default Landing