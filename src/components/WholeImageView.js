import React, { useState } from "react";
import "./WholeImageView.css";
import loadingGif from "./logo/output-onlinegiftools.gif";

const WholeImageView = ({ imgUrl, alt, options, onClose }) => {
  const baseImageURL = imgUrl.split("&")[0];
  const [params, setParams] = useState({ ...options });
  const [imageURL, setImageURL] = useState(baseImageURL);
  const [isLoading, setIsLoading] = useState(true);

  const loadingContainerClassname = isLoading
    ? "loading-container"
    : "loading-container hidden";
  const imageClassname = isLoading ? "custom-img hidden" : "custom-img";
  const testIMGURL =
    "https://663a9f552cc48866a4b159d8--visual-feast-challenge.netlify.app/.netlify/images?url=/freya2.jpg";

  const handleInputChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };
  const handleImageLoad = (e) => {
    if (params.w !== e.target.naturalWidth) {
      setParams({
        ...params,
        w: e.target.naturalWidth,
        h: e.target.naturalHeight,
      });
    }
    setIsLoading(false);
  };
  const handleButtonClick = () => {
    setImageURL(baseImageURL + "&" + new URLSearchParams(params));
  };

  return (
    <>
      <div className={loadingContainerClassname}>
        <img className="loading-logo" src={loadingGif} alt="loading image" />
        <p>Loading...</p>
      </div>
      <img
        className={imageClassname}
        src={imageURL}
        alr={alt}
        onLoad={handleImageLoad}
      />
      <div className="input-field">
        <label>
          Width:
          <input
            type="number"
            value={params.w}
            name="w"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Height:
          <input
            type="number"
            value={params.h}
            name="h"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Fit:
          <select value={params.fit} name="fit" onChange={handleInputChange}>
            <option value="contain">Contain</option>
            <option value="cover">Cover</option>
            <option value="fill">Fill</option>
          </select>
        </label>
        <label>
          Position:
          <select
            value={params.position}
            name="position"
            onChange={handleInputChange}
          >
            <option value="center">Center</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
          </select>
        </label>
        <label>
          Quality (1-100):
          <input
            type="number"
            min="1"
            max="100"
            name="quality"
            value={params.quality ?? 75}
            onChange={handleInputChange}
          />
        </label>
        <button className="submit-button" onClick={handleButtonClick}>
          Get an Image
        </button>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </>
  );
};

export default WholeImageView;
