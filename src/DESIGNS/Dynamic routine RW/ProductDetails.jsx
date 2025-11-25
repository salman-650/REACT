import React from 'react'
import { useParams } from 'react-router-dom'
import './details.css'
import { products } from './Data/Product';

  const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!products) {
    return <h2 style={{textAlign:'center'}}>PRODUCT NOT FOUND</h2>
  }

  return (
    
    <div className='details-container'>
      {/* {left} */}
      <div>
        <img 
        src={product.image} 
        alt={product.title}
        className='details-image' 
        />
        <div className='details-thumbnails'>
          {product.gallery?.map((img, i) =>
          (
            <img
            key={i}
            src={img}
            className='details-thumb' />
          
          )
          )}
        </div>
        {/* {right} */}
        <div>
        <h1 className='details-title'>
          {product.title}</h1>
          <div 
          className='details-rating'>
            {[...Array(5)].map((_,i)=>(
              <span key={i}
              className={i < product.rating ? "star filled" :   "star"}
              >
               ★
              </span>
            ))}

          </div>
          <p className='detalis-description'>{product.description}</p>

          <div className='details-price-row'>
            <span className='details-new-price'> ₹ {product.price}</span>
            {product.oldPrice && (
              <span className='details-old-price'>
                ₹{product.oldPrice}

              </span>
            )}
            <button className='details-btn'> Add to cart</button>

          </div>
        </div>

      </div>
      
    </div>
  )
}

export default ProductDetails
