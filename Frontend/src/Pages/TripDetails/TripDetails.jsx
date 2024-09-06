import React from "react";
import shutterstock from "../../assets/shutterstock.png";
import Vector from "../../assets/Vector.png";
import transportationIcon from "../../assets/transportationIcon.png";
import arrowSquareUpRight from "../../assets/arrow-square-up-right.png";
import TripCard from "../../Components/UI/TripCard";
import tea from "../../assets/tea.png";
import galle from "../../assets/galle.png";
import sigiriya from "../../assets/sigiriya.png";

const TripDetails = () => {
  const mockTrips = [
    {
      id: 1,
      title: "Sri Lanka Safari Adventure",
      duration: "14 Days",
      type: "Premium",
      groupSize: "4 - 16 People",
      image: tea,
    },
    {
      id: 2,
      title: "Cultural Sri Lanka",
      duration: "10 Days",
      type: "Standard",
      groupSize: "5 - 20 People",
      image: galle,
    },
    {
      id: 3,
      title: "Sri Lanka Serenity",
      duration: "7 Days",
      type: "Luxury",
      groupSize: "2 - 10 People",
      image: sigiriya,
    },
  ];
  return (
    <div className="w-full h-auto">
      <main className="pt-0">
        {/* Hero Image */}
        <div className="relative">
          <img
            src={shutterstock}
            alt="shutterstock"
            className="w-full h-[200px] md:h-[368px] object-cover"
          />
          <div className="absolute top-40 md:top-60 left-5 flex flex-col md:flex-row items-center space-x-0 md:space-x-4 bg-opacity-50 p-2 rounded">
            <div className="text-white text-[24px] md:text-[48.06px] font-bold font-Prompt">
              Cultural Sri Lanka 14 Days - Premium
            </div>
            <button className=" bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:from-[#3d210a] hover:via-[#a9601b] hover:to-[#3d210a] text-white py-2 px-4 mt-4 md:mt-0 rounded-xl flex items-center justify-center text-sm md:text-[20px] transition-colors duration-300 w-[200px] md:w-[270px] h-[48px] md:h-[62px] cursor-pointer">
              <span>Book This Trip</span>
              <img
                src={Vector}
                alt="Vector Icon"
                className="w-4 h-4 ml-2 cursor-pointer"
              />
            </button>
          </div>
        </div>

        {/* Trip Info */}
        <div className="pt-10 px-4 md:px-20 font-Prompt text-custom-blue">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Repeating Info Cards */}
            {["Transportation", "Accommodation", "Meals", "Admission Fee", "Guide", "Minimum Age"].map(
              (title, idx) => (
                <div key={idx} className="flex items-start">
                  <img
                    src={transportationIcon}
                    alt={`${title} Icon`}
                    className="w-8 h-8 mr-2"
                  />
                  <div>
                    <span className="text-[24px] md:text-[32px] font-bold text-custom-orange">
                      {title}
                    </span>
                    <p className="text-[16px] md:text-[20px] text-custom-blue">
                      {/* Add appropriate descriptions for each card here */}
                      {title === "Transportation"
                        ? "Private Air Conditioned Coach, Bicycles (Cycle Tour)"
                        : title === "Accommodation"
                        ? "4 to 5 Star Hotels (Twin Sharing)"
                        : "Sample description for " + title}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Overview Section */}
          <div className="mt-6">
            <h2 className="text-lg md:text-xl font-semibold">Overview</h2>
            <p className="mt-2 text-sm md:text-base">
              Embark on a captivating "10-Day Sri Lanka Tour" designed to immerse you in the rich cultural heritage and breathtaking landscapes of this beautiful island...
            </p>
          </div>

          {/* Trip Highlights Section */}
          <div className="mt-10">
            <h2 className="text-lg md:text-xl font-semibold">Trip Highlights</h2>
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

                // more highlights...
              ].map((highlight, index) => (
                <button
                  key={index}
                  className="w-full md:w-[368px] h-[48px] bg-lighter-blue text-white py-2 px-4 text-xs md:text-sm shadow-md transition duration-300 rounded-xl"
                >
                  {highlight}
                </button>
              ))}
            </div>
          </div>

          {/* Provider Section */}
          <div className="mt-10">
            <h2 className="text-lg md:text-xl font-semibold mb-3">Provider</h2>
            <p className="text-sm">AVEM Travels Pvt Ltd.</p>
            <div className="flex justify-between items-center mt-1">
              <button className="w-[150px] md:w-[192px] h-[40px] md:h-[48px] rounded-xl bg-lighter-blue text-white py-2 px-4 text-xs md:text-sm shadow-md transition duration-300 flex items-center space-x-4">
                <span>Visit their site</span>
                <img
                  src={arrowSquareUpRight}
                  alt="Arrow Icon"
                  className="w-5 h-5"
                />
              </button>
              <button className="bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:from-[#3d210a] hover:via-[#a9601b] hover:to-[#3d210a] text-white py-2 px-4 rounded-xl flex items-center justify-center text-sm md:text-[20px] transition-colors duration-300 w-[200px] md:w-[270px] h-[48px] md:h-[62px] cursor-pointer">
                <span>Book This Trip</span>
                <img
                  src={Vector}
                  alt="Vector Icon"
                  className="w-4 h-4 ml-2 cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Related Trips Section */}
        <div className="pt-[38px] mb-[60px] p-4">
          <div className="text-center pb-11">
            <h2 className="text-lg md:text-[32.13px] font-bold text-custom-blue">
              Related trips you might be interested in
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TripDetails;