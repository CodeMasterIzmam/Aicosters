import React from "react";
import "./Artist.css";
import { Link } from "react-router-dom";
import Body from "../../Components/GalleryBody/Body";

const Artist = () => {
  const name = "Artist name";
  const image = "https://source.unsplash.com/random/100x100?man/";
  const shopBackgroundImage =
    "https://source.unsplash.com/random/1300x370?art-lines/";
    const quote="I am passionate about art and have always done drawing and now I work in oil painting. I decided to sell a few of my artworks to the wider public. I love landscapes and all the beautiful colours we are surrounded over each season. I was always influenced by my wife; an artist herself. My works are images of serenity and mainly countryside.";
  const commission="No"
    return (
    <div className="artist">
      <div className="card bg-dark text-white">
        <img src={shopBackgroundImage} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <div className="d-flex links my-3">
            {" "}
            <Link to="/">Home</Link>
            <span className="sp px-3">/</span>
            <Link to="#">{name}</Link>
          </div>
          <div className="d-flex headlist py-3">
            <img src={image} alt="image" className="prof-image" />
          </div>
          <h1 className="text-center headlist">{name}</h1>
          <p className="text-center">Warwickshire</p>
          <button className="artistof text-center mb-4">
            Artist of the week
          </button>
          <button className="btn-contact text-center ">Contact {name}</button>
        </div>
      </div>
      <div className="artist-background">
        <h4 className="my-4"> <span className="sty-b">Artistic</span> background</h4>
        <p>ESADHAR Ecole superieure dart et design Le Havre Rouen</p>
        <h4 className="my-4 sty-b">Quote</h4>
        <blockquote>
          {quote}
        </blockquote>
        <h4 className="my-4"><span className="sty-b">Accepts</span> Commission ?</h4>
        <p>{commission}</p>
      </div>
      <Body/>
    </div>
  );
};

export default Artist;
