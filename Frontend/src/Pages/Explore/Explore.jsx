import TripCard from '../../Components/UI/TripCard'
import bcoverImage from '../../assets/logo.png';
import elephant from '../../assets/elephant.png';
import wheelr from '../../assets/3wheelr.png';
import perhara from '../../assets/kandyperahara.png';
import pettigala from '../../assets/pettigala.png';
import trainwithgirl from '../../assets/trainwithgirl.png';
import galle from '../../assets/galle.png';

function ExplorePage() {

  const mockTrips = [
    {
      id: 1,
      title: "Sri Lanka Safari Adventure",
      duration: "14 Days",
      type: "Premium",
      groupSize: "4 - 16 People",
      image: elephant
    },
    {
      id: 2,
      title: "Cultural Sri Lanka",
      duration: "10 Days",
      type: "Standard",
      groupSize: "5 - 20 People",
      image: perhara
    },
    {
      id: 3,
      title: "Sri Lanka Serenity",
      duration: "7 Days",
      type: "Luxury",
      groupSize: "2 - 10 People",
      image: galle
    },
    {
      id: 4,
      title: "Family Fun in Sri Lanka",
      duration: "12 Days",
      type: "Premium",
      groupSize: "6 - 15 People",
      image: pettigala
    },
    {
      id: 5,
      title: "Sri Lanka Explorer",
      duration: "8 Days",
      type: "Standard",
      groupSize: "4 - 12 People",
      image: trainwithgirl
    },
    {
      id: 6,
      title: "Sri Lanka Discovery",
      duration: "5 Days",
      type: "Premium",
      groupSize: "3 - 8 People",
      image: wheelr
    }
  ];

  fetch('http://localhost:5000/api/packages', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(response => response.json()).then(data => {
    mockTrips = data;
  }
  )

  return (
    <div className="pt-36 p-4">
      <div className="text-center pb-11">
        <h1 className="text-7xl mb-2 font-medium text-[#10465E]">Discover Our Unforgettable Tours</h1>
        <h2 className="text-lg font-Prompt">Embark on extraordinary journeys with our carefully curated selection of tours. </h2>
        <h2 className="text-lg font-Prompt">From thrilling adventures to relaxing retreats, we have something for every traveler.</h2>  
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockTrips.map(trip => (
          <TripCard key={trip.id} trip={trip}  />
        ))}
      </div>
    </div>
  );
}
 
export default ExplorePage;