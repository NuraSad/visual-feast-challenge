import React, { useState } from "react";
import "./WholeImageView.css";

const WholeImageView = ({ imgUrl, alt, options, onClose }) => {
  const baseImageURL = imgUrl.split("&")[0];
  const [params, setParams] = useState({ ...options });
  const [imageURL, setImageURL] = useState(baseImageURL);

  const handleInputChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
    console.log(params);
  };
  const handleButtonClick = () => {
    setImageURL(baseImageURL + "&" + new URLSearchParams(params));
  };
  return (
    <>
      <img src={imageURL} alr={alt} />
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
