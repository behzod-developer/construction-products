import React from 'react'
import Logo from '../../assets/Logo.png'
import { IoMdAdd } from "react-icons/io";
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";

function Navbar() {
    const navigate = useNavigate()
    function Product(){
        navigate('/add_product')
    }

    function LogOut(){
        navigate('./login')
    }
    function Home(){
        navigate('/')
    }
    return (
        <nav>
            <li>
                <img onClick={Home} src={Logo} alt="" />
            </li>
            <ul>
                <li>
                    <button onClick={Product} className='add-product-nav'><IoMdAdd /> </button>
                </li>
                <li>
                    <button onClick={LogOut} className='logout-navbar'><IoLogOutOutline /></button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar