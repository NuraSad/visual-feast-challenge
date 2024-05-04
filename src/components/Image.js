import React, { useState, useEffect } from "react";

const ImageCom = ({ image, alt, options }) => {
  const imageStyle = {
    width: options.w,
    height: options.h ?? "auto",
    fit: options.fit,
    position: options.position,
  };
  return (
    <img
      src={process.env.PUBLIC_URL + `.netlify/images?url=/${image}.jpg`}
      alt={alt}
      style={imageStyle}
    />
  );
};

export default ImageCom;
