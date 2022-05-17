import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }
    const menuItems = <>
        <li><NavLink to='/' className='text-lg'>Home</NavLink></li>
        <li><NavLink to='/appointment' className='text-lg'>Appointment</NavLink></li>
        <li><NavLink to='/reviews' className='text-lg'>Reviews</NavLink></li>
        <li><NavLink to='/contact-us' className='text-lg'>Contact us</NavLink></li>
        <li><NavLink to='/about-us' className='text-lg'>About</NavLink></li>
        {
            user?.uid && <li><Link to='/dashboard' className='text-lg'>Dashboard</Link></li>
        }
        <li>
            {user?.uid
                ?
                <button  onClick={logOut} className='text-lg'>Log Out</button>
                :
                <NavLink to='/login' className='text-lg'>Log in</NavLink>}
        </li>
    </>
    return (
        <div className='lg:px-12'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {menuItems}
                            <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden">Dashboard Menu</label>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl">Doctors Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 space-x-4">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;