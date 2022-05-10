import React from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
    return (
        <div>
            <div className='px-12'>
                <AppointmentBanner />
            </div>
            <Footer />
        </div>
    );
};

export default Appointment;