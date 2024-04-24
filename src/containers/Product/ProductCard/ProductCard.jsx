import React from 'react'

function ProductCard({item}) {
  return (
    <div className='product-card'>
        <img src={item.image} alt="" />
        <h3>{item.title}</h3>
    </div>
  )
}

export default ProductCard