import React from 'react';
import AppointmentSection from './AppointmentSection';
import Banner from './Banner';
import ContactSection from './ContactSection';
import Exceptional from './Exceptional';
import Footer from './Footer';
import Info from './Info';
import Services from './Services';
import TestimonialBottom from './Testimonial/TestimonialBottom';
import TestimonialTop from './Testimonial/TestimonialTop';

const Home = () => {
    return (
        <div>
            <div className="px-12">
                <Banner />
                <Info />
                <Services />
                <Exceptional />
                <AppointmentSection />
                <TestimonialTop />
                <TestimonialBottom />
            </div>
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Home;