import React from 'react'
import './Aside.css'
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

function Aside() {
    const navigate = useNavigate()

    function  Logout(){
        navigate('./login')
    }

    return (
        <aside>
            <div className='aside-container'>
                <div className="demo">
                    {/* <img src="" alt="" /> */}
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