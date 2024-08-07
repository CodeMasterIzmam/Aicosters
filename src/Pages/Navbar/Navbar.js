import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge, Input } from "antd";
import Logo from "../../Components/Assets/Logo.PNG";
// import { useDispatch, useSelector } from 'react-redux';
// import { listProducts } from '../../Redux/Redux';
// import { isAuthenticated } from '../Auth/auth';
import "./Navbar.css";
import {
  ShoppingCartOutlined,
  ProfileOutlined,
  DashboardFilled,
  UserOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
// import SelectComp from '../Select/Select';
const { Search } = Input;

export const Navbar = () => {
  // const productsList = useSelector(state => state.productsList);
  // const { productsInCart } = productsList;
  // const cart = productsInCart && productsInCart ? productsInCart.products && productsInCart.products.length : 0;
  // const getDATA = localStorage.getItem("product") ? JSON.parse(localStorage.getItem('product')) : [];
  // const uniqueCart = Array.from(getDATA.reduce((map, obj) => map.set(obj._id, obj), new Map()).values());
  // const localCartProducts = uniqueCart;

  // const userId = isAuthenticated()?._id;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (isAuthenticated()) {
  //     dispatch(listProducts(userId));
  //   }

  //   return () => {

  //   }
  // }, [userId]);

  return (
    <div className="main-nav pb-5 mb-5">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-transparent">
        <div class="container-fluid">
          <Link className="navbar-brand fs-4" to="/">
            <img src={Logo} alt="" className="logo" />
          </Link>
          <div>
            <div className="off-canvas">
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
              >
                <UnorderedListOutlined />
              </button>

              <div
                class="offcanvas offcanvas-start"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabindex="-1"
                id="offcanvasScrolling"
                aria-labelledby="offcanvasScrollingLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title text-light" id="offcanvasScrollingLabel">
                    <img src={Logo} alt="logo"  className="logo" />
                  </h5>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <div className="search ">
                    <Search
                      placeholder="Search for an art"
                      onSearch={() => console.log("first")}
                    />
                  </div>
                  <div
                    className="nav-item mt-3"
                    style={{ fontWeight: "normal" }}
                  >
                    <Link className="ant-dropdown-link" to="/art">
                      Buy Art
                    </Link>
                  </div>
                  <div
                    className="nav-item mt-3"
                    style={{ fontWeight: "normal" }}
                  >
                    <Link className="ant-dropdown-link" to="/Sell">
                      Sell Art
                    </Link>
                  </div>
                  <div
                    className="nav-item mt-3"
                    style={{ fontWeight: "normal" }}
                  >
                    <Link className="ant-dropdown-link" to="/blog">
                      Blog
                    </Link>
                  </div>
                  <div
                    className="nav-item mt-3"
                    style={{ fontWeight: "normal" }}
                  >
                    <Link className="ant-dropdown-link" to="/gift">
                      Gift Vouchers
                    </Link>
                  </div>
                  {/* {
                isAuthenticated()?.role === 1 && */}
                  <div
                    className="nav-item mt-3"
                    style={{ fontWeight: "normal" }}
                  >
                    <Link className="ant-dropdown-link" to="/dashboard">
                      <span style={{ fontSize: "14px" }}>Dashboard</span>
                    </Link>
                  </div>
                  {/* }
              {
                isAuthenticated() ? */}
                  <div
                    className="nav-item mt-3"
                    style={{ fontWeight: "normal" }}
                  >
                    <Link className="ant-dropdown-link" to="/sellerAccount">
                      Profile
                    </Link>
                  </div>
                  {/* : */}
                  <div
                    className="nav-item mt-3"
                    style={{ fontWeight: "normal" }}
                  >
                    <Link className="ant-dropdown-link" to="/login">
                      Login
                    </Link>
                  </div>
                  {/* } */}
                  <div className="ml-2 mt-3">
                    <Link to="/cart">My Cart</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-top-bottom">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav ml-auto list-unstyle pt-3 mx-4 gap-4 gap-md-4"
                  style={{ fontSize: "12px" }}
                >
                  <li
                    className="nav-item profile text-center"
                    style={{ fontWeight: "normal" }}
                  >
                    <Link className="ant-dropdown-link" to="/art">
                      Buy Art
                    </Link>
                  </li>
                  <li
                    className="nav-item profile text-center"
                    style={{ fontWeight: "normal" }}
                  >
                    <Link className="ant-dropdown-link" to="/Sell">
                      Sell Art
                    </Link>
                  </li>
                  <li
                    className="nav-item profile text-center"
                    style={{ fontWeight: "normal" }}
                  >
                    <Link className="ant-dropdown-link" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li
                    className="nav-item profile text-center"
                    style={{ fontWeight: "normal" }}
                  >
                    <Link className="ant-dropdown-link" to="/gift">
                      Gift Vouchers
                    </Link>
                  </li>
                  {/* {
                isAuthenticated()?.role === 1 && */}
                  <li
                    className="nav-item profile text-center"
                    style={{ fontWeight: "normal" }}
                  >
                    <Link className="ant-dropdown-link" to="/dashboard">
                      <span style={{ fontSize: "14px" }}>Dashboard</span>
                    </Link>
                  </li>
                  {/* }
              {
                isAuthenticated() ? */}
                  <li
                    className="nav-item profile text-center"
                    style={{ fontWeight: "normal" }}
                  >
                    <Link className="ant-dropdown-link" to="/sellerAccount">
                      Profile
                    </Link>
                  </li>
                  :
                  <li
                    className="nav-item profile text-center"
                    style={{ fontWeight: "normal" }}
                  >
                    <Link className="ant-dropdown-link" to="/login">
                      Login
                    </Link>
                  </li>
                  {/* } */}
                  <li className="ml-2 text-center">
                    <Link to="/cart">My Cart</Link>
                  </li>
                </ul>
              </div>
              <div className="bottomMenu">
                <div>
                  <ul
                    className="navbar-nav ul2 ml-auto align-items-center list-unstyle pt-3 mx-4"
                    style={{ marginLeft: "auto" }}
                  >
                    <li
                      className="nav-item profile text-center"
                      style={{ fontWeight: "normal" }}
                    >
                      <Link
                        className="ant-dropdown-link"
                        to="/"
                        style={{ fontSize: "14px" }}
                      >
                        All Art
                      </Link>
                    </li>
                    <li
                      className="nav-item profile text-center"
                      style={{ fontWeight: "normal" }}
                    >
                      {/* <SelectComp title="Colour" /> */}
                    </li>
                    <li
                      className="nav-item profile text-center"
                      style={{ fontWeight: "normal" }}
                    >
                      {/* <SelectComp title="Style" /> */}
                    </li>
                    <li
                      className="nav-item profile text-center"
                      style={{ fontWeight: "normal" }}
                    >
                      {/* <SelectComp title="Subject" /> */}
                    </li>
                  </ul>
                </div>
                <div className="search">
                  <Search
                    placeholder="Search for an art"
                    onSearch={() => console.log("first")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
