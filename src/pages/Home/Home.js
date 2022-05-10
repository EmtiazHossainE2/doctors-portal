import React from 'react';
import Banner from './Banner';
import Exceptional from './Exceptional';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='mb-20 px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <Exceptional/>
        </div>
    );
};

export default Home;