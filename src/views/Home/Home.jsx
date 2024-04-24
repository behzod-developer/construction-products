import React from 'react'
import Navbar from '../../containers/Navbar/Navbar'
import Aside from '../../containers/aside/Aside'
import './Home.css'
import Product from '../../containers/Product/Product'

function Home() {
  return (
    <div className='home'>
        <Aside />
        <div className="container">
      <Navbar />
      <Product />
        </div>
    </div>
  )
}

export default Home