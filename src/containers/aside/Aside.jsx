import React, { useContext } from 'react'
import './Aside.css'
import { TbLogout2 } from "react-icons/tb";
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../../App';

function Aside() {
    const navigate = useNavigate()
    const { setLogin, userData } = useContext(Context)

    function Logout() {
        navigate('/login')
        setLogin(false)
    }

    return (
        <aside>
            <div className='aside-container'>
                <div className="demo">
                    <img className='demo' src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png" alt="" />
                </div>
                <h2 className='username'>{userData.username}</h2>
                <NavLink to={'./profile'}>Profile</NavLink>
                <NavLink to={'/'}> Home</NavLink>
                <NavLink to={'./all_product'}>All product</NavLink>
                <NavLink>Heart</NavLink>
            </div>
            <button onClick={Logout} className='logout'><TbLogout2 /> Log Out</button>
        </aside>
    )
}

export default Aside