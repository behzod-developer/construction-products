import React, { useContext } from 'react'
import Navbar from '../../containers/Navbar/Navbar'
import Aside from '../../containers/aside/Aside'
import './Home.css'
import AsideMedia from '../../containers/aside/AsideMedia'
import { Context } from '../../App'
import { Route, Routes } from 'react-router-dom'
import Main from '../Main/Main'
import AllProduct from '../All_Product/AllProduct'
import Profile from '../Profile/Profile'



function Home() {

  const { userData } = useContext(Context)

  console.log(userData)
  return (
    <div className='home'>
      <Aside />
      <div className="container">
        <Navbar />
        <div className="main-pages">
          <Routes>
            <Route element={<Main />} path='/'/>
            <Route path={'all_product'} element={<AllProduct />} />
            <Route path={'profile'} element={<Profile />} />
          </Routes>
        </div>
        <AsideMedia />
      </div>
    </div>
  )
}

export default Home