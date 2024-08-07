import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AccountDetails from './Pages/AccountPage/AccountDetails';
import Inbox from './Pages/InboxPage/Inbox';
import ListingDetails from './Pages/AddListing/ListingDetails';
import Earning from './Pages/EarningPage/Earning';
import Help from './Pages/Help/Help';
import Cart from './Pages/MyCart/Cart';
import CartImage from "./Components/Assets/Cart.JPG";
import Art from './Pages/BuyArt/Art';
import Shipping from './Pages/Shipping/Shipping';
import FAQS from './Pages/FAQs/FAQS';
import Sell from './Pages/SellArt/Sell';
import Listing from './Pages/Listing/Listing';
import Terms from './Pages/Terms/Terms';
import Gift from './Pages/Gift/Gift';
import Gallery from './Pages/Gallery/Gallery';
import Artist from './Pages/ArtistOfTheWeek/Artist';
import { useState } from 'react';
import Footer from './Pages/Footer/Footer';
import Wishlist from './Pages/Wishlist/Wishlist';
import Dashboard from './Pages/Admin/Dashboard';
import Blog from './Pages/Blog/Blog';
import SellerAccount from './Pages/SellerAccount/SellerAccount';
import Home from './Pages/Home/Home';
import { Navbar } from './Pages/Navbar/Navbar';
import Login from './Pages/Login/Login';

function App() {
  const [listings, setListings]=useState([
    {
          image: CartImage,
          title:"List title",
          price:"£9.99",
          price2:"£13.99",
          date: "date",
          id:Math.random(),
        }
  ]);
  const artistProducts=[
    {
      image: CartImage,
      name: "Product name",
      price: "£000",
      subject: "Subject name",
      owner: {
        name: "artist name",
      },
    },
    {
      image: CartImage,
      name: "Product name",
      price: "£000",
      subject: "Subject name",
      owner: {
        name: "artist name",
      },
    },
  ];
  // const listings=[
  //   {
  //     image: CartImage,
  //     title:"List title",
  //     price:"£9.99",
  //     price2:"£13.99",
  //     date: "date",
  //   }
  // ]
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        {/* <div className='d-flex flex-wrap justify-content-center '> <Link to="/" style={{ textDecoration: "none", display: "flex" }}>Home</Link>
          <Link to="/earning" style={{ textDecoration: "none", display: "flex" }}>Earnings</Link>
          <Link to="/dashboard" style={{ textDecoration: "none", display: "flex" }}>Dashboard</Link>
          <Link to="/help" style={{ textDecoration: "none", display: "flex" }}>Help</Link>
          <Link to="/cart" style={{ textDecoration: "none", display: "flex" }}>My Cart</Link>
          <Link to="/art" style={{ textDecoration: "none", display: "flex" }}>Buy Art</Link>
          <Link to="/shipping" style={{ textDecoration: "none", display: "flex" }}>Shipping</Link>
          <Link to="/faqs" style={{ textDecoration: "none", display: "flex" }}>FAQs</Link>
          <Link to="/sell" style={{ textDecoration: "none", display: "flex" }}>Sell Art</Link>
          <Link to="/addListing" style={{ textDecoration: "none", display: "flex" }}>Add Listing</Link>
          <Link to="/terms" style={{ textDecoration: "none", display: "flex" }}>Terms and Conditions</Link>
          <Link to="/gift" style={{ textDecoration: "none", display: "flex" }}>Gift Vouchers </Link>
          <Link to="/gallery" style={{ textDecoration: "none", display: "flex" }}>Featured Gallary </Link>
          <Link to="/artist" style={{ textDecoration: "none", display: "flex" }}> Artist Of The Week </Link>
          <Link to="/blog" style={{ textDecoration: "none", display: "flex" }}> Blog </Link>
          <Link to="/sellerAccount" style={{ textDecoration: "none", display: "flex" }}> Seller Account </Link>
        </div> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/account' element={<AccountDetails />} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/addListing' element={<ListingDetails />} />
          <Route path='/earning' element={<Earning />} />
          <Route path='/Help' element={<Help />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/art' element={<Art />} />
          <Route path='/shipping' element={<Shipping artistProducts={artistProducts} />} />
          <Route path='/faqs' element={<FAQS />} />
          <Route path='/Sell' element={<Sell />} />
          <Route path='/listing' element={<Listing listings={listings} setListings={setListings} />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/gift' element={<Gift />} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/artist' element={<Artist/>} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/sellerAccount' element={<SellerAccount/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
