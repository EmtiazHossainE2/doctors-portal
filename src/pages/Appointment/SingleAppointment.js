import React from 'react';

const SingleAppointment = ({ appointment,setTreatment }) => {
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
                    <label 
                    htmlFor="booking-modal" 
                    disabled={slots.length===0}
                    onClick={() => setTreatment(appointment)} 
                    className="btn btn-primary text-white uppercase bg-gradient-to-r from-secondary to-primary" >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default SingleAppointment;