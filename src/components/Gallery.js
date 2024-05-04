import { toContainElement } from "@testing-library/jest-dom/matchers";
import React, { useState, useEffect, useRef } from "react";
import ImageCom from "./Image";

import Image from "./Image";

const imagesList = [
  "freya1",
  "freya2",
  "freya3",
  "freya4",
  "freya5",
  "freya6",
  "freya7",
  "freya8",
  "freya9",
  "freya10",
  "freya11",
  "freya12",
  "freya13",
  "freya14",
  "freya15",
];

const Gallery = () => {
  const [rootWidth, setrootWidth] = useState(window.innerWidth);
  const [initialOptions, _] = useState({
    w: Math.floor(rootWidth / 5),
    h: null,
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
