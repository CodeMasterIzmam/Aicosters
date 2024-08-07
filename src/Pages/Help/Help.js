import React from "react";
import "./Help.css";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="help">
      <div className="d-flex headlist my-3">
        <h1>Help for artist</h1>
      </div>
      <p className="wel">
        Welcome Artists! This page contains link to everything you need to know
        to sell well on Aicoaster
      </p>
      <div className="d-flex flex-wrap scm">
        <div>
          <h5>Sign up and Membership</h5>
          <ul>
            <li><Link to="#"> Register an Artist account</Link></li>
            <li><Link to="#">Purchase membership</Link></li>
            <li><Link to="#">Customize your Shope Front</Link></li>
            <li><Link to="#">Provide Banking Information</Link></li>
          </ul>
        </div>
        <div>
          <h5>Create Listings</h5>
          <ul>
            <li><Link to="#">Photographing your Artwork</Link></li>
            <li><Link to="#">Add a new Listing</Link></li>
            <li><Link to="#">Limited edition prints</Link></li>
            <li><Link to="#">Artwork Review Process</Link></li>
          </ul>
        </div>
        <div>
          <h5>Making Sales</h5>
          <ul>
            <li><Link to="#">What happens when I make a sale?</Link></li>
            <li><Link to="#">Certificate of Authenticity</Link></li>
            <li><Link to="#">Choosing a courier</Link></li>
          </ul>
        </div>
      </div>
      <div className="abaicost row ">
        <div className="col-md-4">
          <h4 className="mb-3 mt-5">About Aicoaster.com</h4>
          <ul>
            <li><Link to="#">About us</Link></li>
            <li><Link to="#">Why Sale Aet with ArtGalllery?</Link></li>
            <li><Link to="#">Terms and Conditions for Artists</Link></li>
            <li><Link to="#">Unacceptable Subject Matter Policy</Link></li>
          </ul>
        </div>
      </div>
      <p className="wel">
        If you have any problems or questions, please do feel free to contact us, and we'll be happy to help.
      </p>
    </div>
  );
};

export default Help;
