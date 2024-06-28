import React, { useEffect, useRef, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import SideBar from "./mobile-nav";

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "Our Journey", href: "#journey" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
];

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="z-50 max-[2000px]:fixed top-0 left-0 w-full bg-white shadow-md ">
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <nav className="w-[95%] mx-auto md:w-[90%] flex items-center justify-between py-2">
        <img
          src="/logo.svg"
          alt="logo"
          width={215}
          height={55}
          className="relative left-[-1%] max-[350px]:w-32 max-sm:w-40 object-cover aspect-auto"
        />

        <div className="max-lg:hidden flex items-center gap-7 text-primary-black-100 capitalize">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="nav-links relative hover:font-semibold">
              <p>{item.name}</p>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
              <button
                className="bg-primary-blue text-white py-2 lg:py-3 px-5 lg:px-7 rounded-3xl transition duration-500 hover:bg-primary-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-purple"
                onClick={() => setIsOpen(!isOpen)}
              >
                Payments
              </button>
            </div>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Dues
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Verify Payment
                  </a>
                </div>
              </div>
            )}
          </div>

          <HiMenuAlt3 size={25} className="lg:hidden" onClick={() => setSidebarOpen(true)} />
        </div>
      </nav>
    </div>
  );
};
