import React from "react";
import "./Gift.css";
import { Link } from "react-router-dom";
import Cartimg from "../../Components/Assets/Cart.JPG";

const Gift = () => {
  return (
    <div className="gift">
      <div className="d-flex links">
        {" "}
        <Link to="/">Home</Link>
        <span className="sp px-4">/</span>
        <Link to="#">Gift Vouchers</Link>
      </div>
      <div className="d-flex headlist py-3">
        <h1 className="text-light gift-h">Gift Vouchers</h1>
      </div>
      <div className="row">
        <div className="col-md-9">
          <h3 className="py-3">Give the gift of Art</h3>
          <p className="pb-3">
            Art gift vouchers can be a great way to give the gift of original
            art to friends, family, and colleagues.
          </p>
          <p>
            With so many options to choose from on ArtGallery.co.uk, recipients
            of the gift voucher will have a wide range of artworks to choose
            from, ensuring that they can find something that they truly love and
            appreciate. Additionally, giving a gift voucher allows the recipient
            to choose their own artwork, so you don't have to worry about
            picking something that they may not like. This can make the
            gift-giving experience more enjoyable and stress- free for both the
            giver and the receiver.
          </p>
          <h4 className="py-4">How to buy</h4>
          <p>
            To purchase an art gift voucher on{" "}
            <span className="fw-bold">Aicoaster.com</span> , follow these steps:
          </p>
          <ol>
            <li>Click on the button below.</li>
            <li>
              {" "}
              Enter the amount of the voucher, proceed to checkout and pay for
              it using your preferred method of payment.
            </li>
            <li>
              {" "}
              After your payment has been processed, you will receive an email
              containing your voucher code.
            </li>
          </ol>
        </div>
        <div className="col-md-3">
          <img src={Cartimg} alt="image" className="gift-img" />
        </div>
      </div>
      <ol className="ol">
        <li>
          4. If you wish we can create a beautiful unique voucher using Art from
          our Gallery which we will email along with
        </li>
        <li>
          5. Forward the email containing the voucher code to the recipient of
          the gift, or print it out and give it to them in person.
        </li>
        <li>
          {" "}
          6. The recipient can then redeem the voucher code on the
          ArtGallery.co.uk website.
        </li>
      </ol>
      <p className="py-4">
        It's as simple as that! With an art gift voucher from ArtGallery.co.uk,
        you can easily give the gift of original art to someone special in your
        life.
      </p>
      <button className="btn-purchase mb-3">
        <Link to="#"> Purchase a Gift Voucher</Link>
      </button>
      <h4 className="py-3">Good to know:</h4>
      <ul>
        <li className="li">Vouchers are valid for an entire year.</li>
        <li className="li"> Vouchers cannot be exchanged for cash.</li>
        <li className="li">
          In most cases Delivery is free on all original artwork when delivered
          with anywhere within the UK.
        </li>
      </ul>
    </div>
  );
};

export default Gift;
