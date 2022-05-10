import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='pt-12 px-12'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-primary uppercase'>Our Services</h2>
                <p className='text-4xl mt-4 mb-16'>Service we provide</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mb-12'>
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;