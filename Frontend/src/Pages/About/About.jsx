import React from 'react'
import city from '../../assets/city.jpg'
import Button from '../../components/UI/Button'

const About = () => {
  return (
    <div id='aboutus'  className="flex flex-col items-center w-full h-auto py-4 mt-40 mb-20 ">
       
        <h1 className="mb-20 text-4xl font-bold">About Us</h1>
            <div className="grid w-full max-w-screen-lg grid-cols-1 gap-4 px-4 sm:gap-12 md:grid-cols-2 lg:grid-cols-2">
               
                <div className="flex items-center justify-center">
                
                <div className="text-2xl ">
                   
                    <img src={city} alt="city" className="w-auto rounded-lg h-1/2" />
                    
                </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                <h1 className="mb-4 text-xl text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sequi quas ex, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sequi quas ex, </h1>
                <Button>Learn More</Button>
                </div>
            </div>
       
    </div>
  )
}

export default About