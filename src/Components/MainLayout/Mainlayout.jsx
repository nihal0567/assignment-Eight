import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';
import HeroSection from './HeroSection';
import TrendingApps from '../Pages/TrendingApps';

const Mainlayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='text-center mt-5 md:mt-20'>
            <HeroSection></HeroSection>
            </div>
            <div>
             
            </div>
            <div className='container mx-auto flex-1'>
            <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;