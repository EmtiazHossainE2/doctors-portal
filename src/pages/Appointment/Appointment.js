import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date())
    return (
        <div>
            <div className='px-12 '>
                <AppointmentBanner selected={selected} setSelected={setSelected}/>
                <AvailableAppointment selected={selected}/>
            </div>
            <Footer />
        </div>
    );
};

export default Appointment;