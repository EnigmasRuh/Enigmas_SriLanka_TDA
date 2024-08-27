import React from 'react'
import event1 from '../../assets/event1.jpg'

const PYTrip = () => {
  return (
    <div id='PYTrip'  className="w-full h-auto py-4 flex flex-col items-center mt-20 mb-20">
       
    <h1 className="text-4xl font-bold mb-20">PYTrip</h1>
        <div className="grid grid-cols-1 gap-4 sm:gap-12 md:grid-cols-2 lg:grid-cols-2 px-4 w-full max-w-screen-lg">
           
            <div className="flex items-center justify-center">
            
            <div className="text-2xl h-auto w-full ">
               
                <img src={event1} alt="city" className="rounded-lg h-auto w-full" />
                
            </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
            <h2 className='text-2xl mb-4 '>Name Of The Event</h2>
            <h1 className="text-xl mb-4 text-left">Event Description .So just what is an event description? In a nutshell, it's a piece of copy that tells people the basic information they need to know to decide whether or not they want to attend the event. It should always include the 5 W's (who, what, when, where, and why) and, if necessary, an H for how.</h1>
          
            </div>
        </div>
   
</div>
  )
}

export default PYTrip