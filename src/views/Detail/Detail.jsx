import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { product_get } from '../../API_URL'
import './Detail.css'
import { FaPenToSquare } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Detail() {
    const { id } = useParams()
    const [detailPage, setDetailPage] = useState()
    const navigate = useNavigate()


    function CloseBtn(){
        navigate(-1)
    }

    useEffect(() => {
        async function fetchDetailProd() {
            try {
                const res = await axios.get(`${product_get}/${id}`)
                setDetailPage(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchDetailProd()
    }, [])
    console.log(detailPage)
    return (
        <div className="detail">
            <div className="detail-container">
                <div className="detail-1">
                    <img className='detail-image' src={detailPage?.image} alt="" />
                </div>
                <div className="detail-2">
                    <h2 className='detail-title'>{detailPage?.title}   <button className='put-product'><FaPenToSquare /></button> </h2>
                    <p className='detail-description'>{detailPage?.description}</p>
                    <span className='detail-category'>{detailPage?.category}</span>
                    <b className='detail-price'>{detailPage?.price} som</b>
                    <button onClick={CloseBtn} className='detail-close'><IoClose /></button>
                </div>
            </div>
        </div>
    )
}

export default Detail