import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FacebookOutlined,TwitterOutlined,BehanceOutlined,InstagramOutlined,YoutubeOutlined,LinkedinOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-2">
          <Link to="#">
            <p>Privacy Policy</p>
          </Link>
          <Link to="#">
            <p>Contact Us</p>
          </Link>
          <Link to="#">
            <p>About me</p>
          </Link>
          <Link to="#">
            <p>Discaimer</p>
          </Link>
        </div>
        <div className="col-md-7 px-5">
          <p>
            <span className="sp-bold"> Aicoaster.com</span> offer a curated
            marketplace for Al-generated art and coaster arts, providinga
            platform for artists to reach a wider audience and increase sales.
            By selling your work with us, youll gain exposure to a community of
            art lovers and enthusiasts, and have the opportunity to turn your
            passion into profit. Join us today and start selling your work with
            ease.
          </p>
        </div>
        <div className="col-md-3">
          <p>
            Hey Mama! Want to get tips, hacks and inspiration, straight to your
            inbox? <span className="sp-bold"> Sign Up </span> here!
          </p>
          <form>
            <div className="my-4">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Your Email"
              />
            </div>
          </form>
          <button className="btn-sub">SUBSCRIBE</button>
        </div>
      </div>
      <div className="d-flex">
        <Link to="#">
        <FacebookOutlined />
        </Link>
        <Link to="#" className="mx-3">
        <TwitterOutlined />
        </Link>
        <Link to="#">
        <LinkedinOutlined />
        </Link>
        <Link to="#" className="mx-3">
        <YoutubeOutlined />
        </Link>
        <Link to="#">
        <InstagramOutlined />
        </Link>{" "}
        <Link to="#" className="mx-3">
        <BehanceOutlined />
        </Link>
      </div>
      <hr style={{height:"2px", margin:"7px 0px"}} />
      <div className="reserved d-flex">
        <p>All rights reserved (c) 2023</p>
        <p className="legal">Legal</p>
      </div>
    </div>
  );
};

export default Footer;
