import React from 'react'
import Logo from '../../assets/Logo.png'
import { IoMdAdd } from "react-icons/io";
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate()
    function Product(){
        navigate('/add_product')
    }
    return (
        <nav>
            <li>
                <img src={Logo} alt="" />
            </li>
            <ul>
                <li>
                    <button onClick={Product} className='add-product-nav'><IoMdAdd /> </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar