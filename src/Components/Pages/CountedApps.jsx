import React from 'react';

const CountedApps = ({app}) => {
    const {image, title, reviews, ratingAvg} = app
    return (
        <div className="card bg-base-100 gap-16 shadow-lg border">
            <figure className=" object-cover px-10 pt-10">
                <img
                src={image}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
                <h2 className="card-title flex justify-center">{title} </h2>
            <div className="flex items-center justify-between px-10 py-10">
                <span>✅ {reviews} </span>
                <span> ✡ {ratingAvg} </span>
            </div>
            </div>
    );
};

export default CountedApps;