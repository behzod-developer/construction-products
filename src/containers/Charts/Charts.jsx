import React from 'react'
import { chart_data } from '../../API_URL'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import './Chart.css'

function Charts() {
  return (
    <div className='chart'>
      <BarChart width={500} height={250} data={chart_data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}

export default Charts