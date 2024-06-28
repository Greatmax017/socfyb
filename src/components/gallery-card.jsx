import React from "react";

export const GalleryCard = ({ img }) => {
  return (
    <div className="w-full h-[243px] bg-[#D9D9D9]">
      <img
        src={img}
        alt="gallery-card"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
