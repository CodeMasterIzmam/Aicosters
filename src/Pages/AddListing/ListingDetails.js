import React from "react";
import "./ListingDetails.css";
import Image from "../../Components/ListImage/Image";
import { Select } from "antd";

const ListingDetails = () => {
  const submitHandle=(e)=>{
e.preventDefault();
  }
  return (
    <div className="details">
      <div className="d-flex headlist">
        <h1>Add a new Listing</h1>
      </div>
      <div className="flex">
        <p className="pSee mb-4">See the Add a new listing guide for assistance</p>
      </div>
      <form onSubmit={submitHandle}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label h6">
          Subject
        </label>
        <Select
                defaultValue="Select a Subject"
                style={{ width: "100%", borderRadius: "0px" }}
                options={[
                  {
                    label: "Select",
                    options: [
                      { label: "Landscapes & Sea and Sky", value: "Landscapes & Sea and Sky" },
                      { label: "People", value: "People" },
                      { label: "Animals and Birds", value: "Animals and Birds" },
                      { label: "Abstract", value: "Abstract" },
                      { label: "Still Life", value: "Still Life" },
                      { label: "Architecture and Buildings", value: "Architecture and Buildings" },
                      { label: "Flowers and Plants", value: "Flowers and Plants" },
                      { label: "Nudes and Erotic", value: "Nudes and Erotic" },
                      { label: "Transport", value: "Transport" },
                      { label: "Dogs", value: "Dogs" },
                      { label: "Cats", value: "Cats" },
                      { label: "Horses", value: "Horses" },
                      { label: "London Art", value: "London Art" },
                      { label: "Office Wall Art", value: "Office Wall Art" },
                      { label: "Art for Interior Designers", value: "Art for Interior Designers" },
                      { label: "Nature", value: "Nature" },
                      { label: "Sunsets", value: "Sunsets" },
                      { label: "Cityscapes", value: "Cityscapes" },
                    ],
                  },
                ]}
              />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label h6">
          Tags
        </label>
        <Select
                defaultValue="Select a Tag"
                style={{ width: "100%", borderRadius: "0px" }}
                options={[
                  {
                    label: "Select",
                    options: [
                      { label: "Humans", value: "Humans" },
                      { label: "Art", value: "Art" },
                      { label: "Fun", value: "Fun" },
                     ],
                  },
                ]}
              />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label h6">
          Title*
        </label>
        <input
          type="subject"
          className="form-control"
          id="exampleFormControlInput1"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label h6">
          Description*
        </label>
        <textarea
          className="form-control form2"
          id="exampleFormControlTextarea1"
          rows="3"
          required
        ></textarea>
      </div>
      <div className="d-flex d-price flex-wrap">
        <div className="d-flex">
          {" "}
          <div className="col-auto">
            <label htmlFor="inputPassword2" className="visual mb-3 h6">
              Price*
            </label>
            <div className="d-flex">
              <p className="gba ">GBA</p>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                required
              />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="col-auto">
            <label htmlFor="inputPassword2" className="visual mb-3 h6">
              Original Price*
            </label>
            <div className="d-flex">
              <p className="gba ">GBA</p>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mx-3 my-4">
        <div>
          <p className="pi">i</p>
        </div>
        <div className="mx-3">
          <p>
            "Price" is the current sale price. Minimum sale price allowed:  £9.99
          </p>
          <p>"Orignal Price" shows the previous price, if specified.</p>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label h6">
          Qyt Available*
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          defaultValue={"1"}
          required
        />
      </div>
      <div className="d-block">
        <h6>Image</h6>
        <div>
          <Image />
        </div>
      </div>
      <div className="det-required">
        <p className="my-2">Shipping details</p>
        <div>
          <input type="checkbox" className="b-check" required />
          <span className="mx-1"> Delivery Included</span>
        </div>
      </div>
      <p className="req-p">Required fields*</p>
      <div className="d-btn">
        {" "}
        <button className="bl-btn">Save</button>
      </div>
      </form>
    </div>
  );
};

export default ListingDetails;
