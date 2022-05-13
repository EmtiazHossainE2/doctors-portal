import React from 'react';
import { Routes,  Route } from "react-router-dom";
import NotFound from './conponents/NotFound/NotFound';
import About from './pages/About/About';
import Login from './pages/Account/Login/Login';
import Signup from './pages/Account/Signup/Signup';
import Appointment from './pages/Appointment/Appointment';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Reviews from './pages/Reviews/Reviews';
import Navbar from './pages/Shared/Navbar';
import { Toaster } from 'react-hot-toast';
import RequireAuth from './pages/Account/Login/RequireAuth';
import Forget from './pages/Account/Login/Forget';
const App = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/appointment' element={
                    <RequireAuth>
                        <Appointment/>
                    </RequireAuth>
                }></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/about-us' element={<About/>}></Route>
                <Route path='/contact-us' element={<Contact/>}></Route>
                <Route path='/reviews' element={<Reviews/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/forget' element={<Forget/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            <Toaster/>
        </div>
    );
};

export default App;