import React, { useState } from "react";
import "./Image.css";
import WholeImageView from "./WholeImageView";

const ImageCom = ({ idx, image, alt, initOptions }) => {
  const options = { ...initOptions };
  if (idx <= 3) {
    options.h = Math.floor(options.w * 0.75);
    options.fit = "fill";
  }
  const [isOpen, setIsOpen] = useState(false);
  const [scrollH, setScrollH] = useState(0);
  const baseUrl = process.env.PUBLIC_URL + ".netlify/images?url=/";
  //   change before build
  const localUrl = "/" + image + ".jpg";
  const imageURL = baseUrl + image + ".jpg&" + new URLSearchParams(options);

  const containerClass = isOpen ? "img-field-fullscreen" : "img-field";
  const handelImageClick = () => {
    let body = document.querySelector("body");
    body.style.overflow = "hidden";
    const scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setScrollH(scrollTop);
    setIsOpen(true);
  };

  const handleCloseButton = () => {
    let body = document.querySelector("body");
    body.style.overflow = "";
    document.body.scrollTop = document.documentElement.scrollTop = scrollH;
    setIsOpen(false);
  };

  return (
    <div className={containerClass}>
      {!isOpen ? (
        <img src={localUrl} alt={alt} onClick={handelImageClick} />
      ) : (
        <WholeImageView
          imgUrl={imageURL}
          alt={alt}
          options={options}
          onClose={handleCloseButton}
        />
      )}
    </div>
  );
};

export default ImageCom;
