import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse items-center">
                    <img src={chair} class="max-w-sm lg:max-w-md rounded-lg shadow-2xl" alt='chair'/>
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                        <p class="py-6">We use state-of-the-art technology and the most advanced dental techniques to provide you with exceptional care. We care about your comfort, and offer a calm waiting area, free parking, and even massage chairs in the operating room. </p>
                        <button class="btn btn-primary text-white uppercase">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;