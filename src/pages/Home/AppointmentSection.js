import React from 'react';
import FocusButton from '../../conponents/FocusButton';

const AppointmentSection = () => {
    return (
        <section className="flex justify-center items-center bg-[url('https://i.ibb.co/KmKdnsR/appointment-bg.png')] bg-cover lg:mt-40">
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-110px] rounded-lg' src="https://i.ibb.co/tqHhn4v/doctor.png" alt="Doctor" />
            </div>
            <div className='flex-1 px-6'>
                <h3 className='text-primary text-xl font-bold mt-5 lg:mt-0'>Appointment</h3>
                <h2 className='text-2xl text-white my-3'>Make an Appointment Today</h2>
                <p className='text-white text-justify '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="my-5">
                    <FocusButton >Get Started</FocusButton>
                </div>
            </div>
        </section>
    );
};

export default AppointmentSection;