import React, { useState, useEffect } from "react";

const ImageCom = ({ image, alt, options }) => {
  const baseUrl = process.env.PUBLIC_URL + ".netlify/images?url=/";
  const imageURL = baseUrl + image + ".jpg&" + new URLSearchParams(options);

  return <img src={imageURL} alt={alt} />;
};

export default ImageCom;
