import React, { useContext } from 'react'
import './Aside.css'
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { Context } from '../../App';

function Aside() {
    const navigate = useNavigate()
    const {setLogin} = useContext(Context)

    function  Logout(){
        navigate('/login')
        setLogin(false)
    }

    return (
        <aside>
            <div className='aside-container'>
                <div className="demo">
                    <img className='demo' src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png" alt="" />
                </div>
                <button>All product</button>
                <button>Cheap</button>
                <button>Expensive</button>
                <button>Top product</button>
                <button>Down product</button>
            </div>
            <button onClick={Logout} className='logout'><TbLogout2 /> Log Out</button>
        </aside>
    )
}

export default Aside