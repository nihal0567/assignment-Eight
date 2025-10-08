import React from 'react';
import { useLoaderData } from 'react-router';
import CountedApps from './CountedApps';

const Home = () => {
    const apps = useLoaderData()
    console.log(apps);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-11 p-3 md:p-4 container mx-auto'>
           {
            apps.map((app, ind)=> (
                <CountedApps app={app} key={ind}></CountedApps>
            ))
           }
        </div>
        </div>
    );
};

export default Home;