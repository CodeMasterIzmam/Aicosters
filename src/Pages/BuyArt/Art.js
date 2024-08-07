import React from "react";
import "./Art.css";
import { Link } from "react-router-dom";

const Art = () => {
  return (
    <div className="art">
      <div className="d-flex links">
        {" "}
        <Link to="/">Home</Link>
        <span className="sp">/</span>
        <Link to="#">buy art</Link>
      </div>
      <div className="d-flex headlist my-3">
        <h1>How to buy art from Aicoster.com</h1>
      </div>
      <div className="bt-div">
        <button className="reg-btn mb-3">Register here</button>
      </div>
      <p className="pb-2">
        Note:{" "}
        <small>
          You will need to validate your email address by clicking the link in
          the verification email.
        </small>
      </p>
      <h5 className="my-2 mb-4">Want to learn more about how it all work?</h5>
      <p className="">Looking for something in particular?</p>
      <ul>
        <li className="pb-2">
          {" "}
          <Link to="#">
            {" "}
            Our artists provide detailed description and keywords for each
            piece, all of which are fully searchable from the search box at the
            top of the page.
          </Link>
        </li>
      </ul>
      <p className="pb-0">Prefer to stumble upon something unique?</p>
      <ul>
        <li className="pb-2">
          {" "}
          <Link to="#">
            {" "}
            Start your browsing journey by selecting an artform category from
            the main menu above. Narrow down further by selecting different
            styles or subjects, or by adjusting the price slider.
          </Link>
        </li>
      </ul>
      <h5 className="my-2 mb-4">Found something wonderful?</h5>
      <ul>
        <li><Link to="#">
          Just add anything you like to your shopping cart.
          </Link></li>
        <li><Link to="#">
          If you are planning for a future purchase, add it to your
          wishlist.
          </Link></li>
        <li><Link to="#">
          Need further information?you can send questions direct to the artist.
          </Link></li>
      </ul>
      <h5 className="my-2 mb-4">Placing an order</h5>
      <ul>
        <li><Link to="#">
          Click the 'My Cart' link in the top menu to review the items in your shopping cart, 
          and click 'Check out' to begin the order process.
          </Link></li>
        <li><Link to="#">
          You will need an accout to place order, so you will be promoted to either log in if you already have one,
          otherwise simply register a new one.
          </Link></li>
        <li><Link to="#">
         Click 'Proceed to Payments' to provide your credit card details through our payment processor, Stripe.
          </Link></li>
      </ul>
      <h5 className="my-4">Track your order</h5>
      <p>Your artist will conform the order, and communicate delivery estimates and tracking details
        to you through ArtGallery website.
      </p>
      <p>When your artwork has arrived, please consider leaving a review of your experience with the artist.
        It really help! website.
      </p>
      <h5 className="my-4">Problems?</h5>
      <p>Contact us, and we will be happy to assist you.</p>
      <h5 className="my-4">Let's get started</h5>
      <p>We hope you enjoy our entire catalogue of quality, curated art as much aswe do!</p>
    </div>
  );
};

export default Art;
