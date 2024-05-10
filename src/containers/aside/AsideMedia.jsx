import React from 'react'
import './Aside.css'
import { IoHome } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";

function AsideMedia() {
    const navigate = useNavigate()

    function addPost(){
        navigate('/add_product')
    }
    

    return (
        <div className='aside-menu'>
            <div className="aside-media-container">
                <NavLink to={'./'}>
                    <IoHome />
                </NavLink>
                <NavLink to={'./all_product'}>
                    <IoSearch />
                </NavLink>
                <button onClick={addPost} className='add-media-btn'>
                    <IoMdAdd />
                </button>
                <NavLink to={'./heart'}>
                    <FaRegHeart />
                </NavLink>
                <NavLink to={'./profile'}>
                    <img src='https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png' className='aside-profil-logo' alt="" />
                </NavLink>
            </div>
        </div>
    )
}

export default AsideMedia