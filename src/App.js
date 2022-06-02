import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import LoginPage from './sharedFolder/loginPage/LoginPage'
import BuiltContract from './sharedFolder/contractBuilt/BuiltContract'
import Navbar from './sharedFolder/navbar/Navbar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className='navbar-item-container'>
    <Routes>
    <Route path='/' element={<BuiltContract/>}/>
    <Route path='/login' element={<LoginPage/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
