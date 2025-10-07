import React from 'react';
import playIcon from '/gIcon.png'
import AppIcon from '/appIcon.png'
import heroBg from '/hero.png'




const HeroSection = () => {
    return (
        <div className='container mx-auto'>
            <div>
                <div className='text-center'>
                    <div className='text-4xl md:text-6xl  font-bold'>We Build</div>
                    <div className='text-4xl md:text-6xl font-bold'><span className='text-red-400'>Productive</span> Apps</div>

                    <p className='mt-4 p-2 md:p-2.5 mb-10 text-[#627382]'> At.HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact. </p>
                    <div className='flex gap-3.5 justify-center mb-10'>
                        <button class="btn p-5 "><span className=''><img src={playIcon} alt="" /></span> Google Play</button>
                        <button class="btn p-5 "><span className=''><img src={AppIcon} alt="" /></span> App Store</button>
                        
                    </div>
                    <div className='flex justify-center '>
                        <img className='p-5' src={heroBg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;