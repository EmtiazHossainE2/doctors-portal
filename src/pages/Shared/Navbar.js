import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const activeLink = 'btn btn-secondary text-white  my-1 mx-0 md:my-0 md:mx-2 border-none'
    const menuItems = <>
        <li><NavLink to='/' className={({ isActive }) => (isActive ? activeLink : 'text-xl')}>Home</NavLink></li>
        <li><NavLink to='/appointment' className={({ isActive }) => (isActive ? activeLink : 'text-xl')}>Appointment</NavLink></li>
        <li><NavLink to='/reviews' className={({ isActive }) => (isActive ? activeLink : 'text-xl')}>Reviews</NavLink></li>
        <li><NavLink to='/contact-us' className={({ isActive }) => (isActive ? activeLink : 'text-xl')}>Contact us</NavLink></li>
        <li><NavLink to='/about-us' className={({ isActive }) => (isActive ? activeLink : 'text-xl')}>About</NavLink></li>
        <li><NavLink to='/login' className={({ isActive }) => (isActive ? activeLink : 'text-xl')}>Login</NavLink></li>
    </>
    return (
        <div className='lg:px-12'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl">Doctors Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;