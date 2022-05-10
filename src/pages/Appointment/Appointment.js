import React from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    return (
        <div>
            <div className='px-12'>
                <AppointmentBanner />
                <AvailableAppointment/>
            </div>
            <Footer />
        </div>
    );
};

export default Appointment;