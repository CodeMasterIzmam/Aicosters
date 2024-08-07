import React from 'react';
import './ArtistOfTheMonth.css'
import { Link } from "react-router-dom";
import Cart from '../Assets/Rectangle33.svg'

const ArtistOfTheMonth = () => {
  return (
    <div className='month'>
      <div className="px-170 row d-flex flex-wrap space py-5">
        <div className=" col-md-7 artist">
          <h1 className="h-artist pt-4 pb-2">Artist of the month</h1>
          <h4 className="artist-name">Alvena emmy</h4>
          <p className="p-artist">
            A full time artist based in North Yorkshire, Stephen was originally
            trained in sculpture. Mainly self taught as a painter, Stephen's
            work is a mix of acrylic paintings, paper cut-outs and paper mosaics.
            His subject matter is wide ranging, including nudes, geometric
            abstracts and still lifes, all with the core elements of vibrant
            colour, bold shapes and strong composition.
          </p>
          <Link to="#" className="btn-match">
            <button className="btn-primary btn-go mt-5">
              Go to Artist's store
            </button>
          </Link>
        </div>
        <div className="d-image col-md-5">
          <img src={Cart} alt="image" className="cartimg" />
        </div>
      </div>
    </div>
  )
}

export default ArtistOfTheMonth
