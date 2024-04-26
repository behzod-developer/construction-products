import React from 'react'
import Navbar from '../../containers/Navbar/Navbar'
import Aside from '../../containers/aside/Aside'
import './Home.css'
import Product from '../../containers/Product/Product'
import Charts from '../../containers/Charts/Charts'

function Home() {
  return (
    <div className='home'>
      <Aside />
      <div className="container">
        <Navbar />
        <Product />
        <div className="child-container">
          <div></div>
          <div>
            <Charts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home