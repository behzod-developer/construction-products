import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { product_get } from '../../API_URL'

function Detail() {
    const {id} = useParams()
    const [detailPage, setDetailPage] = useState()

    useEffect(()=>{
         async function fetchDetailProd(){
            try{
                const res = await axios.get(`${product_get}/${id}`)
                setDetailPage(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchDetailProd()
    },[])
    console.log(detailPage)
  return (
    <div className="detail">
        <div className="title">
            <img className='detail-image' src={detailPage?.image} alt="" />
            <h2 className='detail-title'>{detailPage?.title}</h2>
            <p className='detail-description'>{detailPage?.description}</p>
            <span className='detail-category'>{detailPage?.category}</span>
            <b className='detail-price'>{detailPage?.price}</b>
        </div>
    </div>
  )
}

export default Detail