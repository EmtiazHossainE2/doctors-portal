import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <div className='px-12 '>
                <AppointmentBanner date={date} setDate={setDate}/>
                <AvailableAppointment date={date}/>
            </div>
            <Footer />
        </div>
    );
};

export default Appointment;