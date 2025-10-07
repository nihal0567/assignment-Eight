import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';
import HeroSection from './HeroSection';

const Mainlayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='text-center mt-20'>
            <HeroSection></HeroSection>
            </div>
            <div className='container mx-auto flex-1'>
            <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;