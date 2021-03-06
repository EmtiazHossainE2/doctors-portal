import React from 'react';
import FocusButton from '../../conponents/FocusButton';

const Exceptional = () => {
    return (
        <div className="flex items-center justify-center text-center md:space-x-12 md:mx-36 flex-col lg:flex-row my-24">
            <div><img className='md:max-w-md lg:max-w-sm rounded-lg' src="https://i.ibb.co/0BLdtN7/treatment.png" alt="Treatment" /></div>
            <div >
                <h2 className="card-title text-2xl lg:text-4xl font-bold font-sans">Exceptional Dental <br /> Care, on Your Terms</h2>
                <p className='text-justify my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className=' flex  flex-start'>
                    <FocusButton>Get Started</FocusButton>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;