import React from 'react';
import FocusButton from '../../conponents/FocusButton';

const SingleAppointment = ({ appointment }) => {
    const { name, time, sit } = appointment
    return (
        <div className="card lg:max-w-lg  shadow-md">
            <div className="card-body items-center text-center space-y-2">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{time}</p>
                <p>{sit}</p>
                <FocusButton>Book Appointment</FocusButton>
            </div>
        </div>
    );
};

export default SingleAppointment;