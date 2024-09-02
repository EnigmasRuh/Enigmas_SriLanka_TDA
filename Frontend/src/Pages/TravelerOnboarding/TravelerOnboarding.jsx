import React from 'react'
import { Link } from 'react-router-dom';

import './TravellerOnboardingPage.css';


const TravelerOnboarding = () => {
    return (
        <div>





            <section className="py-10 bg-white" style={{ marginTop: 60 }}>
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-2 font-prompt" style={{ fontSize: 70 }}>How can we help you?</h1>
                    <p className="text-gray-500 mb-8" style={{ fontSize: 20, marginTop: 25 }}>
                        Seamlessly organize your Sri Lankan adventure with our comprehensive planning tools.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Visa Application */}
                        <div className="transition-all duration-500 hover:text-white border-2 border-black p-6 rounded-3xl shadow hover:shadow-lg hover:bg-[#0B2838]">
                            <h2 className="font-prompt text-left text-xl font-semibold text-[#D68631] mb-4" style={{ fontSize: 40 }}>
                                <div className='mt-6'>Visa</div>

                                <div className='mt-6 mb-6'>Application</div>
                            </h2>
                            <p className="text-left text-xl font-prompt mb-4" style={{ fontSize: 20, lineHeight: 1.5 }}>
                                Get quick assistance and updates on your Electronic Travel Authorization (ETA) application for Sri Lanka.
                            </p>
                            <button class="  transition-colors duration-500 hover:bg-none bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:bg-[#D68631] text-white px-6 py-4 rounded-xl flex items-center text-lg ">
                                <span>Apply Visa</span>
                                <svg class="w-6 h-6 ml-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                                </svg>
                            </button>
                        </div>


                        {/* Accommodation Finder */}

                        <div className=" transition-all duration-500 hover:bg-[#0B2838]  hover:text-white border-2 border-black p-6 rounded-3xl shadow hover:shadow-lg">
                            <h2 className=" text-[#D68631] text-left text-xl font-semibold text-amber-700 mb-4" style={{ fontSize: 40 }}>

                                <div className='mt-6'>Accommodation</div>

                                <div className='mt-6 mb-6'>Finder</div>

                            </h2>
                            <p className="text-left text-xl   mb-4" style={{ fontSize: 20, lineHeight: 1.5 }}>
                                Discover your perfect stay. Browse and book verified accommodations across Sri Lanka, from luxury resorts to cozy homestays.
                            </p>
                            <button class="transition-all duration-500 hover:bg-none bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:bg-[#D68631] text-white px-6 py-4 rounded-xl flex items-center text-lg transition-colors duration-300">
                                <span>Find Best Places</span>
                                <svg class="w-6 h-6 ml-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                                </svg>
                            </button>
                        </div>

                        {/* Transportation Guide */}
                        <div className="  transition-colors duration-500 hover:bg-[#0B2838]  hover:text-white border-2 border-black p-6 rounded-3xl shadow hover:shadow-lg ">
                            <h2 className=" text-[#D68631] text-left text-xl font-semibold text-amber-700 mb-4" style={{ fontSize: 40 }}>

                                <div className='mt-6'>Transportation</div>

                                <div className='mt-6 mb-6'>Guide</div>

                            </h2>
                            <p className="text-left text-xl   mb-4" style={{ fontSize: 20, lineHeight: 1.5 }}>
                                Navigate Sri Lanka with ease. Access up-to-date information on local transport options, from scenic train rides to convenient tuk-tuks.
                            </p>
                            <button class="hover:bg-none transition-all duration-500 bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:bg-[#D68631] text-white px-6 py-4 rounded-xl flex items-center text-lg transition-colors duration-300">
                                <span>Learn More</span>
                                <svg class="w-6 h-6 ml-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                                </svg>
                            </button>
                        </div>

                        {/* Travel Packages */}
                        <div className=" hover:bg-[#0B2838] transition-colors duration-500  hover:text-white border-2 border-black p-6 rounded-3xl shadow hover:shadow-lg bg-white">
                            <h2 className=" text-[#D68631] text-left text-xl font-semibold text-amber-700 mb-4" style={{ fontSize: 40 }}>



                                <div className='mt-6'>Travel</div>

                                <div className='mt-6 mb-6'>Packages</div>



                            </h2>
                            <p className="text-left text-xl   mb-4" style={{ fontSize: 20, lineHeight: 1.5 }}>
                                Explore curated travel packages that offer convenient transport and experiences across Sri Lanka.
                            </p>

                            <button class="transition-all duration-500 hover:bg-none bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:bg-[#D68631] text-white px-6 py-4 rounded-xl flex items-center text-lg transition-colors duration-300">
                                <span>Explore packages</span>
                                <svg class="w-6 h-6 ml-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                                </svg>
                            </button>

                        </div>

                        {/* Just Explore */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#0B2838] border-2 border-black p-6 rounded-3xl shadow hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-[#D68631] text-left text-xl font-semibold text-amber-700 mb-4" style={{ fontSize: 40 }}>


                                <div className='mt-6'>Just</div>

                                <div className='mt-6 mb-6'>Explore</div>




                            </h2>
                            <p className="text-left text-xl   mb-10" style={{ fontSize: 20, lineHeight: 1.5, color: 'white' }}>
                                Discover all available travel resources and insider tips for navigating Sri Lanka effortlessly, ensuring a seamless and enriching travel experience.
                            </p>
                            <button class=" transition-all duration-500 hover:bg-none bg-gradient-to-r from-[#5A3111] via-[#D68631] to-[#5A3111] hover:bg-[#D68631] text-white px-6 py-4 rounded-xl flex items-center text-lg transition-colors duration-300">
                                <span>Explore All</span>
                                <svg class="w-6 h-6 ml-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
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