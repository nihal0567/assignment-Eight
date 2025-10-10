import React, { useState } from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingAvgIcon from '../../assets/icon-ratings.png'
import reviwsIcon from '../../assets/icon-review.png'
import {  useParams } from 'react-router';
import useCards from '../hooks/useCards';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';

const Application = () => {
    const { id } = useParams()
    const { cards, loading,  } = useCards()
    const card = cards.find(card => String(card.id) === id) 

  // const [installed, setInstalled] = useState(false);
   
   
   const {image, title, downloads, ratingAvg, reviews, size} = card || {}
   
   
   //   const handleAddItem=()=>{
    //     const existingItems = JSON.parse(localStorage.getItem('installation'))
    //     let updatedList = []
        //     if(existingItems){
            //         const isDouble = existingItems.some(c=> c.id===card.id)
            //         if(isDouble) return 
            //         setInstalled(true)
            //         updatedList =[...existingItems, card]
            //         toast( "App Installed")
            //     } else{
                //         updatedList.push(card)
                //     }
                //    localStorage.setItem('installation', JSON.stringify(updatedList))
        // }
        
        const existingItems = JSON.parse(localStorage.getItem('installation')) || []
        const isDouble = existingItems.some(c=> c===Number(id))
        const [exist,setExist] = useState(isDouble)
        
        console.log(exist);
        
        
        const handleAddItem = ()=>{
            if(exist){
                toast("App already installed!")
                return
            }else{
                localStorage.setItem('installation', JSON.stringify([...existingItems,card.id]))
                setExist(true)
                toast("App installed successfully.")
            }
        }
        
        if (loading) return <p>Loading.....</p> 
    return (
        <div 
         className="w-full  gap-16">
            <div className='md:flex gap-12 md:w-7xl items-center  border-b-1 border-gray-300 mt-20 ml-20 m-5'>
                <div className=' '>
                    <img className='w-[550px] md:w-56 ' src={image} alt="" />
                </div>
             <div>
                <div className='border-b-1 border-gray-300 w-full'>
                    <h1 className='text-xl md:text-3xl font-bold pb-2'>{title} </h1>
                    <p className='text-gray-500 font-normal mb-6'>Developed by <span className='text-purple-500 font-semibold '>{card.companyName} </span></p>
                 </div>

                    <div className='my-5 '>
                        <div className='flex gap-22 md:gap-24'>
                        <img src={downloadIcon} alt="" className=''/>
                        <img src={ratingAvgIcon} alt="" className=''/>
                        <img src={reviwsIcon} alt="" className='ml-0 md:ml-5'/>
                        </div>
                     <div className='flex gap-12'>
                        <div className='flex flex-col my-2'>
                        <span className='font-normal text-gray-500'>Downloads </span>
                        <span className='font-bold text-xl'> {downloads} </span>
                        </div>
                        <div className='flex flex-col my-2'>
                        <span className='font-normal text-gray-500'>Average Ratings </span>
                        <span className='font-bold text-xs md:text-xl'> {ratingAvg} </span>
                        </div>
                        <div className='flex flex-col my-2'>
                        <span className='font-normal  text-gray-500'>Total Reviews </span>
                        <span className='font-bold text-xs md:text-xl'> {reviews} </span>
                        </div>
                     </div>
                        {/* <button onClick={handleAddItem} disabled={installed} className={`mt-5 cursor-pointer px-4 py-2 rounded-lg border text-sm font-semibold  transition-all duration-200 ${ installed ? "bg-gray-200 border-gray-300 text-gray-500 cursor-not-allowed"
                  : "text-pink-600 border-pink-500 hover:bg-pink-50"}`}
                  >
                     {installed ? "Installed Apps ✅" : "Install Now "}</button> */}
                     <button onClick={handleAddItem} className='btn btn-outline btn-secondary '>{exist?"installed":`Install Now ${size}`}</button>
                   </div>
             </div>
            </div>

            

            <div className="space-y-2.5">
                <h1 className='text-3xl font-semibold text-gray-500 ml-20'> Ratings</h1>
                <div className='h-96'>
                <BarChart
                data={card}
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