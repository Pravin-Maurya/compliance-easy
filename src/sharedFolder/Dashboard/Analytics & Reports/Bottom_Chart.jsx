import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs'
// import "./analytics_card.css";
import './Bottom_Chart.css'
import Pie_chart from './Pie_chart';

const Bottom_Chart = () => {
  return (
    <div className='bottom_chart'>
      <div className='pie-chart-details-card'>
          <div>
            <h1>Contract Categories</h1>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <BsThreeDotsVertical />
          </div>
            <Pie_chart/>
    </div>
  )
}

export default Bottom_Chart