import React from 'react'
import Product from '../../containers/Product/Product'
import Chart from '../../containers/Charts/Charts'

function Main() {
  return (
    <div className='main'>
        <div className="main-page">
          <Product />
          <div className="child-container">
            <div>
              {/* <Swipers  /> */}
            </div>
            <div>
              <Chart />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main