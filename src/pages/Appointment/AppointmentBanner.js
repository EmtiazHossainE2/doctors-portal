import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({date, setDate}) => {
    return (
        <div className=" py-16  bg-[url('https://i.ibb.co/Fq8m6Fh/bg.png')] bg-cover ">
            <div className="hero-content flex justify-around lg:mb-12  flex-col lg:flex-row-reverse  ">
                <img src={chair} className="max-w-sm lg:max-w-lg  rounded-lg shadow-2xl" alt='chair' />
                <div className=' border-2 p-5 bg-white shadow-lg rounded-lg'>
                    <DayPicker 
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;