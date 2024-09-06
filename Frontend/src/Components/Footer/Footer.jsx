import React from "react"
import x from '../../assets/twitter-alt-circle.png';
import fb from '../../assets/facebook.png';
import ig from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import clsx from "clsx";

function Footer() {
  return (
    <section className="relative px-10 font-Prompt ">
      <hr className="h-px my-4 bg-[#D68631] border-0" />

      <div className="container py-4">
        <div className="md:flex justify-between">
          <div className="max-w-[50ch]">
            <div
              className={clsx(
                "text-7xl font-Qwigley", // Assuming you have this font available
                "text-[#0B2838]",
                "text-subtile",
                "mb-4",
                
              )}
            >
              Sri Lanka
            </div>
            <p className="text-gray-800 font-bold">
              A land where history whispers from ancient ruins, where nature paints with vibrant hues, and where warm smiles greet you at every turn.
              Embark on a journey through our island paradise and uncover experiences that will captivate your senses and touch your soul.
            </p>
          </div>
          <div className="py-6 md:py-0 min-w-[30ch] text-darker-blue text-gray-800 font-bold">
            <h4 className="font-bold pb-2 text-lighter-blue">General Links</h4>
            <ul >
              <li className="mb-1 ">
                <a href="https://ieee.lk/" target="_blank" >Sri Lanka International Travel Information</a>
              </li>
              <li className="mb-1">
                <a href="https://ieee.lk/community/student-activities-committee/" target="_blank">Sri Lanka Travel Advisory</a>
              </li>
              <li className="mb-1">
                <a href="https://ieee.lk/community/young-professionals/" target="_blank">Sri Lanka Tourism Development Authority: SLTDA</a>
              </li>

            </ul>
          </div>
          <div>
            <h4 className="font-bold pb-4  min-w-[30ch] text-lighter-blue">Social Media Links</h4>
            <div className="flex items-center gap-4 ">
              <a href="https://www.facebook.com/IEEESLSYWC/" target="_blank">
                <img src={fb} alt="" className="h-8" />
              </a>
              <a href="https://www.instagram.com/ieeeslsywc/?hl=en" target="_blank">
                <img
                  src={ig}
                  alt=""
                  className="h-8"
                />
              </a>
              <a href="https://www.linkedin.com/company/ieee-slsywc/?originalSubdomain=lk" target="_blank">
                <img
                  src={linkedin}
                  alt=""
                  className="h-8"
                />
              </a>
              <a href="https://x.com/ieeeslsywc" target="_blank">
                <img src={x} alt="" className="h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-main-gradient absolute bottom-0 z-50"></div>
    </section>
  )
}

export default Footer
