import React from 'react';

const InfoCard = ({ img ,title,bgColor,description}) => {
    
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl  py-4  ${bgColor}`}>
            <figure className='pl-6'><img className='h-22 w-16' src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title font-bold text-xl">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;