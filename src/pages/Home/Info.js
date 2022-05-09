import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-12  md:grid-cols-3 px-12 lg:pb-20 ">
                <div className='bg-gradient-to-r from-secondary to-primary  flex items-center p-6 max-w-sm mx-auto rounded-xl shadow-lg sm:space-4 space-x-4 '>
                    <div className='shrink-0'>
                        <img className='h-16 w-16 rounded-2xl' src={clock} alt="" />
                    </div>
                    <div>
                        <div className='text-xl font-medium text-white'>Opening Hours</div>
                        <p className='text-yellow-50'>Up to date tools and procedures. </p>
                    </div>
                </div>
                <div className='bg-[#3A4256]  flex items-center p-6 max-w-sm mx-auto rounded-xl shadow-lg  space-x-4'>
                    <div className='shrink-0'>
                        <img className='h-16 w-16 rounded-2xl' src={marker} alt="" />
                    </div>
                    <div>
                        <div className='text-xl font-medium text-white'>Visit Our Location</div>
                        <p className='text-yellow-50'>Emtiaz Park , Bus Terminal , 5401 , Rangpur </p>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-secondary to-primary  flex items-center p-6 max-w-sm mx-auto rounded-xl shadow-lg  space-x-4'>
                    <div className='shrink-0'>
                        <img className='h-16 w-16 rounded-2xl' src={phone} alt="" />
                    </div>
                    <div>
                        <div className='text-xl font-medium text-white'>Contact us now</div>
                        <p className='text-yellow-50'>Up to date tools and procedures. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;