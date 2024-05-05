import { toContainElement } from "@testing-library/jest-dom/matchers";
import React, { useState, useEffect, useRef } from "react";
import ImageCom from "./Image";

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
  const [rootWidth, setrootWidth] = useState(window.innerWidth);
  const [initialOptions, _] = useState({
    w: rootWidth > 700 ? Math.floor(rootWidth / 4) : rootWidth,
    h: "",
    fit: "contain",
    position: "center",
  });

  return (
    <div>
      {imagesList.map((image, key) => (
        <ImageCom
          key={key}
          image={image}
          alt={image}
          options={initialOptions}
        />
      ))}
    </div>
  );
};

export default Gallery;
