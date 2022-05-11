import React from 'react';
import FocusButton from '../../conponents/FocusButton';

const SingleAppointment = ({ appointment }) => {
    const { name, slots } = appointment
    return (
        <div className="card lg:max-w-lg  shadow-md">
            <div className="card-body items-center text-center space-y-2">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{slots.length > 0
                    ?
                    <span>{slots[0]}</span>
                    :
                    <span className='text-red-500 '>Try Another Day</span>
                }</p>
                <p className=' uppercase'>{slots.length} {slots.length > 1 ? "spaces" : 'space'} available</p>
                <div>
                    <button disabled={slots.length===0} className="btn btn-primary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default SingleAppointment;