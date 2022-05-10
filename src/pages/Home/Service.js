import React from 'react';

const Service = ({ service }) => {
    const { img, title, des } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="teeth" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{des.slice(0, 100) + '..'}</p>
            </div>
        </div>
    );
};

export default Service;