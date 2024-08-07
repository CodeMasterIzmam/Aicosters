import React from 'react';
import './Wishlist.css'
import { Link } from 'react-router-dom';
import Body from '../../Components/GalleryBody/Body';

const Wishlist = () => {
  return (
    <div className='wishlist'>
       <div className="d-flex links">
        {" "}
        <Link to="/">Home</Link>
        <span className="sp px-4">/</span>
        <Link to="#">Wishlist</Link>
      </div>
      <div className="d-flex headlist my-3">
        <h1>Wishlist</h1>
      </div>
      <Body/>
    </div>
  )
}

export default Wishlist
