import React from 'react'
import { Link } from 'react-router-dom';




const TravelerOnboarding = () => {
    return (
        <div>





            <section className="py-10 bg-white" style={{ marginTop: 60 }}>
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-2" style={{ fontSize: 70 }}>How can we help you?</h1>
                    <p className="text-gray-500 mb-8" style={{ fontSize: 20, marginTop: 25 }}>
                        Seamlessly organize your Sri Lankan adventure with our comprehensive planning tools.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Visa Application */}

                        <div className="border-2 border-black p-6 rounded-3xl shadow hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-left text-xl font-semibold text-amber-700 mb-4" style={{ fontSize: 40 }}>
                                <div className='mt-6'>Visa</div>

                                <div className='mt-6 mb-6'>Application</div>
                            </h2>
                            <p className="text-left text-xl   mb-4" style={{ fontSize: 20, lineHeight: 1.5 }}>
                                Get quick assistance and updates on your Electronic Travel Authorization (ETA) application for Sri Lanka.
                            </p>
                            <button className="bg-gradient-to-r from-orange-600 to-yellow-700 text-white px-6 py-3 rounded-xl flex items-center text-lg" >
                                <span>Apply Visa</span>
                                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                </svg>

                            </button>
                        </div>

                        {/* Accommodation Finder */}

                        <div className="border-2 border-black p-6 rounded-3xl shadow hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-left text-xl font-semibold text-amber-700 mb-4" style={{ fontSize: 40 }}>

                                <div className='mt-6'>Accommodation</div>

                                <div className='mt-6 mb-6'>Finder</div>

                            </h2>
                            <p className="text-left text-xl   mb-4" style={{ fontSize: 20, lineHeight: 1.5 }}>
                                Discover your perfect stay. Browse and book verified accommodations across Sri Lanka, from luxury resorts to cozy homestays.
                            </p>
                            <button className="bg-gradient-to-r from-orange-600 to-yellow-700 text-white px-6 py-3 rounded-xl flex items-center text-lg" >
                                <span>Find Best Places</span>
                                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                </svg>

                            </button>
                        </div>

                        {/* Transportation Guide */}
                        <div className="border-2 border-black p-6 rounded-3xl shadow hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-left text-xl font-semibold text-amber-700 mb-4" style={{ fontSize: 40 }}>

                                <div className='mt-6'>Transportation</div>

                                <div className='mt-6 mb-6'>Guide</div>

                            </h2>
                            <p className="text-left text-xl   mb-4" style={{ fontSize: 20, lineHeight: 1.5 }}>
                                Navigate Sri Lanka with ease. Access up-to-date information on local transport options, from scenic train rides to convenient tuk-tuks.
                            </p>
                            <button className="bg-gradient-to-r from-orange-600 to-yellow-700 text-white px-6 py-3 rounded-xl flex items-center text-lg" >
                                <span>Learn More</span>
                                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                </svg>

                            </button>
                        </div>

                        {/* Travel Packages */}
                        <div className="border-2 border-black p-6 rounded-3xl shadow hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-left text-xl font-semibold text-amber-700 mb-4" style={{ fontSize: 40 }}>



                                <div className='mt-6'>Travel</div>

                                <div className='mt-6 mb-6'>Packages</div>



                            </h2>
                            <p className="text-left text-xl   mb-4" style={{ fontSize: 20, lineHeight: 1.5 }}>
                                Explore curated travel packages that offer convenient transport and experiences across Sri Lanka.
                            </p>

                            <button className="bg-gradient-to-r from-orange-600 to-yellow-700 text-white px-6 py-3 rounded-xl flex items-center text-lg" >
                                <span>Explore All</span>
                                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                </svg>

                            </button>

                        </div>

                        {/* Just Explore */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-800 border-2 border-black p-6 rounded-3xl shadow hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-left text-xl font-semibold text-amber-700 mb-4" style={{ fontSize: 40 }}>


                                <div className='mt-6'>Just</div>

                                <div className='mt-6 mb-6'>Explore</div>




                            </h2>
                            <p className="text-left text-xl   mb-10" style={{ fontSize: 20, lineHeight: 1.5 , color: 'white' }}>
                                Discover all available travel resources and insider tips for navigating Sri Lanka effortlessly, ensuring a seamless and enriching travel experience.
                            </p>
                            <button className="bg-gradient-to-r from-orange-600 to-yellow-700 text-white px-6 py-3 rounded-xl flex items-center text-lg" >
                                <span>Explore All</span>
                                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
            </section>





        </div>
    )
}

export default TravelerOnboarding