import React, { useState, useEffect } from "react";

const ImageCom = ({ idx, image, alt, options }) => {
  if (idx <= 3) options.h = options.w * 0.75;
  const baseUrl = process.env.PUBLIC_URL + ".netlify/images?url=/";
  const imageURL = baseUrl + image + ".jpg&" + new URLSearchParams(options);

  return <img src={imageURL} alt={alt} />;
};

export default ImageCom;
