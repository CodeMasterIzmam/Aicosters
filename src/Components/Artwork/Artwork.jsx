import React, { useState } from "react";
import "./Artwork.css";
import CartImage from "../Assets/Cart.JPG";
import CartImage2 from "../Assets/Image.jpg";
import { Link } from "react-router-dom";

const Artwork = () => {
  const [layout, setLayout] = useState(true);
  const productArray = [
    {
      image: CartImage,
      image2: CartImage2,
      name: "Product name",
      price: "£0.00",
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
      price: "£0.00",
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
      price: "£0.00",
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
      price: "£0.00",
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
      price: "£0.00",
      subject: "Subject name",
      owner: {
        name: "artist name",
      },
      id: Math.random(),
    },
  ];
  const mouseOver = ({ id }) => {
    if (id == id) {
      setLayout(false);
    } else {
      setLayout(true);
    }
  };
  const mouseOut = ({ id }) => {
    if (id == id) {
      setLayout(true);
    } else {
      setLayout(false);
    }
  };
  return (
    <div className="artwork">
      <h4 className="h-latest mt-4 mb-5">Latest Artwork</h4>
      <div className="row row-cols-1 d-flex flex-wrap row-cols-md-4 my-3 mb-5">
        {productArray.map((product, id) => (
          <div key={id} className="col mb-3 px-2">
            <div
              className="card h-100"
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            >
              <img
                src={product.image}
                className={layout ? "card-img-top img-card" : "d-none"}
                alt="..."
              />

              <img
                src={product.image2}
                className={layout ? "d-none" : "card-img-top img-card"}
                alt="..."
              />
              <div className="card-img-overlay">
                <button className="price">{product.price}</button>
              </div>
              <div className="card-footer">
                <h6 className="">{product.name}</h6>
                <p>{product.owner.name}</p>
                <p>
                  <small>{product.subject}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="#" className="btn-read">
        <button className="btn-primary view">View all art</button>
      </Link>
    </div>
  );
};

export default Artwork;
