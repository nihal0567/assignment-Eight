import React from 'react';
import playIcon from '/gIcon.png'
import AppIcon from '/appIcon.png'
import heroBg from '/hero.png'
import { NavLink } from 'react-router';




const HeroSection = () => {
    return (
        <div className=''>
            <div>
                <div className='container mx-auto'>
                    <div className='text-4xl md:text-6xl  font-bold'>We Build</div>
                    <div className='text-4xl md:text-6xl font-bold'><span className='text-red-400'>Productive</span> Apps</div>

                    <p className='mt-4 p-2 md:p-2.5 mb-10 text-[#627382]'> At.HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact. </p>
                    <div className='flex gap-3.5 justify-center mb-10'>
                        <NavLink to='https://play.google.com/store/games?hl=en' target='_blank' className="btn p-5 "><span ><img src={playIcon} /></span> Google Play</NavLink>
                        <NavLink to='https://www.apple.com/app-store/' target='_blank' className="btn p-5 "><span ><img src={AppIcon}  /></span> App Store</NavLink>
                        
                    </div>
                    <div className='flex justify-center '>
                        <img className='px-5 md:px-0' src={heroBg} alt="" />
                    </div>
                </div>
                <div className='bg-gradient-to-r from-[#4616b8] to-[#8f7bbd] md:pt-5 px-0 pb-20 '>
                    <h1 className='text-2xl md:text-6xl font-bold text-white pt-14 pb-16'>Trusted by Millions, Built for You</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 '>
                    <div className=''>
                        <h2 className='font-semibold text-xl text-white'>Total Downloads</h2>
                        <div className='py-4 font-bold text-white text-7xl'>29.6M</div>
                        <div className='text-xl text-white'>21% more than last month</div>
                    </div>
                    <div className=''>
                        <h2 className='font-semibold text-xl text-white'>Total Reviews</h2>
                        <div className='py-4 font-bold text-white text-7xl'>906K</div>
                        <div className='text-xl text-white'>46% more than last month</div>
                    </div>
                    <div>
                        <h2 className='font-semibold text-xl text-white'>Active Apps</h2>
                        <div className='py-4 font-bold text-white text-7xl'>132+</div>
                        <div className='text-xl text-white'>31 more will Launch</div>
                    </div>
                    </div>
                </div>
                <div className='h-60'>
            <div className='text-3xl md:text-6xl font-semibold text-center mt-20'> Trending Apps </div>
            <p className='text-[#627382] font-medium mt-5 text-center'>Explore All Trending Apps on the Market developed by us</p>

        </div>
            </div>
        </div>
    );
};

export default HeroSection;