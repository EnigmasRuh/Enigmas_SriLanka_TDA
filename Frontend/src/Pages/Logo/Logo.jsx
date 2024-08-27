import React from 'react'
import BW_eu_flag from '../../assets/BW_eu_flag.png'
import BW_ro_flag from '../../assets/BW_ro_flag.png'
import BW_sl_flag from '../../assets/BW_sl_flag.png'

const Logo = () => {
  return (
    <div className='w-full h-auto relative z-[-1]] p-3'>
        <section class="rounded-3xl relative z-[-1] ">
          <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 backdrop-filter backdrop-blur-lg bg-black bg-opacity-30 p-4 mx-4 md:mx-8 lg:mx-16 border border-gray-300 rounded-3xl">
            <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 dark:text-gray-400 px-4 ">
              <a href="#" className="flex items-center justify-center">
                <img
                  className="h-auto hover:text-gray-900 dark:hover:text-white"
                  src={BW_eu_flag}
                ></img>
              </a>
              <a href="#" className="flex items-center justify-center">
                <img
                  className="h-auto hover:text-gray-900 dark:hover:text-white"
                  src={BW_ro_flag}
                ></img>
              </a>
              <a href="#" className="flex items-center justify-center">
                <img
                  className="h-auto hover:text-gray-900 dark:hover:text-white"
                  src={BW_sl_flag}
                ></img>
              </a>

            </div>
          </div>
        </section>
    </div>
  )
}

export default Logo