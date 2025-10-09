import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>

            <div className='container mx-auto flex-1'>
            <Outlet/>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;