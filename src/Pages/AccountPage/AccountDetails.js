import React, { useState } from "react";
import "./AccountDetails.css";
import { Link } from "react-router-dom";
import { Button, Select, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const AccountDetails = () => {
  const profileImage = "https://source.unsplash.com/random/200x200?man/";
  // const noArr = [];
  // for (let i = 1900; i < 2023; i++) {
  //   noArr.push({
  //     value: i.toLocaleString(0) + i,
  //     label: i.toLocaleString(0) + i,
  //   });
  // }
  return (
    <div className="account">
      <div className="d-flex links">
        {" "}
        <Link to="/">Home</Link>
        <span className="sp">/</span>
        <Link to="/dashboard">dashboard</Link>
        <span className="sp">/</span>
        <Link to="#">account</Link>
      </div>
      <div className="d-flex headlist my-3">
        <h1>Account</h1>
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
                <Link className="nav-link" to="/listing">Listing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/wishlist">My Wishlist</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link liAccou" to="#">Accounts</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-4">
          <div className="edit">
            <Link to="#">Edit my prfile</Link>
          </div>
          <hr />
          <div className="edit">
            <Link to="#">Change Passward</Link>
          </div>
          <hr />
          <div className="edit">
            <Link to="#">Reviews</Link>
          </div>
          <hr />
          <div className="d-prof">
            {" "}
            <img src={profileImage} alt="image" className="pro-img" />
          </div>
          <div className="d-flex justify-content-center">
            <Button type="primary">
              <UploadOutlined /> Update
            </Button>
          </div>
        </div>
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                First name
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                defaultValue={"Abdul"}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                Second name
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                defaultValue={"Malik"}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                Email
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                defaultValue={"hello123@gamil.com"}
              />
            </div>
            <div className="mb-3 dis ">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                Birthday
              </label>
              <div className="d-flex">
                <select className="form-select form-select1" aria-label="Default select example">
                  <option defaultValue="">10</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select className="form-select form-select2" aria-label="Default select example">
                  <option defaultValue=""> January </option>
                  <option value="1">February</option>
                  <option value="2">March</option>
                  <option value="3">April</option>
                  <option value="3">May</option>
                  <option value="3">June</option>
                  <option value="3">July</option>
                  <option value="3">August</option>
                  <option value="3">September</option>
                  <option value="3">October</option>
                  <option value="3">November</option>
                  <option value="3">December</option>
                </select>
                <select className="form-select form-select3" aria-label="Default select example">
                  <option defaultValue="">10</option>
                  {/* {noArr.map((no, id) => (
                    <option key={id} value="3">
                      {no.value}
                    </option>
                  ))} */}
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                Address
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                Address line 2
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                Postal code
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                City
              </label>

              <select className="form-select" aria-label="Default select example">
                <option defaultValue="">City</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                Address line 2
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                Country
              </label>
              <select className="form-select" aria-label="Default select example">
                <option defaultValue="">Country</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                Phone number
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                Account type
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                Timezone
              </label>
              <select className="form-select" aria-label="Default select example">
                <option defaultValue="">Timezone</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                Nationality
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label h6"
              >
                Quote
              </label>
              <textarea
                className="form-control form2"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label h6"
              >
                Interests
              </label>
              <textarea
                className="form-control form2"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label h6"
              >
                Accepts Commiission?
              </label>
              <Select
                defaultValue="No"
                style={{ width: "100%", borderRadius: "0px" }}
                options={[
                  {
                    label: "Select",
                    options: [
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                    ],
                  },
                ]}
              />
            </div>
            <div className="d-btn">
              {" "}
              <button className="bl-btn">Save</button>
            </div>
          </form>
          <div className="delete pt-2">
            <p className="req-p mt-5">Delete my account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
