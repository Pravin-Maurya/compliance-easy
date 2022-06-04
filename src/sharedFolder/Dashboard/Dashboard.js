import React from 'react'
import DashbordMenu from './DashboardMenu/DashbordMenu';
import Analytics from './Analytics & Reports/analytics';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <div className='dashboard-menu'>
        <DashbordMenu />
        </div>
        <div className='dashboard-analytics'>
        <Analytics/>
        </div>
    </div>
  )
}

export default Dashboard