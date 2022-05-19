import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';

const MyAppointment = () => {
    const navigate = useNavigate();
    const [myAppointments, setMyAppointments] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`https://e-doctors-portal.herokuapp.com/booking?patient=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        Swal.fire({
                            text: 'Session expired sign in again . .',
                            icon: 'error',
                            confirmButtonText: 'Okay'
                        })
                        navigate('/login')
                    }
                    return res.json()
                })
                .then(data => {
                    setMyAppointments(data)
                })
        }
    }, [user, navigate])


    return (
        <div className='md:p-4'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myAppointments.map((a, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{a.patient}</td>
                                    <td>{a.treatment}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.date}</td>
                                    <td>
                                        {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-warning btn-xs'>Pay</button></Link>}
                                        {(a.price && a.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                        </div>}
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;