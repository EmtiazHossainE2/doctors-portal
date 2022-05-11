import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import SingleAppointment from './SingleAppointment';

const AvailableAppointment = ({selected}) => {
    const [appointments, setAppointments] = useState([])
    const [treatment , setTreatment] = useState(null)
    useEffect(() => {
        fetch('appointment.json')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    

    return (
        <div className=''>
            <div className='text-center'>
                <h2 className='text-xl font-bold text-primary uppercase py-16'>Available Appointments on {format(selected, 'PP')}</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mb-12'>
                {
                    appointments.map(appointment => <SingleAppointment
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}
                    ></SingleAppointment>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment}/>}
        </div>
    );
};

export default AvailableAppointment;