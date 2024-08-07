import React from 'react';
import './Component.css'

const Component = ({productArray , layout ,setLayout}) => {
    const mouseOver = ({id}) => {
        if (id==id) {
         setLayout(false);
        } else {
         
         setLayout(true);
        }
        
         
       };
       const mouseOut = ({id}) => {
        if (id==id) {
            setLayout(true);
        } else {
            setLayout(false);
        }
       };
  return (
    <div className="row row-cols-1 d-flex flex-wrap row-cols-md-3 component g-2 my-3 mb-5">
       {productArray.map((product, id) => (
              <div key={id} className="col mb-1">
                <div className="card h-100" onMouseOver={()=>mouseOver(product,id)} onMouseOut={()=>mouseOut(product,id)}>
                    <img
                      src={product.image}
                      className={
                        layout ? "card-img-top img-card" : "display-none"
                      }
                      alt="..."
                    />

                    <img
                      src={product.image2}
                      className={
                        layout ? "display-none" : "card-img-top img-card"
                      }
                      alt="..."
                    />
                  <div className="card-img-overlay">
                    <button className="price">{product.price}</button>
                  </div>
                  <div className="card-footer">
                    <h5 className="">{product.name}</h5>
                    <p>{product.owner.name}</p>
                    <p>
                      <small>{product.subject}</small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
    </div>
  )
}

export default Component
