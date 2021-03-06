import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { text, img, name, country } = testimonial
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <p className='text-justify'>{text}</p>
            </div>
            <div className='flex px-8 space-x-6 pb-5'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ">
                        <img src={img} alt='man' />
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{country}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;