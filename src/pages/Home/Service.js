import React from 'react';

const Service = ({ service }) => {
    const { img, title, des } = service
    return (
        <div class="card w-80 lg:w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="teeth" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{des.slice(0,100) + '..'}</p>
            </div>
        </div>
    );
};

export default Service;