import React, { useState } from "react";
import ImageCom from "./Image";
import "./Gallery.css";

const imagesList = [
  { img: "freya1", alt: "Black cat is showing her belly on the floor" },
  { img: "freya3", alt: "Black cat is looking forward" },
  { img: "freya6", alt: "Black cat is showing her belly on the sofa" },
  { img: "freya2", alt: "Black cat is lying on the sofa" },
  {
    img: "freya4",
    alt: "Black cat is lying on the sofa with her paws straight",
  },
  {
    img: "freya12",
    alt: "Black cat is lying on the sofa and looks straight into camera",
  },
  { img: "freya9", alt: "Grumpy black cat is lying on the computer cases" },
  { img: "freya5", alt: "Black cat with a toy mouse on her head" },
  { img: "freya13", alt: "Grumpy black cat is sitting on her bed" },
  { img: "freya11", alt: "Black cat is sitting among the New Year's garlands" },
  { img: "freya8", alt: "Black cat with toy ball" },
  {
    img: "freya15",
    alt: "Black cat is looking at the window with small pots next to her",
  },
];

const Gallery = () => {
  const [rootWidth] = useState(window.innerWidth);
  const [initialOptions] = useState({
    w: rootWidth > 768 ? Math.floor((rootWidth - 60) / 4) : rootWidth,
    h: "",
    fit: "contain",
    position: "center",
  });

  return (
    <div id="gallery" className="gallery-container" role="listbox">
      {imagesList.map((image, idx) => (
        <ImageCom
          key={idx}
          idx={idx}
          image={image.img}
          alt={image.alt}
          initOptions={initialOptions}
        />
      ))}
    </div>
  );
};

export default Gallery;
