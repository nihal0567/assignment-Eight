import React from 'react';
import { NavLink } from 'react-router';
import CountedApps from './CountedApps';
import HeroSection from '../MainLayout/HeroSection';

import useCards from '../hooks/useCards';

const Home = () => {
    const {cards, loading, error} = useCards()

    const itemCards = cards.slice(0, 8)
    return (
        <div>
            <div className='text-center mt-5 md:mt-20'>
            <HeroSection></HeroSection>
            </div>




            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-11 p-3 md:p-4 container mx-auto'>
           {
            itemCards.map((app, ind)=> (
                <CountedApps app={app} key={ind}></CountedApps>
            ))
           }
        </div>
        <div className='flex justify-center mt-10 mb-20'>
            <NavLink to="/app" className="btn flex btn-wide bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Show All</NavLink>
        </div>
        </div>
    );
};

export default Home;