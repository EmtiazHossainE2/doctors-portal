import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="py-12 bg-[url('https://i.ibb.co/26xZX8D/footer-bg.png')] bg-cover">
            <div className="footer flex justify-around p-10  text-base-content">
                <div>
                    <h2 className='uppercase text-xl font-bold'>services</h2>
                    <Link to='/'>Emergency Checkup</Link>
                    <Link to='/'>Monthly Checkup</Link>
                    <Link to='/'>Weakly Checkup</Link>
                    <Link to='/'>Deep Checkup</Link>
                </div>
                <div>
                    <h2 className='uppercase text-xl font-bold'>oral health</h2>
                    <Link to='/'>Fluoride Treatment</Link>
                    <Link to='/'>Cavity Filling</Link>
                    <Link to='/'>Teath Whitening</Link>
                </div>
                <div>
                    <h2 className='uppercase text-xl font-bold'>our address</h2>
                    <Link to='/contact'>Emtiaz park , Bus Terminal , 5401 , Us</Link>
                </div>
            </div>
            <div className='my-10 text-center px-12'>
                <p>Copyright © {currentYear} - All right reserved by Emtiaz Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;