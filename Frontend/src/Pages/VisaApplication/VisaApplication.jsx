import React from 'react'
import event_vector from '../../assets/event_vector.jpg'
import funeral from '../../assets/funeral.jpg'
import hospital from '../../assets/hospital.jpg'
import bank from '../../assets/bank.jpg'

import { useState } from 'react'
import Button from '../../components/UI/Button'

const VisaApplication = () => {

    const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div id='VisaApplication'  className="w-full h-auto py-4 flex flex-col items-center mt-40 mb-20 relative z-[-1]">
       
        <h1 className="mb-20 text-4xl font-bold">SL CLUB SIBIU Welfare VisaApplication</h1>


        <div className="container relative flex flex-col px-6 mx-auto space-y-8">
        
        <div
            className="absolute inset-0 z-0 w-2 h-full shadow-md bg-gray md:mx-auto md:right-0 md:left-0"
        ></div>
        <div className={`relative ${showAnswer ? "clicked" : ""}` }>
            <img
                src={funeral}
                alt=""
                className="object-cover w-24 h-24 border-4 rounded-full shadow-md bg-inherit xs:absolute md:mx-auto md:left-0 md:right-0"      
            />
            <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16">
            <div className="absolute inset-0 w-4 h-4 transform rotate-45 bg-gradient-to-r xs:top-11 xs:left-26 md:left-14" aria-hidden="true"></div>

                <div className="p-6 rounded-md shadow-md bg-inherit">
                    
                 
                    <h1 className="pt-1 font-bold text-1xl ">
                        Funeral VisaApplication
                    </h1>
                    <p className="pt-1 text-colors-custom-red-100">
                    In the event of a sudden death of a member or the member's immediate family, a maximum amount of Rs.300000 Rs will be given.
                    <br/><br/>
                    For any other type of urgent financial requirement, a sum of up to Rs. 100000   will be provided.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative ">
            <img
                src={hospital}
                alt=""

                className="object-cover w-24 h-24 border-4 rounded-full shadow-md bg-inherit xs:absolute md:mx-auto md:left-0 md:right-0"

            />
            <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:pl-auto md:ml-0 md:mr-auto md:pr-16">

         
                
                <div className="p-6 rounded-md shadow-md bg-inherit">
                  
                    <h1 className="pt-1 font-bold text-1xl ">Hospital VisaApplication</h1>
                    <p className="pt-1 text-colors-custom-red-100">
                    
                    For emergency medical assistance (hospitalization, surgery, etc.), up to  Rs. 150000 Rs will be provided.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative ">
            <img
                src={bank}
                alt=""

                className="object-cover w-24 h-24 border-4 rounded-full shadow-md bg-inherit xs:absolute md:mx-auto md:left-0 md:right-0"/>

            <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16">
                <div className="absolute inset-0 w-4 h-4 transform rotate-45 left-10 xs:top-11 xs:left-26 md:left-14" aria-hidden="true"></div>
                <div className="p-6 rounded-md shadow-md bg-inherit">
              
                    <h1 className="pt-1 font-bold text-1xl">Bank VisaApplication</h1>
                    <p className="pt-1 text-colors-custom-red-100">
                    Up to Rs. 100000 can be borrowed at 0% interest for a maximum period of six months.
                    <br/><br/>
                    Assistance in the form of a loan is also available. Up to Rs.2500  can be borrowed at 0% interest for a maximum period of one year.
                    </p>
                </div>
            </div>
        </div>
        <div className="relative ">
            <img
                src={event_vector}
                alt=""

                className="object-cover w-24 h-24 border-4 rounded-full shadow-md bg-inherit xs:absolute md:mx-auto md:left-0 md:right-0"

            />
            <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:pl-auto md:ml-0 md:mr-auto md:pr-16">

         
                
                <div className="p-6 rounded-md shadow-md bg-inherit">
                   
                    <h1 className="pt-1 font-bold text-1xl ">Bank VisaApplication</h1>
                    <p className="pt-1 text-colors-custom-red-100">
                    
                    Up to Rs. 1000 can be borrowed at 0% interest for a maximum period of six months.
                    <br/><br/>
                    A discount of 20% will be given to members for services provided by the association.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className='p-10 font-bold'>
    Members can get their urgent financial requirements fulfilled by submitting an application.
    </div>
    <div className='p-10 font-bold'>
       <Button className='text-white bg-red-700'>emergency VisaApplication</Button>
    </div>
    </div>
  )
}

export default VisaApplication