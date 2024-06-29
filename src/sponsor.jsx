import React from "react";

export const Sponsor = () => {
  return (
    <div className="mt-10 w-[95%] md:w-[90%] mx-auto flex items-center justify-center">
      <div className="relative w-full bg-[#000406] py-8 px-8 md:py-12 md:px-12 lg:py-28 lg:px-28 rounded-2xl">
        <div className="absolute inset-0">
          <img src="/sponsor-bg.png" alt="sponsor-bg" />
        </div>

        <div className="z-[2] relative flex flex-col lg:flex-row gap-5 lg:gap-10 items-center lg:justify-between">
          <div className="text-white lg:basis-[60%]">
            <h2 className="font-extrabold text-3xl md:text-4xl max-lg:text-center">Do you want to partner with us?</h2>

            <p className="text-xl max-lg:text-center mt-4">
              Partner with us and help shape the future of technology. Your support can make a significant impact
            </p>
          </div>

          <div className="max-lg:w-full max-lg:mt-5 flex items-center justify-center">
            <a href="tel:+2349034222932">
              <button className="max-lg:w-full bg-primary-blue text-white py-4 px-5 lg:py-5 lg:px-28 rounded-3xl transition duration-500 hover:bg-primary-purple">
                Get in touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
