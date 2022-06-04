import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import LoginPage from './sharedFolder/loginPage/LoginPage'
import BuiltContract from './sharedFolder/contractBuilt/BuiltContract'
import Navbar from './sharedFolder/navbar/Navbar';
import Dashboard from './sharedFolder/Dashboard/Dashboard';

import './App.css';
import Analytics from './sharedFolder/Dashboard/Analytics & Reports/analytics';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className='navbar-item-container'>
      {/* // <div className='item-link-container'>  */}
    <Routes>
    <Route path='/' element={<BuiltContract/>}/>
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/dashboard' element={<Dashboard/>}/>
    {/* <Route path='/dashboard/analytics' element={<Analytics/>}/> */}
    </Routes>
    </div>
    {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
