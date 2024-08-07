import React from "react";
import "./Shipping.css";
import { Link } from "react-router-dom";
import Shipping1 from "../../Components/Assets/Shipping.JPG";
import Cart from "../../Components/Assets/Cart.JPG";
import { HeartOutlined, StarOutlined } from "@ant-design/icons";

const Shipping = ({artistProducts}) => {
  return (
    <div className="ship">
      <div className="d-flex links">
        {" "}
        <Link to="/">Home</Link>
        <span className="sp px-4">/</span>
        <Link to="#">Shipping</Link>
      </div>
      <div className="d-flex headlist my-3 mb-5">
        <h1>Shipping</h1>
      </div>
      <div className="row">
        <div className="col-md-6 pl1">
          <img src={Shipping1} alt="image" className="ship-img" />
        </div>
        <div className="col-md-6 pl2">
          <div className="d-flex flex-wrap mb-4">
            <img src={Cart} alt="image" className="prof-img" />
            <p className="jula">
              Julie Anne <StarOutlined className="ml1" />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </p>
          </div>
          <div className="chicken">
            <h4 className="">Chicken Art Prints 20 available</h4>
            <button className="subj"> Subject</button>
          </div>{" "}
          <div className="mt-3">
            <Link to="#" className="more">
              {" "}
              + More details
            </Link>
          </div>
          <div className="d-flex £1">
            <h3 className=" £9  fw-bold"> £9.99</h3>
            <h3 className=" £9 mx-5"> £13.99</h3>
          </div>
          <div className="btns">
            <button className="btn-primary">Buy Now</button>
            <button className="btn-contact">
              <Link to="/inbox">Contact Juilie Anne</Link>
            </button>
            <button className="btn-wish">
              <Link to="#">
                {" "}
                <span className="heart mx-2">
                  <HeartOutlined />
                </span>
                Add to Wishlist
              </Link>
            </button>
          </div>
          <h6 className="h-ship">Shipping</h6>
          <hr />
          <button className="btn-report">
            <Link to="#"> Report a problem</Link>
          </button>
        </div>
      </div>
      <h4 className="desc">Description</h4>
      <p>
        Super cute colorful chicken digital art print will brighten up any
        space. 20 giclee art prints avaliable. 40 x 40 cm
      </p>
      <p className="my-3">I love color and mixing patterns together.</p>
      <p className="mb-5">Sign and sent with a certificate of authenticity.</p>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Material</th>
            <th scope="col">Dimensions</th>
            <th scope="col">Style</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paper</td>
            <td>40 x 40</td>
            <td>Stylised & cartoon and illustrative</td>
          </tr>
        </tbody>
      </table>
      <table className="table my-3">
        <thead>
          <tr>
            <th scope="col">Subject</th>
            <th scope="col">Framed</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Animals and Birds</td>
            <td>No</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="other">
        <div className="d-flex justify-content-center m">
          <img src={Cart} className="d-img" alt="img" />
        </div>
        <h5 className="text-center o-list py-3">
          Other Listing from Juilie Anne
        </h5>

        <div className="row row-cols-1 row-cols-md-4 g-2 my-3 mb-5">
        {
          artistProducts.map((product,id)=>(
            <div key={id} className="col">
            <div className="card h-100">
              <img src={product.image} className="card-img-top img-card" alt="..." />
              <div className="card-img-overlay">
                <p className="price">{product.price}</p>
              </div>
              <div className="card-footer">
                <h5 className="">{product.name}</h5>
                <p>{product.owner.name}</p>
                <p><small>{product.subject}</small></p>
              </div>
            </div>
          </div> 
          ))
        }
        </div>
        <div className="d-flex justify-content-center">
          <button className="see-btn btn-primary">See more</button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
