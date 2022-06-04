import React from 'react';
import {MdHome, MdDashboard} from 'react-icons/md'
import {BsLightningChargeFill, BsFillBarChartFill, BsChatRightText} from 'react-icons/bs'
import {RiUser3Fill} from 'react-icons/ri';
import {TbGridDots} from 'react-icons/tb';
import {IoMdArrowDropright} from 'react-icons/io'
import logoCompliance from '../../../Asset/logoCompliance.png'
import './dashboardMenu.css'
import menuBackground from '../../../Asset/menuBackground.png'
import { Link } from 'react-router-dom';

const DashbordMenu = () => {

  return (
    <div className='menu-container'>
    {/* <div className='logo-container'>
        <img src={logoCompliance} alt='logo-compliance' className='logo-compliance' />
    </div> */}
        <h1 className='menu'>Main Menu</h1>
        <ul className='menu-item-container'>
            <li className='menu-item'>
                <MdHome className='menu-icons'/>
                Dashboard
            </li>
            <li className='menu-item'>
                <BsLightningChargeFill className='menu-icons'/>
                Contacts
            </li>
            <li className='menu-item'>
                <RiUser3Fill className='menu-icons'/>
                Accounts {'&'} users
            </li>
            <li className='menu-item'>
                <MdDashboard className='menu-icons'/>
                Settings
                <button className='setting-btn'>{'0'}</button>

            </li>
            <li className='menu-item click-menu'>
                <a href='/dashboard/analytics'>
                <BsFillBarChartFill className='menu-icons'/>
                Analytics {'&'} Reports
                </a>
            </li>
            
            <li className='menu-item'>
                <BsChatRightText className='menu-icons'/>
                Chats
            </li>
        </ul>
        <div  className='green-card'>
            <img src={menuBackground} alt='green card' className='green-img'/>
            <div className='green-card-content'>
            <TbGridDots className='grid-icons'/>
            <p className='green-card-text'>Interested in E-Stamping delivery ?</p>
            <button className='learn-btn'>
                Learn more
                <IoMdArrowDropright className='arrow-icon'/>
            </button>
            </div>
        </div>
        <div className='privacy-container'>
            <h1 className='privacy-heading'>CE Contract Management</h1>
            <p className='copyright-text'>© 2022 All Rights Reserved</p>
            <p className='text-by'>Made with <span> ♥ </span> by Harshit G.</p>
        </div>
    </div>
  )
}
export default DashbordMenu