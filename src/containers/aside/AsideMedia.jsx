import React from 'react'
import './Aside.css'
import { IoHome } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";

function AsideMedia() {
    const navigate = useNavigate()
    function Product() {
        navigate('/add_product')
    }
    return (
        <div className='aside-menu'>
            <div className="aside-media-container">
                <button>
                    <IoHome />
                </button>
                <button>
                    <IoSearch />
                </button>
                <button onClick={Product} className='add-media'>
                    <IoMdAdd />
                </button>
                <button>
                    <FaRegHeart />
                </button>
                <button>
                    <img src='https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png' className='aside-profil-logo' alt="" />
                </button>
            </div>
        </div>
    )
}

export default AsideMedia