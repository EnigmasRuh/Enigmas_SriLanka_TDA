import React from "react";
import shutterstock from "../../assets/shutterstock.png";
import Vector from "../../assets/Vector.png";
import transportationIcon from "../../assets/transportationIcon.png";
import arrowSquareUpRight from "../../assets/arrow-square-up-right.png";

const TripDetails = () => {
  return (
    <div className="w-full h-auto">
      <main className="pt-0">
        <div className="relative">
          <img
            src={shutterstock}
            alt="shutterstock"
            className="w-full h-[368px] object-cover mt-0"
          />
          <div className="absolute top-60 left-5 flex items-center space-x-4 bg-opacity-50 p-2 rounded">
            <div className="text-white text-[48.06px] font-bold font-Prompt">
              Cultural Sri Lanka 14 Days - Premium
            </div>
            <button className=" bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:from-[#3d210a] hover:via-[#a9601b] hover:to-[#3d210a] text-white py-2 px-4 rounded-xl flex items-center justify-center text-[20px] transition-colors duration-300 w-[270px] h-[62px] cursor-pointer ">
              <span>Book This Trip</span>
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
                />
              </svg>
              <img
                src={Vector}
                alt="Vector Icon
            "
                className="w-4 h-4 ml-2 cursor-pointer"
              />
            </button>
          </div>
        </div>

        <div className="pt-10 px-20 font-Prompt text-custom-blue">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-start">
              <img
                src={transportationIcon}
                alt="Transportation Icon"
                className="w-8 h-8 mr-2"
              />
              <div>
                <span className="text-[32px] font-bold text-custom-orange">
                  Transportation
                </span>
                <p className="text-[20px] text-custom-blue">
                  Private Air Conditioned Coach
                  <br />
                  Bicycles (Cycle Tour)
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                src={transportationIcon}
                alt="Transportation Icon"
                className="w-8 h-8 mr-2"
              />
              <div>
                <span className="text-[32px] font-bold text-custom-orange">
                  Accommodation
                </span>
                <p className="text-[20px] text-custom-blue">
                  4 to 5 Star Hotels <br />
                  (Twin Sharing, Half-Board Basis) - 9 Nights
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                src={transportationIcon}
                alt="Transportation Icon"
                className="w-8 h-8 mr-2"
              />
              <div>
                <span className="text-[32px] font-bold text-custom-orange">
                  Meals
                </span>
                <p className="text-[20px] text-custom-blue">
                  9 Breakfasts, 9 Dinners, and 1<br />
                  Lunch (based on Sri Lankan Culinary Experience)
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                src={transportationIcon}
                alt="Admission Fee Icon"
                className="w-8 h-8 mr-2"
              />
              <div>
                <span className="text-[32px] font-bold text-custom-orange">
                  Admission Fee
                </span>
                <p className="text-[20px] text-custom-blue">
                  All entrance fees to
                  <br />
                  attractions included
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                src={transportationIcon}
                alt="Guide Icon"
                className="w-8 h-8 mr-2"
              />
              <div>
                <span className="text-[32px] font-bold text-custom-orange">
                  Guide
                </span>
                <p className="text-[20px] text-custom-blue">
                  GOVT Accredited National
                  <br />
                  Tour Guide Lecturer or Chauffeur - Guide
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                src={transportationIcon}
                alt="Minimum Age Icon"
                className="w-8 h-8 mr-2"
              />
              <div>
                <span className="text-[32px] font-bold text-custom-orange">
                  Minimum Age
                </span>
                <p className="text-[20px] text-custom-blue">10</p>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2 ">
              Embark on a captivating "10-Day Sri Lanka Tour" with the Sri Lanka
              Tourism Development Authority, designed to immerse you in the rich
              cultural heritage and breathtaking natural landscapes of this
              beautiful island. Your journey begins in the charming coastal town
              of Negombo, takes you to the historic city of Kandy, and ends on
              the vibrant shores of Bentota. This thoughtfully curated tour
              offers a comprehensive exploration of Sri Lanka, guided by
              experienced local experts. Discover the island's deep-rooted
              history, marvel at stunning architecture, and engage in a variety
              of activities that showcase the true essence of Sri Lanka. Whether
              you're exploring ancient temples, enjoying scenic train rides, or
              relaxing on pristine beaches, this tour promises an unforgettable
              experience.
            </p>
          </div>

          {/* Trip Highlights Section */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Trip Highlights</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Visit the Golden Cave temple - Dambulla",
                "Village Cycle Tour - Giritale",
                "Visit the ancient Kingdom - Polonnaruwa",
                "Visit the Rock Fortress - Sigiriya",
                "Guided safari – Minneriya/Kaudulla/Hurulu Eco Park",
                "Visit a Spice garden - Matale",
                "Visit the Temple of the Tooth - Kandy",
                "Visit a Gem museum - Kandy",
                "Attend a Cultural/folk dance show - Kandy",
                "White water rafting - Kitulgala",
                "Boat safari - Madu river",
                "Visit a Moonstone mine - Meetiyagoda",
                "Guided city tour - Colombo",
              ].map((highlight, index) => (
                <button
                  key={index}
                  className="w-[368px] h-[48px] bg-lighter-blue text-white py-2 px-4  text-sm shadow-md  transition duration-300 rounded-xl"
                >
                  {highlight}
                </button>
              ))}
            </div>
          </div>

          {/* Provider Section */}
          
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-3 ">Provider</h2>
            <p>AVEM Travels Pvt Ltd.</p>
          </div>
          <div className="flex justify-between items-center mt-1">

            <button className="w-[192px] h-[48px] rounded-xl bg-lighter-blue text-white py-2 px-4 text-sm shadow-md transition duration-300 flex items-center space-x-4">
              <span className="text-[16px]">Visit their site</span>
              <img src={arrowSquareUpRight} alt="Arrow Icon" className="w-5 h-5" />
            </button>


            <button className="bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:from-[#3d210a] hover:via-[#a9601b] hover:to-[#3d210a] text-white py-2 px-4 rounded-xl flex items-center justify-center text-[20px] transition-colors duration-300 w-[270px] h-[62px] cursor-pointer">
              <span>Book This Trip</span>
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
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <img
                src={Vector}
                alt="Vector Icon"
                className="w-4 h-4 ml-2 cursor-pointer"
              />
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default TripDetails;
