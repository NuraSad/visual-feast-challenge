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
  //   const localUrl = "/" + image + ".jpg";
  const imageURL = baseUrl + image + ".jpg&" + new URLSearchParams(options);

  const containerClass = isOpen ? "img-field-fullscreen" : "img-field";
  const handleImageClick = () => {
    const scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    setTimeout(() => {
      window.scroll({ top: -1, left: 0, behavior: "smooth" });
      document.body.style.overflow = "hidden";
    }, 10);
    setScrollH(scrollTop);
    setIsOpen(true);
  };

  const handleCloseButton = () => {
    // workaround mobile safari not working properly
    setTimeout(() => {
      window.scroll({ top: scrollH, left: 0, behavior: "smooth" });
      document.body.style.overflow = "";
    }, 10);
    setIsOpen(false);
  };

  return (
    <div className={containerClass}>
      {!isOpen ? (
        <img src={imageURL} alt={alt} onClick={handleImageClick} />
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
