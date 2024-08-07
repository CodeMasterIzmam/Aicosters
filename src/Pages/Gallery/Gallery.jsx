import React, { useState } from "react";
import "./Gallery.css";
import { Link } from "react-router-dom";
import { Slider } from "antd";
import Body from "../../Components/GalleryBody/Body";

const Gallery = () => {
 
  return (
    <div className="gallery">
      <div className="d-flex links py-4">
        {" "}
        <Link to="/">Home</Link>
        <span className="sp px-4">/</span>
        <Link to="#">featured gallary</Link>
      </div>
      <div className="d-flex headlist py-3">
        <h1 className="text-light gallery-h">Featured Gallary</h1>
      </div>
      <Body/>
      <div className="d-flex justify-content-center">
          <button className="next-btn btn-primary">Next</button>
        </div>
    </div>
  );
};

export default Gallery;
