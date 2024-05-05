import React, { useState, useEffect } from "react";
import "./Image.css";

const ImageCom = ({ idx, image, alt, initOptions }) => {
  const options = { ...initOptions };
  if (idx <= 3) {
    options.h = Math.floor(options.w * 0.75);
    options.fit = "fill";
  }
  const baseUrl = process.env.PUBLIC_URL + ".netlify/images?url=/";
  const imageURL = baseUrl + image + ".jpg&" + new URLSearchParams(options);

  return <img src={imageURL} alt={alt} />;
};

export default ImageCom;
