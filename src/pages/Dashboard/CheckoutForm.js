import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };


    
        return (
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className='btn btn-sm btn-success mt-5' type="submit" disabled={!stripe || !elements}>
                    Pay
                </button>
            </form>
        );
    };

    export default CheckoutForm;