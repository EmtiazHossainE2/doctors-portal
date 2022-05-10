import React from 'react';
import chair from '../../assets/images/chair.png'
import FocusButton from '../../conponents/FocusButton';

const Banner = () => {
    return (
        <div className="  py-16  bg-[url('https://i.ibb.co/Fq8m6Fh/bg.png')] bg-cover ">
            <div className="hero-content  lg:mb-12  flex-col lg:flex-row-reverse items-center">
                <img src={chair} className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='chair' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts  Here</h1>
                    <p className="py-6">We use state-of-the-art technology and the most advanced dental techniques to provide you with exceptional care. We care about your comfort, and offer a calm waiting area, free parking, and even massage chairs in the operating room. </p>
                    <FocusButton>Get Started</FocusButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;