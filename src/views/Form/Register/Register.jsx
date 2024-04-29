import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Logo from '../../../assets/Logo.png'
import './Register.css'
import { user_api } from '../../../API_URL'
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'


function Register() {
    const navigate = useNavigate()
    const addFormHendler = e => {
        e.preventDefault()

        const forms = new FormData(e.target)
        const { name, tel, email, password } = Object.fromEntries(forms.entries())

        const newData = {
            name,
            tel,
            email,
            password
        }


        async function postData() {
            try {
                const response = await axios.post(user_api, {
                    name, email, password, tel
                });
                console.log('Response:', response.data);
                navigate('/')
            } catch (error) {
                console.error('Error:', error);
            }
        }
        postData();
    }

    function LoginNavigate(){
    navigate('/login')
    }

    return (
        <div className='register'>
            <div>
                <ul>
                    <li>
                        <img src={Logo} alt="" />
                    </li>
                </ul>
            </div>
            <div className='form-register'>
                <div className="forms">
                    <form onSubmit={addFormHendler} action="">
                        <input required name='name' placeholder='name' type="text" />
                        <input required name='tel' placeholder='phone number' type="tel" />
                        <input required name='email' placeholder='qwerty@mail.ru' type="email" />
                        <input required name='password' placeholder='password' type="password" />
                        <button>Register</button>
                    </form>
                    <h5>or</h5>
                    <button onClick={LoginNavigate} className='login-button-register'>Login</button>
                    <div className="icons">
                        <FaInstagram />
                        <FaTelegram />
                        <FaFacebook />
                    </div>
                </div>
                <div className="form-img">
                    <img src="https://telegra.ph/file/70eba592200d23b1aafdf.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Register