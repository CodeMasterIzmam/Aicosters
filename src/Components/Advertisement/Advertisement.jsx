import React from "react";
import "./Advertisement.css";
import Team from "../Assets/Team.svg";
import Exchange from "../Assets/Exchange.svg";
import Signup from "../Assets/Signup.svg";
import shop from "../Assets/shop-1.svg";
import Selling from "../Assets/Selling.svg";
import Home from "../Assets/Home.svg";
import { Link } from "react-router-dom";

const Advertisement = () => {
  return (
    <div className="advertisement px-170">
      <div className="d-flex space flex-wrap gx-2 py-3 pb-5">
        <div className="d-block ad-card">
          <div className="d-flex justify-content-center mt-5">
            <img src={Selling} alt="icon" />
          </div>
          <h4 className="text-center h-sell-work text-light">
            Sell Your Work with Us.
          </h4>

          <p className="text-center text-light">
            We offer a curated marketplace for Al-generated art and coaster
            arts, providing a platform for artists to reach a wider audience and
            increase sales. By selling your work with us, you'll gain exposure
            to a community of art lovers and enthusiasts, and have the
            opportunity to turn your passion into profit. Join us today and
            start selling your work with ease.
          </p>
          <div className="d-flex justify-content-center">
            <Link to="#">
              <button className="btn-primary create"> CREATE YOUR</button>
            </Link>
          </div>
        </div>
        <div className="d-block ad-card">
          <div className="d-flex justify-content-center mt-5">
            <img src={Team} alt="icon" />
          </div>
          <h4 className="text-center h-sell-work text-light">
            Join Us as an Ai Artist
          </h4>

          <p className="text-center text-light">
            We welcome artists of all backgrounds and skill levels who are
            interested in exploring the possibilities of Al-generated art for
            coasters. By joining our community, you will have access to
            resources, tutorials, and support from other Al coaster artists.
            Join us today and become part of a growing movement of artists using
            Al. Read more
          </p>
          <div className="d-flex justify-content-center">
            <Link to="#">
              <button className="btn-primary create"> JOIN US</button>
            </Link>
          </div>
        </div>
        <div className="d-block ad-card">
          <div className="d-flex justify-content-center mt-5">
            <img src={Signup} alt="icon" />
          </div>
          <h4 className="text-center h-sell-work text-light">
            Users Can Sign Up As A Buyer Or Seller
          </h4>

          <p className="text-center text-light">
            Users Can Sign Up As A Buyer Or Seller On our platform, we offer a
            flexible sign-up process for users who are interested in buying or
            selling Al-generated art and coaster art. Our platform allows users
            to easily create an account and select their desired user type as a
            buyer or seller. Buyers can browse through a wide selection of
            Al-generated art and coaster arts. Read more
          </p>
          <div className="d-flex justify-content-center">
            <Link to="#">
              <button className="btn-primary create"> SIGN UP</button>
            </Link>
          </div>
        </div>
        <div className="d-block ad-card">
          <div className="d-flex justify-content-center mt-5">
            <img src={Home} alt="icon" />
          </div>
          <h4 className="text-center h-sell-work text-light">
            Get featured on the Home Page
          </h4>

          <p className="text-center text-light">
            We invite you to apply to be featured on our Home Page section. This
            is a unique opportunity to share your Al art with a community of
            like-minded individuals. We are looking for innovative and visually
            striking arts that demonstrate the creative possibilities of Al. If
            you're interested in being considered for a feature, please submit,
            Read more
          </p>
          <div className="d-flex justify-content-center">
            <Link to="#">
              <button className="btn-primary create"> HOME PAGE</button>
            </Link>
          </div>
        </div>
        <div className="d-block ad-card">
          <div className="d-flex justify-content-center mt-5">
            <img src={shop} alt="icon" />
          </div>
          <h4 className="text-center h-sell-work text-light">
            Get Your Shop Front.
          </h4>

          <p className="text-center text-light">
            Get your shop front on our platform. We offer a customizable
            platform where you can showcase and sell your arts. We provide tools
            to manage inventory, process payments, and track sales. With our
            platform, you can reach a wider audience and expand your customer
            base.
          </p>
          <div className="d-flex justify-content-center">
            <Link to="#">
              <button className="btn-primary create"> SIGN UP</button>
            </Link>
          </div>
        </div>
        <div className="d-block ad-card">
          <div className="d-flex justify-content-center mt-5">
            <img src={Exchange} alt="icon" />
          </div>
          <h4 className="text-center h-sell-work text-light">
            Good Commission Rates.
          </h4>

          <p className="text-center text-light">
            At our platform, we believe in supporting our Al artists by offering
            fair and competitive commission rates. We understand the hard work
            and dedication that goes into creating unique and innovative Al
            coaster arts, and we want our artists to be rewarded accordingly.
            Our commission rates are structured to provide a fair and equitable,
            Read more
          </p>
          <div className="d-flex justify-content-center">
            <Link to="#">
              <button className="btn-primary create"> GET COMMISSION</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
