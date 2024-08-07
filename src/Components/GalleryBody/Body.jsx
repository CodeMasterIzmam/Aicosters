import React, { useState } from "react";
import "./Body.css";
import CartImage from "../Assets/Cart.JPG";
import CartImage2 from "../Assets/Image.jpg";
import { Slider } from "antd";
import Component from "../GallaryComponents/Component";

const Body = () => {
  const [layout, setLayout] = useState(true);
  const productArray = [
    {
      image: CartImage,
      image2: CartImage2,
      name: "Product name",
      price: "£000",
      subject: "Subject name",
      owner: {
        name: "artist name",
      },
      id: Math.random(),
    },
    {
      image: CartImage,
      image2: CartImage2,
      name: "Product name",
      price: "£000",
      subject: "Subject name",
      owner: {
        name: "artist name",
      },
      id: Math.random(),
    },
    {
      image: CartImage,
      image2: CartImage2,
      name: "Product name",
      price: "£000",
      subject: "Subject name",
      owner: {
        name: "artist name",
      },
      id: Math.random(),
    },
    {
      image: CartImage,
      image2: CartImage2,
      name: "Product name",
      price: "£000",
      subject: "Subject name",
      owner: {
        name: "artist name",
      },
      id: Math.random(),
    },
    {
      image: CartImage,
      image2: CartImage2,
      name: "Product name",
      price: "£000",
      subject: "Subject name",
      owner: {
        name: "artist name",
      },
      id: Math.random(),
    },
    {
      image: CartImage,
      image2: CartImage2,
      name: "Product name",
      price: "£000",
      subject: "Subject name",
      owner: {
        name: "artist name",
      },
      id: Math.random(),
    },
  ];
  const sliderStyle = {
    color: "#193452",
    dotActiveBorderColor: "#193452",
  };

  return (
    <div className="g-body">
      <div className="row ">
        <div className="col-md-3">
          <button className="btn-price mb-3">Price</button>
          <div className="d-flex slider-value">
            <h6>£10</h6>
            <h6>£3000</h6>
          </div>
          <Slider
            style={sliderStyle}
            range
            max="3001"
            defaultValue={[3000, 10]}
          />
          <button className="btn-price my-3">Style</button>
          <div className="d-flex d-impress mb-3">
            <input type="checkbox" className="inp-check" />
            <p>Impressionstic (30)</p>
          </div>
          <div className="d-flex d-impress">
            <input type="checkbox" className="inp-check" />
            <p>Abstract (3)</p>
          </div>
          <button className="btn-price my-4">Subject</button>
          <div className="d-flex d-impress">
            <input type="checkbox" className="inp-check" />
            <p>Abstract (3)</p>
          </div>
          <div className="d-flex d-impress">
            <input type="checkbox" className="inp-check" />
            <p>Landscopes(19)</p>
          </div>
          <div className="d-flex d-impress">
            <input type="checkbox" className="inp-check" />
            <p>Animals and birds(7)</p>
          </div>
          <div className="d-flex d-impress my-3">
            <input type="checkbox" className="inp-check" />
            <p>Photography and waild(3)</p>
          </div>
          <div className="d-flex d-impress mb-3">
            <input type="checkbox" className="inp-check" />
            <p>Architecture(17)</p>
          </div>
          <div className="d-flex d-impress">
            <input type="checkbox" className="inp-check" />
            <p>Flowers and Plants(3)</p>
          </div>
          <button className="btn-price my-4">Color</button>
          <div className="d-flex d-impress my-3">
            <input type="checkbox" className="inp-check" />
            <p>Blue (3)</p>
          </div>
          <div className="d-flex d-impress my-3">
            <input type="checkbox" className="inp-check" />
            <p>Red (3)</p>
          </div>
          <div className="d-flex d-impress my-3">
            <input type="checkbox" className="inp-check" />
            <p>Green (3)</p>
          </div>
          <div className="d-flex d-impress my-3">
            <input type="checkbox" className="inp-check" />
            <p>Violet (3)</p>
          </div>
          <div className="d-flex d-impress my-3">
            <input type="checkbox" className="inp-check" />
            <p>Indigo (3)</p>
          </div>
          <div className="d-flex d-impress my-3">
            <input type="checkbox" className="inp-check" />
            <p>Pink (3)</p>
          </div>
          <div className="d-flex d-impress my-3">
            <input type="checkbox" className="inp-check" />
            <p>Yellow (3)</p>
          </div>
          <div className="d-flex d-impress my-3">
            <input type="checkbox" className="inp-check" />
            <p>Purple (3)</p>
          </div>
          <div className="d-flex d-impress my-3">
            <input type="checkbox" className="inp-check" />
            <p>Orange (3)</p>
          </div>
        </div>
        <a
          className="offcanvas-link"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          Select
        </a>
        {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button> */}

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <button className="btn-price mb-3">Price</button>
            <div className="d-flex slider-value">
              <h6>£10</h6>
              <h6>£3000</h6>
            </div>
            <Slider
              style={sliderStyle}
              range
              max="3001"
              defaultValue={[3000, 10]}
            />
            <button className="btn-price my-3">Style</button>
            <div className="d-flex d-impress mb-3">
              <input type="checkbox" className="inp-check" />
              <p>Impressionstic (30)</p>
            </div>
            <div className="d-flex d-impress">
              <input type="checkbox" className="inp-check" />
              <p>Abstract (3)</p>
            </div>
            <button className="btn-price my-4">Subject</button>
            <div className="d-flex d-impress">
              <input type="checkbox" className="inp-check" />
              <p>Abstract (3)</p>
            </div>
            <div className="d-flex d-impress">
              <input type="checkbox" className="inp-check" />
              <p>Landscopes(19)</p>
            </div>
            <div className="d-flex d-impress">
              <input type="checkbox" className="inp-check" />
              <p>Animals and birds(7)</p>
            </div>
            <div className="d-flex d-impress my-3">
              <input type="checkbox" className="inp-check" />
              <p>Photography and waild(3)</p>
            </div>
            <div className="d-flex d-impress mb-3">
              <input type="checkbox" className="inp-check" />
              <p>Architecture(17)</p>
            </div>
            <div className="d-flex d-impress">
              <input type="checkbox" className="inp-check" />
              <p>Flowers and Plants(3)</p>
            </div>
            <button className="btn-price my-4">Color</button>
            <div className="d-flex d-impress my-3">
              <input type="checkbox" className="inp-check" />
              <p>Blue (3)</p>
            </div>
            <div className="d-flex d-impress my-3">
              <input type="checkbox" className="inp-check" />
              <p>Red (3)</p>
            </div>
            <div className="d-flex d-impress my-3">
              <input type="checkbox" className="inp-check" />
              <p>Green (3)</p>
            </div>
            <div className="d-flex d-impress my-3">
              <input type="checkbox" className="inp-check" />
              <p>Violet (3)</p>
            </div>
            <div className="d-flex d-impress my-3">
              <input type="checkbox" className="inp-check" />
              <p>Indigo (3)</p>
            </div>
            <div className="d-flex d-impress my-3">
              <input type="checkbox" className="inp-check" />
              <p>Pink (3)</p>
            </div>
            <div className="d-flex d-impress my-3">
              <input type="checkbox" className="inp-check" />
              <p>Yellow (3)</p>
            </div>
            <div className="d-flex d-impress my-3">
              <input type="checkbox" className="inp-check" />
              <p>Purple (3)</p>
            </div>
            <div className="d-flex d-impress my-3">
              <input type="checkbox" className="inp-check" />
              <p>Orange (3)</p>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <Component
            productArray={productArray}
            layout={layout}
            setLayout={setLayout}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
