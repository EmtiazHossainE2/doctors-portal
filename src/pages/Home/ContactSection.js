import React from 'react';
import FocusButton from '../../conponents/FocusButton';

const ContactSection = () => {
    return (
        <div className="text-center py-16 mt-28 bg-[url('https://i.ibb.co/KmKdnsR/appointment-bg.png')] bg-cover">
            <div >
                <h3 className='text-xl font-bold text-transparent bg-clip-text bg-secondary'>Contact us</h3>
                <h2 className='text-3xl pb-6 pt-3 text-white'>Stay Connected With us</h2>
            </div>
            <div>
                <div className='grid grid-cols-1 justify-items-center gap-5 px-8 lg:px-0'>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='input w-full max-w-md'
                    />
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Your message'
                        rows={5}
                    ></textarea>
                    <FocusButton>Submit</FocusButton>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;