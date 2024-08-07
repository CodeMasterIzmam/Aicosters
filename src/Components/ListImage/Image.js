import React from "react";
import "./Image.css";

const Image = () => {
  const imageList = [
    {
      image: "https://source.unsplash.com/random/600x601?clothes-fashion/",
    },
    {
      image: "https://source.unsplash.com/random/601x600?clothes-fashion/",
    },
    {
      image: "https://source.unsplash.com/random/602x600?clothes-fashion/",
    },
    {
      image: "https://source.unsplash.com/random/601x601?wild-life/",
    },
  ];
  return (
    <div  className="img-list d-flex flex-wrap">
      {imageList.map((list, id) => {
        return (
          <div key={id}>
            <div>
              <img src={list.image} alt="image" className="cd-image" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Image;
