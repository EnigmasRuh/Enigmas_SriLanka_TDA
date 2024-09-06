import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Visa Application", href: "/visaapplication" },
  { label: "About Sri Lanka", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {

  const navigate = useNavigate();

  const scrolltoHash = (element_id) => {
    const element = document.getElementById(element_id);

    if (!element) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);


  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (href) => {
    setMobileDrawerOpen(false); // Close the mobile drawer when a navigation item is clicked
    navigate(href); // Navigate to the specified route
  };

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 border-b border-[#01224D] transition duration-300",
        { "backdrop-blur-lg h-[69px] md:h-[85px]": hasScrolled }
      )}
    >
      <div className="absolute w-full">
        <div className="container relative px-4 mx-auto lg:text-sm">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Text-based Logo */}
            <div className="z-10 flex flex-col items-start flex-shrink-0">
              <div
                className={clsx(
                  "text-4xl font-Qwigley my-0", 
                  "text-[#0B2838]"
                )}
              >
                Sri Lanka
              </div>
              <div
                className={clsx(
                  "text-sm font-Prompt my-0 ", 
                  "text-[#0B2838]"
                )}
              >
                Tourism Development Authority
              </div>
            </div>
            {/* Navigation Items and Login Button on the right */}
            <div className="flex items-center">
              <ul className="hidden space-x-6 lg:flex">
                {navItems.map((item, index) => (
                  <li key={index} className="relative">
                    <div
                      className={clsx(
                        "relative px-3 py-2 transition duration-300",
                        "text-[#0B2838] hover:bg-[#D68631] hover:text-white rounded-[10px]",
                        "group cursor-pointer"
                      )}
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.label}
                      <span
                        className={clsx(
                          "absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300",
                          "group-hover:w-full w-0",
                          "rounded-[10px]"
                        )}
                      ></span>
                    </div>
                  </li>
                ))}
              </ul>
              {/* Login Button */}
              <div className="ml-4">
                <a
                  href="/login"
                  className="px-4 py-2 bg-[#0B2838] text-white rounded-[14px] shadow-sm hover:shadow-md transition duration-300"
                >

                  {localStorage.getItem('auth-token')?"Name of the user":"Login"}

                </a>
              </div>
              <div className="flex-col justify-end lg:hidden md:flex">
                <HamburgerMenu
                  isOpen={mobileDrawerOpen}
                  toggleMenu={toggleNavbar}
                />
              </div>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-[#0B2838] w-full pt-2 flex flex-col justify-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="py-3 pl-8 border-b-2 border-primary-background"
                  >
                    <div
                      className="hover:cursor-pointer"
                      onClick={() => {
                        toggleNavbar();
                        scrolltoHash(item.href);
                      }}
                    >
                      {item.label}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  toggleNavbar: PropTypes.func.isRequired,
};

const HamburgerMenu = ({ toggleMenu, isOpen }) => (
  <button
    onClick={toggleMenu}
    className="relative flex flex-col items-center justify-between w-6 h-4 group"
    style={{ margin: '20px' }}
  >
    <span
      className={clsx(
        "block w-full h-0.5 bg-black bg-text-gradient transform transition duration-300",
        { "rotate-45 translate-y-1.5": isOpen }
      )}
    ></span>
    <span
      className={clsx(
        "block w-full h-0.5 bg-black bg-text-gradient transition duration-300",
        { "opacity-0": isOpen }
      )}
    ></span>
    <span
      className={clsx(
        "block w-full h-0.5 bg-black bg-text-gradient transform transition duration-300",
        { "-rotate-45 -translate-y-1.5": isOpen }
      )}
    ></span>
  </button>
);

HamburgerMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Navbar;
