import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const apps = useLoaderData()
    console.log(apps);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
           {
             apps.map(app => (
                <h1>{app.title} </h1>
             ))
           }
            <h1>Home Page</h1>
        </div>
        </div>
    );
};

export default Home;