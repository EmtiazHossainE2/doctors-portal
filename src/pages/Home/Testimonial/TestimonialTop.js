import React from 'react';
import quote from '../../../assets/icons/quote.svg'
const TestimonialTop = () => {
    return (
        <section className='flex mt-12'>
            <div className='flex-1 ' >
                <h3 className='text-primary text-2xl font-bold'>Testimonial </h3>
                <h2 className='text-4xl'>What our patients says</h2>
            </div>
            <div className='flex-1 flex justify-end' >
                <div>
                <img className='w-36 h-36 rounded-lg' src={quote} alt="Doctor" />
                </div>
            </div>
        </section>
    );
};

export default TestimonialTop;