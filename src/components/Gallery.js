import { toContainElement } from "@testing-library/jest-dom/matchers";
import React, { useState, useEffect, useRef } from "react";

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
  const [images, setImages] = useState([]);
  const [rootWidth, setrootWidth] = useState(0);
  const rootWidthRef = useRef(null);

  useEffect(() => {
    setrootWidth(rootWidthRef.current.clientWidth);
  }, []);

  const initialW = Math.floor(rootWidth / 5);

  const initialParams = {
    w: initialW,
    h: null,
    fit: "contain",
    position: "center",
  };

  return (
    <div>
      {imagesList.map((image, key) => {
        return (
          <Image key={key} image={image} alt={image} params={initialParams} />
        );
      })}
    </div>
  );
};

export default Gallery;
