import React from "react";
import "./Dashboard.css";
import Cart from "../../Components/Assets/Cart.JPG";
import { Link } from "react-router-dom";
import { StarOutlined } from "@ant-design/icons";

const Dashboard = () => {
  const cart=Cart;
  return (
    <div className="dashboard">
      <div className="d-flex links">
        {" "}
        <Link to="/">Home</Link>
        <span className="sp">/</span>
        <Link to="#" className="active">
          dashboard
        </Link>
      </div>
      <div className="d-flex headlist my-3">
        <h1>Dashboard</h1>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link liAccou"
                  aria-current="page"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/inbox">
                  Inbox
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listing">
                  Listing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/wishlist">
                  My Wishlist
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  Accounts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-flex flex-wrap row">
        <div className="user-name-div d-block col-md-3">
          <div className="d-flex">
            <div className="d-img">
              <img src={cart} alt="" className="profile-img" />
            </div>
            <div className="py-3 pl-4">
              <h5 className="user-name">Abdul Malik</h5>
              <p className="fs-12">Member since</p>
              <p className="fs-12">Mar 08, 2023</p>
            </div>
          </div>
          <div className="d-flex space" style={{paddingRight:"15px"}}>
            <div className="">
              <p className="py-2">
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
              </p>
              <p className="primary">Inbox</p>
              <p className="primary">View my store</p>
            </div>
            <p className="mt-4">
              {" "}
              <span className="zero">0</span>
            </p>
          </div>
        </div>
        <div className="col-md-9 pt-3">
          <h2 className="artist-h">Artist Account</h2>
          <p>You have an active membership.</p>
          <p className=" mt-4 artist-p">My sales</p>
          <p className="primary mt-4"><Link to="#" className="primary">View all my sales</Link></p>
          <p className="primary"><Link to="#" className="primary">My listings</Link></p>
          <button className="btn-primary">
            <Link to="/addListing">Add a new listing</Link>
          </button>
          <hr />
          <p className=" my-4 artist-p">My orders</p>
          <p className="primary mb-4"><Link to="#" className="primary">View all my orders</Link></p>
          <hr />
          <p className=" my-4 artist-p"><Link to="#" className="text-light">My account</Link></p>
          <p className="primary mt-1"><Link to="#" className="primary">Stripe Connect on boarding</Link></p>
          <p className="primary mt-1"><Link to="#" className="primary">My banking information</Link></p>
          <p className="primary mt-1"><Link to="#" className="primary">Edit my profile</Link></p>
          <p className="primary mt-1 mb-2"><Link to="#" className="primary">Change password</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
