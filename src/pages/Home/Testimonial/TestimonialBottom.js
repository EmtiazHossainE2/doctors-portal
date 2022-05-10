import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';

const TestimonialBottom = () => {
    const [testimonials,setTestimonials] = useState([])
    useEffect(() => {
        fetch('testimonial.json')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    },[])
    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mb-12'>
                {
                    testimonials.map(testimonial => <Testimonial
                    key={testimonial.id}
                    testimonial={testimonial}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default TestimonialBottom;