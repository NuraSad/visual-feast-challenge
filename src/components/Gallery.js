import React, { useState, useEffect, useRef } from "react";
import ImageCom from "./Image";
import "./Gallery.css";

const imagesList = [
  "freya1",
  "freya2",
  "freya3",
  "freya6",
  "freya4",
  "freya5",
  "freya8",
  "freya9",
  "freya11",
  "freya12",
  "freya13",
  "freya15",
];

const Gallery = () => {
  const [rootWidth, setRootWidth] = useState(window.innerWidth);
  const [initialOptions] = useState({
    w: rootWidth > 700 ? Math.floor((rootWidth - 60) / 4) : rootWidth,
    h: "",
    fit: "contain",
    position: "center",
  });

  return (
    <div className="gallery-container" role="listbox">
      {imagesList.map((image, idx) => (
        <ImageCom
          key={idx}
          idx={idx}
          image={image}
          alt={image}
          initOptions={initialOptions}
        />
      ))}
    </div>
  );
};

export default Gallery;
