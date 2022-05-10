import React, { useEffect, useState } from 'react';
import SingleAppointment from './SingleAppointment';

const AvailableAppointment = () => {
    const [appointments,setAppointments] = useState([])
    useEffect(() => {
        fetch('appointment.json')
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[])
    return (
        <div className=''>
            <div className='text-center'>
                <h2 className='text-xl font-bold text-primary uppercase py-16'>Available Appointments on May 30, 2022</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mb-12'>
                {
                    appointments.map(appointment => <SingleAppointment
                    key={appointment.id}
                    appointment={appointment}
                    ></SingleAppointment>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;