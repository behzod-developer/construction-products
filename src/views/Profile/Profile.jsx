import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import axios from 'axios'
import { FaPen } from "react-icons/fa6";
import { Context } from '../../App'

function Profile() {

    const { userData } = useContext(Context)

    return (
        <div className="profile">
            <div className="profile-image">
                <img src='https://visualpharm.com/assets/319/Male%20User-595b40b65ba036ed117d3de6.svg' className='demo' alt="" />
            </div>
            <div className="profile-description">
                <FaPen className='pen' />
                <h1 className='user-name'>{userData?.username}</h1>
                <div className="profile-datas">
                    <span>
                        +{userData?.phone}
                    </span>
                    <span>
                        {userData?.email}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Profile