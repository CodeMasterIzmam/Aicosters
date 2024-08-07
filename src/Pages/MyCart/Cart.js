import React from "react";
import "./Cart.css";
import Cartimg from "../../Components/Assets/Cart.JPG";

const Cart = () => {
  const cartimg=Cartimg;
  return (
    <div className="cart">
      <div className="d-flex headlist my-3">
        <h1 className="pb-4">My Cart</h1>
      </div>
      <div className="row">
        <div className="col-md-8 crt-d">
          <div className="d-flex crtimg ">
            <div className="">
              <img src={cartimg} alt="image" className="crt-img" />
            </div>
            <div className=" cart-text px-4">
              <p>
                Night sky secrets, Abstract, Modren Contemporary Ambient,
                Limited Edition Prints of Only 9.99
              </p>
              <button className="subj"> Subject</button>
            </div>
            <div className="">
              <div className="d-flex space">
                <h6 className="pl3">1x</h6>
                <h6 className="£9"> £9.99</h6>
              </div>
              <div className="rem">
                <button className="remove">Remove from cart</button>
              </div>
            </div>
          </div>
          <div className="shi-met d-block crt-t">
            <h6 className="mb-3">Shipping method</h6>
            <div className="d-flex rad">
              <input type="radio" />
              <p className="mx-2 £9 mb-5 f12">Delivery included</p>
            </div>
            <div className="mb-2">
              <label htmlFor="exampleFormControlTextarea1" className="form-label fbold">
                Order notes (optional)
              </label>
              <textarea
                className="form-control fbold"
                id="exampleFormControlTextarea1"
                placeholder="Notes about your order, e.g. special notes for delivery"
                rows="4"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="col-md-4 crt-d crt-r">
            <h3>Order details</h3>
            <div className="d-flex space">
                <p className="fbold">Total</p>
                <h5 className="£9 pr3">£9.99</h5>
            </div>
            <div className="d-flex check-term">
                <input type="checkbox" name="" id="" />
                <p className="£9 mx-1">By clicking, you agree to our terms & conditions</p>
            </div>
            <button className="che-out">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
