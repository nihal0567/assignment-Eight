import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import { Link, NavLink } from 'react-router';

const CountedApps = ({app}) => {
    const {image, title, downloads, ratingAvg, id} = app


  




    return (
        <Link to={`/app/${id}`} >
        <div className="card bg-base-100 gap-16 shadow-lg border hover:scale-105 transition ease-in cursor-pointer">
            <figure className=" object-cover px-10 pt-10">
                <img 
                src={image}
                alt="Icon"
                className="rounded-xl w-full h-36"  />
            </figure>
                <h2 className="card-title flex justify-center">{title} </h2>
            <div className="flex items-center justify-between px-10 py-10">
                <span className='p-2 bg-gray-200 rounded:lg flex items-center gap-2'> <img className='w-4 h-4' src={downloadIcon} alt="" /> {downloads} </span>
                <span className='p-2 bg-gray-200 rounded:lg flex items-center gap-2'> <img className='w-4 h-4' src={ratingIcon} alt="" /> {ratingAvg} </span>
                
            </div>
            </div>

        </Link>
 
    );
};

export default CountedApps;