import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from 'react-bootstrap';
import AboutUs from './AboutUs';
import Profile  from './Profile';
import Bar from './Bar';
import HomePage from './HomePage'
import LogIn from './LogIn'
import Chat from './Chat';
import Group from './Group';



const Navigation= ()=>{
    return(
        <div>
            <BrowserRouter>
            <Bar/>
            <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/Profile' element={<Profile/>}></Route>
            <Route path='/LogIn' element={<LogIn/>}></Route>
            <Route path='/Group' element={<Chat/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}





export default Navigation