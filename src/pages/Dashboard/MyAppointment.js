import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';

const MyAppointment = () => {
    const navigate = useNavigate();
    const [myAppointments, setMyAppointments] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        Swal.fire({
                            icon: 'error',
                            confirmButtonText: 'Unauthorized Access'
                        })
                        navigate('/login')
                    }
                    return res.json()
                })
                .then(data => {
                    setMyAppointments(data)
                })
        }
    }, [user,navigate])


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
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;