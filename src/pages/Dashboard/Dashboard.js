import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  justify-center pt-12">
                    {/* <!-- Page content here --> */}
                    <h2 className='text-3xl text-purple-700 text-center'>DashBoard </h2>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-[#f2f7f5] text-base-content space-y-4">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='/dashboard' className='text-lg'>My Appointments</NavLink></li>
                        <li><NavLink to='/dashboard/review' className='text-lg'>My Review</NavLink></li>
                        <li><NavLink to='/dashboard/history' className='text-lg'>My History</NavLink></li>
                        {admin && <li><NavLink to='/dashboard/user' className='text-lg'>All Users</NavLink></li>}
                        <li><button  onClick={logOut} className='text-lg'>Log Out</button></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;