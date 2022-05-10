import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 mb-12'>
            {/* <InfoCard title="Opening Hour" bgColor="bg-gradient-to-r from-secondary to-primary" description="Mon to Fri at 10am to 4 pm" img={clock}></InfoCard>
            <InfoCard title="Visit our location" bgColor="bg-accent" description="Emtiaz park , Bus Terminal , 5401 , Us" img={marker} ></InfoCard>
            <InfoCard title="Contact us now" bgColor="bg-gradient-to-r from-secondary to-primary" description="+000 123 456789" img={phone}></InfoCard> */}
            <div className="card lg:card-side bg-base-100 shadow-xl  py-4 bg-gradient-to-r from-secondary to-primary ">
                <figure className='pl-6'><img className='h-22 w-16' src={clock} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title font-bold text-xl">Opening Hour</h2>
                    <p>Mon to Fri at 10am to 4 pm</p>
                </div>
            </div>
            <div className="card lg:card-side  shadow-xl  py-4 bg-accent">
                <figure className='pl-6'><img className='h-22 w-16' src={marker} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title font-bold text-xl">Visit our location</h2>
                    <p>Emtiaz park , Bus Terminal , 5401 , Us</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl  py-4 bg-gradient-to-r from-secondary to-primary ">
                <figure className='pl-6'><img className='h-22 w-16' src={phone} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title font-bold text-xl">Opening Hour</h2>
                    <p>Mon to Fri at 10am to 4 pm</p>
                </div>
            </div>
        </div>
    );
};

export default Info;