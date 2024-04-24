import React from 'react'
import ProductCard from './ProductCard/ProductCard'

function ProductUi({products}) {
  return (
    <div>
         {products.map(item => (
                <ProductCard item={item} />
            ))}
    </div>
  )
}

export default ProductUi