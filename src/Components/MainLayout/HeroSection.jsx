import React from 'react';
import playIcon from '/gIcon.png'
import AppIcon from '/appIcon.png'
import heroBg from '/hero.png'




const HeroSection = () => {
    return (
        <div className=''>
            <div>
                <div className='container mx-auto'>
                    <div className='text-4xl md:text-6xl  font-bold'>We Build</div>
                    <div className='text-4xl md:text-6xl font-bold'><span className='text-red-400'>Productive</span> Apps</div>

                    <p className='mt-4 p-2 md:p-2.5 mb-10 text-[#627382]'> At.HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact. </p>
                    <div className='flex gap-3.5 justify-center mb-10'>
                        <button class="btn p-5 "><span className=''><img src={playIcon} alt="" /></span> Google Play</button>
                        <button class="btn p-5 "><span className=''><img src={AppIcon} alt="" /></span> App Store</button>
                        
                    </div>
                    <div className='flex justify-center '>
                        <img className='px-5 md:px-0' src={heroBg} alt="" />
                    </div>
                </div>
                <div className=' bg-gradient-to-r from-[#4311b6] [#4311b6] md:pt-10 px-0 pb-0'>
                    <h1 className='text-2xl md:text-6xl font-bold text-white pt-20 pb-10'>Trusted by Millions, Built for You</h1>
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
            </div>
        </div>
    );
};

export default HeroSection;