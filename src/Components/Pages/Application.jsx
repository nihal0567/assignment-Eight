import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingAvgIcon from '../../assets/icon-ratings.png'
import reviwsIcon from '../../assets/icon-review.png'
import {  useParams } from 'react-router';
import useCards from '../hooks/useCards';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Application = () => {
    const { id } = useParams()
    const { cards, loading,  } = useCards()
    const card = cards.find(card => String(card.id) === id) 
   
 
    if (loading) return <p>Loading.....</p> 
    const {image, title, downloads, ratingAvg, reviews, size} = card || {}


      const handleAddItem=()=>{
        const existingItems = JSON.parse(localStorage.getItem('installation'))
        let updatedList = []
        if(existingItems){
            const isDouble = existingItems.some(c=> c.id===card.id)
            if(isDouble) return alert( "already exist")
           updatedList =[...existingItems, card]
        } else{
            updatedList.push(card)
        }
       localStorage.setItem('installation', JSON.stringify(updatedList))
    }

    
    return (
        <div onClick={handleAddItem} className="w-full  gap-16  ">
            <div className='flex gap-12 items-center border-b-1 border-gray-300 mt-20 ml-20 m-5'>
                <div className=' '>
                    <img className='w-56' src={image} alt="" />
                </div>
             <div>
                <div className='border-b-1 border-gray-300 w-full'>
                    <h1 className='text-3xl font-bold pb-2'>{title} </h1>
                    <p className='text-gray-500 font-normal mb-6'>Developed by <span className='text-purple-500 font-semibold '>{card.companyName} </span></p>
                </div>

                    <div className='my-5'>
                        <div className='flex gap-24'>
                        <img src={downloadIcon} alt="" className=''/>
                        <img src={ratingAvgIcon} alt="" className=''/>
                        <img src={reviwsIcon} alt="" className='ml-5'/>
                        </div>
                     <div className='flex gap-12'>
                        <div className='flex flex-col my-2'>
                        <span className='font-normal text-gray-500'>Downloads </span>
                        <span className='font-bold text-xl'> {downloads} </span>
                        </div>
                        <div className='flex flex-col my-2'>
                        <span className='font-normal text-gray-500'>Average Ratings </span>
                        <span className='font-bold text-xl'> {ratingAvg} </span>
                        </div>
                        <div className='flex flex-col my-2'>
                        <span className='font-normal text-gray-500'>Total Reviews </span>
                        <span className='font-bold text-xl'> {reviews} </span>
                        </div>
                     </div>
                        <button className='btn btn-outline btn-secondary '>Install Now {size} </button>
                   </div>
             </div>
            </div>

            <div className="space-y-2.5">
                <h1 className='text-3xl font-semibold text-gray-500 ml-20'> Ratings</h1>
                <div className='h-96'>
                <BarChart
                data={card.ratings}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
                >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="count" fill="#ff8c00" barSize={25} radius={[4, 4, 4, 4]} />
                </BarChart>
                </div>

            </div>

            <div className="w-full text-gray-500 mb-10">
                <h1 className='text-2xl font-semibold text-black mb-3 ml-20 content-center '>Description</h1>
                <span>
                {card.description}
                </span>
            </div>
        </div>
    );
};

export default Application;