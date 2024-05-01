import React, { PureComponent } from 'react';
import './Chart.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd';

  state = {
    data: [
      {
        name: 'All product',
        uv: 4201,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Looks',
        uv: 3324,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Call',
        uv: 2037,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Heart',
        uv: 4780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Tops',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Comment',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <div className='chart'>
        <p>Click each rectangle </p>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart width={150} height={100} data={data}>
            <Bar dataKey="uv" onClick={this.handleClick}>
              {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="content">{` ${activeItem.name}: ${activeItem.uv}`}</p>
      </div>
    );
  }
}
