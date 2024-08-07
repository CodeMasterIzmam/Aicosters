import React from "react";
import "./Listing.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartImage from "../../Components/Assets/Cart.JPG";


const Listing = ({listings, setListings}) => {
  
  const listingsNo = "115";
const deleteHandle=({list, id})=>{
  setListings(listings.filter((list)=>list.id !== id));
}
const editHandle=({id})=>{
  const newItem=listings.filter((list)=>list.id===id)[0];
  // setListings (listings.filter((list)=>list.id!==id));
  console.log(newItem)
}
  return (
    <div className="listing">
      <div className="d-flex links">
        {" "}
        <Link to="#">Home</Link>
        <span className="sp">/</span>
        <Link to="#">listings</Link>
      </div>
      <div className="d-flex headlist my-3">
        <h1>LIstings</h1>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#"></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/inbox">Inbox</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link liAccou" to="/listing">Listing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/wishlist">My Wishlist</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account">Accounts</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className="d-flex link ">
        <Link to="#">Dashboard</Link>
        <Link to="/inbox">Inbox</Link>
        <Link to="/listing" className="">
          Listings
        </Link>
        <Link to="#">My Wishlist</Link>
        <Link to="/">Accounts</Link>
      </div> */}
      <div className="row">
        <div className="col-md-3">
          <h6 className="head-list mb-3">My listings</h6>
          <p>You currently have</p>
          <h5 className="head-list pb-5">{listingsNo} Listing(s)</h5>
          <h6 className="py-2 h-sale px-4">
            <Link to="#">Sales</Link>
          </h6>
          <hr className="hr" />
          <h6 className="py-2 h-sale px-4">
            <Link to="#">My listings</Link>
          </h6>
          <hr className="hr" />
          <h6 className="py-2 h-sale px-4">
            <Link to="#">My banking information</Link>
          </h6>
          <hr className="hr" />
          <h6 className="py-2 h-sale px-4">
            <Link to="#">Edit my store</Link>
          </h6>
          <hr className="hr" />
          <div className="d-add-new">
            <Link to="/addListing" className="">
              <button className="add-new">Add a new listing</button>
            </Link>
          </div>
        </div>
        <div className="col-md-9 pt-5">
          {listings.map((list, id) => (
            <div key={id}>
              <div  className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={list.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-5">
                    <div className="card-body">
                      <h5 className="card-title">{list.title}</h5>
                      <button className="subject">Subject</button>
                      <div className="d-flex mt-3 d-price">
                        <h6 className="h-price">{list.price}</h6>
                        <h6 className="h-price px-5">{list.price2}</h6>
                      </div>
                      <p>Posted on: {list.date}</p>
                      <p className="d-flex p-online">
                        <span className="online"> </span>Online
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 div-btn">
                    <div className="btns">
                     <Link to="/addListing"> <button className="btn-edit mb-2" onClick={()=>editHandle(list,id)}>Edit</button></Link>
                      <button className="btn-preview">Preview</button>
                      <button className="btn-delete" onClick={()=>deleteHandle(list,id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
                        <span className="delete-text">Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr mt-5 mb-4"/>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center">
          <button className="next-btn btn-primary">Next</button>
        </div>
    </div>
  );
};

export default Listing;
