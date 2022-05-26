import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../conponents/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L14pjDEsxnXfJbTiZgmC0dz3uHctqNriljNuVFrVk6oTpM7wsc9tHAymdCZlelQzHvDWCKD1yfU0LY6Ccm13tpi00ExQ2fXbe');

const Payment = () => {
    const { bookingId } = useParams()
    const { data: appointment, isLoading, error, refetch } = useQuery(['booking', bookingId], () =>
        fetch(`http://localhost:5000/booking/${bookingId}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div className='text-center py-5'>
                <p className='text-2xl'>Payment for <span className='text-lg font-bold text-success'>{appointment?.treatment}</span></p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center  px-5">
                <div className="flex-1">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body space-y-3">
                            <h2 className="card-title">Hello! {appointment?.patient}</h2>
                            <p>Your appointment is <span className='font-bold text-primary'>{appointment?.date}</span> at <span className='font-bold text-primary'>{appointment?.slot}</span></p>
                            <p>You have to pay <span className='font-bold text-lg text-secondary'>$ {appointment?.price}</span></p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="card w-96 bg-base-100 shadow-xl pt-5">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm appointment={appointment} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;