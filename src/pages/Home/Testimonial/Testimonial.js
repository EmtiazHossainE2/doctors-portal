import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { text, img, name, country } = testimonial
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <p className='text-justify'>{text}</p>
            </div>
            <div className='flex px-8 space-x-6 pb-5'>
                <div>
                    <img className='w-16 h-16' src={img} alt="man" class="rounded-xl" />
                </div>
                <div>
                    <h2 class="card-title">{name}</h2>
                    <p>{country}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;