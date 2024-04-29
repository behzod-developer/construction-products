import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../../assets/Logo.png'
import './Login.css'
import { user_api } from '../../../API_URL'
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../App'

function Login() {
    const navigate = useNavigate()
    const {setLogin} = useContext(Context)
    const addFormHendler = e => {
        e.preventDefault()

        const forms = new FormData(e.target)
        const {  email, password } = Object.fromEntries(forms.entries())

        const newData = {
            email,
            password
        }


        async function postData() {
            try {
                const response = await axios.post(user_api, {
                     password, email
                });
                if(email == 'admin@mail.ru' && password == '1'){
                    console.log('Response:', response.data);
                    navigate('/')
                    setLogin(true)
                }
                else{
                    alert('xatolik bor')
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
        postData();
    }

    function LoginNavigate() {
        navigate('/register')
    }
    return (
        <>
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
                            <input required name='email' placeholder='qwerty@mail.ru' type="email" />
                            <input required name='password' placeholder='password' type="password" />
                            <button>Login</button>
                        </form>
                        <h5>or</h5>
                        <button onClick={LoginNavigate} className='login-button-register'>Register</button>
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
        </>
    )
}

export default Login