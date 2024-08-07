import React from "react";
import "./Topics.css";
import Cart from "../Assets/Rectangle33.svg";
// import Cart from "../Assets/Rectangle23.svg";
import { Link } from "react-router-dom";

const Topics = () => {
  const topics = [
    {
      image: Cart,
      subject: "Landscapes & Sea and Sky",
      title: "Do anaula pore",
      desc: "Birds sitting on a string in the autumn evening",
    },
    {
      image: Cart,
      subject: "Man",
      title: "Crowds gather",
      desc: "The nature of the clay and the design means there are lumps",
    },
    {
      image: Cart,
      subject: "Animals and birds",
      title: "Waterstones bookshop",
      desc: "Wendy Hodgkins  Corniquet for allowing me to use her excelent referance photographs.",
    },
    {
      image: Cart,
      subject: "Abstract",
      title: "Uses Abstract art",
      desc: "Acrylic expressionism abstract painting on canvas.",
    },
  ];
  return (
    <div className="topics px-170 pb-5">
      <h2 className="head-blog">Blog</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4 pb-4">
        {
            topics.map((topic,id)=>(
                <div key={id} className="col mb-3 px-2">
                <div className="card h-100">
                  <img src={topic.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <Link to="#" className="d-flex justify-content-center">
                      <button className="btn-land">{topic.subject}</button>
                    </Link>
                    <p className="card-text pt-2">{topic.title}</p>
                    <p>
                      <small>{topic.desc}</small>
                    </p>
                  </div>
                </div>
              </div> 
            ))
        }
      </div>
    </div>
  );
};

export default Topics;
