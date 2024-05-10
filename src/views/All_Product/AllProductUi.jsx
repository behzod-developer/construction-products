import React from 'react'
import AllProductCard from './AllProductCard/AllProductCard'
import './AllProduct.css'

function AllProductUi({ products }) {
  return (
    <div className='all-product-container'>
      <div className='all-product-parent'>
        <div className='all-product-child'>
          {products.map(item => (
            <AllProductCard item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProductUi