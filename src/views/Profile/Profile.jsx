import React, { useContext } from 'react'
import './Profile.css'
import { FaPen } from "react-icons/fa6";
import { Context } from '../../App'

function Profile() {

    const { userData, userProducts } = useContext(Context)

    function ProfilePutHandler(){
        
    } 

    return (
        <div className="profile">
            <div className="profile-image">
                <img src='https://visualpharm.com/assets/319/Male%20User-595b40b65ba036ed117d3de6.svg' className='demo' alt="" />
            </div>
            <div className="profile-description">
                <button onClick={ProfilePutHandler}>
                    <FaPen className='pen' />
                </button>
                <div className="profile-heading">
                    <h1 className='user-name'>{userData?.username}</h1>
                    <b className='user-name'>{userData?.name.firstname} </b>
                    <b className='user-name'> {userData?.name.lastname}</b>
                </div>
                <div className="profile-datas">
                    <span>
                        <b>
                            your phone number <br />
                        </b>
                        +{userData?.phone}
                    </span>
                    <span>
                        <b>
                            your email address <br />
                        </b>
                        {userData?.email}
                    </span>
                    <span>
                        <b>
                            your product
                        </b>

                        <main>
                            {userProducts.length}
                        </main>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Profile