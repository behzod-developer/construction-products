import React from 'react'
import '../Product.css'
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { useNavigate } from 'react-router';

function ProductCard({item}) {
  const navigate = useNavigate()

  function AditDetailCard(){
    navigate(`/detail/${item.id}`)
  }
  return (
    <div className='product-card' onClick={AditDetailCard}>
        <img className='product-image' src={item.image} alt="" />
        <h3 className='product-title'>{item.title.length < 20?  item.title : item.title.slice(0,20)}</h3>
        <p className='product-price'>{item.price} som</p>
        <div className="product-heart-status-btn">
            <button><FaRegHeart /></button>
            <button><IoIosStats /></button>
        </div>
    </div>
  )
}

export default ProductCard