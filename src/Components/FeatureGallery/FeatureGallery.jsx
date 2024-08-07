import React from "react";
import Slider from "react-slick";
import "./FeatureGallery.css";
import Image from "../Assets/Image.png";

const FeatureGallery = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="feature pb-4">
      <h3 className="h-gallery">Feature Gallery</h3>
      <div className="pb-5">
        <Slider {...settings}>
          <div className="d-block">
            <img src={Image} alt="" className="slider-img" />
            <div className="d-flex justify-content-center">
              <button className="btn-abstract">Abstract</button>
            </div>
          </div>
          <div className="d-block">
            <img src={Image} alt="" className="slider-img" />
            <div className="d-flex justify-content-center">
              <button className="btn-abstract">Still life</button>
            </div>
          </div>
          <div className="d-block">
            <img src={Image} alt="" className="slider-img" />
            <div className="d-flex justify-content-center">
              <button className="btn-abstract">Transport</button>
            </div>
          </div>
          <div className="d-block">
            <img src={Image} alt="" className="slider-img" />
            <div className="d-flex justify-content-center">
              <button className="btn-abstract">Office wall art</button>
            </div>
          </div>
          <div className="d-block">
            <img src={Image} alt="" className="slider-img" />
            <div className="d-flex justify-content-center">
              <button className="btn-abstract">Abstract</button>
            </div>
          </div>
          <div className="d-block">
            <img src={Image} alt="" className="slider-img" />
            <div className="d-flex justify-content-center">
              <button className="btn-abstract">Abstract</button>
            </div>
          </div>
          <div className="d-block">
            <img src={Image} alt="" className="slider-img" />
            <div className="d-flex justify-content-center">
              <button className="btn-abstract">Still life</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FeatureGallery;
