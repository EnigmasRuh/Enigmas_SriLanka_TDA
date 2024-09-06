import React, { useState, useEffect } from 'react';
import TourCard from '../../Components/UI/TripCard1';
import TourCard2 from '../../Components/UI/TripCard11';
import TourCard3 from '../../Components/UI/TripCard12';
import TripFacilityCard from '../../Components/UI/TripFacilityCard';
import TripFacilityCard11 from '../../Components/UI/TripFacilityCard11';
import TripFacilityCard12 from '../../Components/UI/TripFacilityCard12';
import Solutionprovidercard1 from '../../Components/UI/Solutionprovidercard/Solutionprovidercard1';
import Solutionprovidercard2 from '../../Components/UI/Solutionprovidercard/Solutionprovidercard2';
import Solutionprovidercard3 from '../../Components/UI/Solutionprovidercard/Solutionprovidercard3';
import Solutionprovidercard4 from '../../Components/UI/Solutionprovidercard/Solutionprovidercard4';
import Solutionprovidercard5 from '../../Components/UI/Solutionprovidercard/Solutionprovidercard5';
import coverImage from '../../assets/Frame 20.png';
import imagePlane from '../../assets/Hero.png';
import newImage from '../../assets/NewHero.png'; 
import inputboximg from '../../assets/Img4.jpg';
import Frame100 from '../../assets/Frame 101.png';
import iconSrc from '../../assets/Icon.png';
import { useAuth } from '../../Contexts/Authprovider';
import './landing.css';

