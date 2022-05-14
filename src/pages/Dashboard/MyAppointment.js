import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const MyAppointment = () => {
    const [myAppointments, setMyAppointments] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user?.email}`)
                .then(res => res.json())
                .then(data => setMyAppointments(data))
        }
    }, [user])


    return (
        <div className='md:p-4'>
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                            myAppointments.map((a,index) => 
                            <tr>
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