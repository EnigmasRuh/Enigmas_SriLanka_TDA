import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

<<<<<<< HEAD
const TripCard = ({ trip }) => {
  const navigate = useNavigate();

  const handleViewTripClick = () => {
    navigate('/trip/${trip.id}');
=======

const ProductCard = ({trip}) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/explore:${id}`);  // Navigates to the TripDetails page with the trip ID
>>>>>>> c5854ac2ea1542b9014876e0dd883c97ed71a7a6
  };


  return (
<<<<<<< HEAD
    <div className="relative flex flex-col justify-between p-4 mb-4 transition duration-200 ease-in-out border border-transparent shadow-lg rounded-[45px] bg-white w-full max-w-[438px] mx-auto hover:bg-[#D68631] group">
      <img
        src={trip.image}
        alt={trip.title}
=======
    <div
      className="relative flex flex-col justify-between p-4 mb-4 transition duration-200 ease-in-out border border-transparent shadow-lg cursor-pointer rounded-[45px] bg-white w-full max-w-[438px] mx-auto hover:bg-[#D68631] group"
    >
      <img   
        src={bcoverImage} 
        alt="Sri Lanka Explorer"
>>>>>>> c5854ac2ea1542b9014876e0dd883c97ed71a7a6
        className="object-cover mb-4 rounded-[29.25px] w-full h-[279.75px] shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
      />
      <div className="text-left"> 
        <h5 className="text-[24px] font-medium text-[#5A3111] font-[Prompt]">
          {trip.title}
        </h5>
        <span className="text-[24px] font-medium text-[#5A3111] font-[Prompt]">
<<<<<<< HEAD
          {trip.duration} - {trip.type}
=======
          {trip.duration} - Premium
>>>>>>> c5854ac2ea1542b9014876e0dd883c97ed71a7a6
        </span>
        <div className="flex items-center justify-between mt-4">
          <span className="text-[18px] font-medium text-[#0B2838] font-[Prompt]">{trip.duration}</span>
          <span className="text-[18px] font-medium text-[#0B2838] font-[Prompt]">{trip.groupSize}</span>
          <button
            onClick={() => handleNavigate(trip.id)} 
            className="w-[156px] h-[48px] text-white bg-[#0B2838] text-[16px] font-medium rounded-[14px] transition-colors duration-200 group-hover:bg-white group-hover:text-[#0B2838]"
          >
            View Trip
          </button>
        </div>
      </div>
    </div>
  );
};

TripCard.propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    groupSize: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default TripCard;