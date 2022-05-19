import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {bookingId} = useParams()
    return (
        <div>
            <h2 className='text-2xl py-5 ps-5 '>Payment for {bookingId}</h2>
        </div>
    );
};

export default Payment;