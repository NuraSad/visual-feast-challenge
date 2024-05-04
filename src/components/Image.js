import React, { useState, useEffect } from "react";

const imageBaseURL =
  "https://visual-feast-challenge.netlify.app/.netlify/images?url=/";

const Image = (image, alt, params) => {
  const source = imageBaseURL + image + "jpg" + new URLSearchParams(params);

  return <img src={source} alt={alt} />;
};

export default Image;