const Landing = () => {
  const { user } = useAuth();
  const [currentImage, setCurrentImage] = useState(imagePlane);
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeClass('fade-transition');
    }, 2000);

    const timer2 = setTimeout(() => {
      setCurrentImage(newImage);
      setFadeClass('fade-in-transition');
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <section className="flex flex-col items-center justify-center p-0 m-0">
        <div className="relative w-full">
          <img
            src={currentImage}
            alt="Background"
            className={`w-full h-auto p-0 m-0 transition-opacity duration-2000 ${fadeClass}`}
          />
          <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 text-center w-full px-4 md:px-0">
            <h1 className="text-[40px] md:text-[60px] text-[#10465E]">
              Discover Sri Lanka
            </h1>
            <p className="mt-4 text-[14px] md:text-[16px] font-medium text-black">
              A land where history whispers from ancient ruins, where nature paints with vibrant hues, and where warm smiles greet<br className="hidden md:block" /> you at every turn. Embark on a journey through our island paradise and uncover experiences that will captivate your<br className="hidden md:block" /> senses and touch your soul.
            </p>
          </div>

          <div className="absolute left-4 md:left-8 bottom-[120px] md:bottom-[210px]">
            <p className="text-[14px] md:text-[18px] font-regular text-[#0B2838]">
              Experience the Wonder of
            </p>
            <p className="text-[60px] md:text-[80px] qwigley-font text-[#D68631] leading-none">
              Sri Lanka
            </p>
            <p className="text-[12px] md:text-[15px] font-regular text-[#0B2838]">
              Where Ancient Traditions Meet Tropical Paradise
            </p>
          </div>

          <button
            className="absolute right-8 md:right-20 bottom-[160px] md:bottom-[240px] w-[140px] md:w-[186px] h-[48px] md:h-[52px] text-white bg-[#D68631] font-[Prompt] font-regular rounded-[14px] shadow-md flex items-center justify-center"
          >
            Start Your Journey
            <img src={iconSrc} alt="icon" className="w-4 h-4 ml-2 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-6 mt-12 mx-auto max-w-[1200px]">
          <TourCard />
          <TourCard2 />
          <TourCard3 />
        </div>

        <div className="mt-12">
          <img
            src={coverImage}
            alt="Cover"
            className="w-full max-w-[1300px] h-auto"
          />
        </div>

        <div className="px-4 mt-12 text-center md:px-0">
          <h1 className="text-[40px] md:text-[64px] font-regular text-[#0B2838]">Plan Your Trip</h1>
          <p className="text-[14px] md:text-[18px] font-light text-black mt-4">
            Seamlessly organize your Sri Lankan adventure with our comprehensive planning tools.
          </p>
        </div>

        <div className="flex flex-col justify-center mt-12 space-y-6 md:flex-row md:space-y-0 md:space-x-9">
          <TripFacilityCard />
          <TripFacilityCard11 />
          <TripFacilityCard12 />
        </div>

        <div className="px-4 mt-16 text-center md:px-0">
          <h2 className="text-[40px] md:text-[64px] font-[Prompt] font-normal text-[#0B2838]">
            Are You <br className="md:hidden" /> Travel Solution Provider?
          </h2>
          <p className="text-[14px] md:text-[18px] font-light text-black mt-4">
            Boost Your Business with Sri Lanka's Premier Travel Platform.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mt-12 space-x-9">
          <div className="flex justify-center w-full space-x-9">
            <Solutionprovidercard1 />
            <Solutionprovidercard2 />
            <Solutionprovidercard3 />
          </div>
          <div className="flex justify-center w-full mt-8 space-x-9">
            <Solutionprovidercard4 />
            <Solutionprovidercard5 />
          </div>
        </div>


        <div className="relative w-full mt-20">
          <img
            src={Frame100}
            alt="Frame"
            className="w-full h-auto p-0"
          />

          <button
            className="absolute left-1/2 transform -translate-x-1/2 bottom-[80px] md:bottom-[100px] w-[140px] md:w-[186px] h-[48px] md:h-[52px] text-white bg-[#D68631] text-[14px] md:text-[16px] font-regular rounded-[14px] shadow-md flex items-center justify-center"
          >
            Register as a Service
            <img src={iconSrc} alt="icon" className="w-4 h-4 ml-2 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="flex flex-col px-4 mt-20 space-y-10 md:flex-row md:space-y-0 md:space-x-10 md:px-0">
          <div className="w-full md:w-[578px] flex flex-col justify-center text-center mt-10">
            <h1 className="text-[60px] md:text-[80px] qwigley-font text-[#D68631] leading-none">
              Sri Lanka
            </h1>
            <p className="mt-4 text-[14px] md:text-[16px] font-normal text-[#0B2838] leading-relaxed">
              A land where history whispers from ancient ruins, where<br className="hidden md:block" /> nature paints with vibrant hues, and where warm smiles<br className="hidden md:block" /> greet you at every turn. Embark on a journey through our<br className="hidden md:block" /> island paradise and uncover experiences that will captivate<br className="hidden md:block" /> your senses and touch your soul.
            </p>
          </div>

          <div className="relative w-full md:w-[442.6px] h-auto md:h-[593.76px]">
            <img
              src={inputboximg}
              alt="Input Box"
              className="object-cover w-full h-full rounded-[14px]"
            />
            <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 space-y-6 px-4 md:px-0">
              <div className="relative">
                <label className="absolute -top-6 left-2 text-[12px] md:text-[14px] text-white">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-[80%] md:w-[360.6px] h-[46.5px] p-2 border border-gray-300 rounded-[8px] text-[14px] md:text-[16px] pt-6"
                />
              </div>

              <div className="relative">
                <label className="absolute -top-6 left-2 text-[12px] md:text-[14px] text-white">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-[80%] md:w-[360.6px] h-[46.5px] p-2 border border-gray-300 rounded-[8px] text-[14px] md:text-[16px] pt-6"
                />
              </div>

              <div className="relative">
                <label className="absolute -top-6 left-2 text-[12px] md:text-[14px] text-white">Message</label>
                <input
                  type="text"
                  placeholder="Type your message here..."
                  className="w-[80%] md:w-[360.6px] h-[46.5px] p-2 border border-gray-300 rounded-[8px] text-[14px] md:text-[16px] pt-6"
                />
              </div>

              <button className="flex items-center justify-center w-[140px] md:w-[186px] h-[48px] md:h-[52px] text-white bg-[#D68631] text-[14px] md:text-[16px] font-regular rounded-[14px] shadow-md mt-4">
                Contact Us
                <img src={iconSrc} alt="icon" className="w-4 h-4 ml-2 md:w-6 md:h-6" />
              </button>
            </div>
          </div> 
        </div>
      </section>
    </div>
  );
};

export default Landing;
