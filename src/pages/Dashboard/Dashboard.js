import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content space-y-4">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='/dashboard' className='text-lg'>My Appointments</NavLink></li>
                        <li><NavLink to='/dashboard/review' className='text-lg'>My Review</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;