import React, { useState, useEffect } from "react";

const imageBaseURL =
  "https://visual-feast-challenge.netlify.app/.netlify/images?url=/";

const ImageCom = ({ image, alt, options }) => {
  const source = imageBaseURL + image + ".jpg";

  return <img src={source} alt={alt} />;
};

export default ImageCom;
