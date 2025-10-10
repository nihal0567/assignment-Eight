
import React, { useEffect, useState } from 'react';
import dwi from '../../assets/icon-downloads.png'
import rvi from '../../assets/icon-ratings.png'
import { toast } from 'react-toastify';




const Appdetail = () => {
      const [list, setList] = useState([])

      const [sort, setSort] =  useState('none')

      useEffect(()=>{
        const savedItems = JSON.parse(localStorage.getItem('installation'))
        if(savedItems) setList(savedItems)
      },[])

if (!list.length) return <p className='text-2xl md:text-5xl  flex justify-center font-semibold text-gray-400 items-center h-[440px]'> No Apps Installed yet.</p>

      const countedItems = (()=>{
        if (sort == 'count-asc') {
          return [...list].sort((a, b)=>(a.downloads) - (b.downloads))
        } else if(sort == 'count-dsc'){
          return [...list].sort((a, b)=>(b.downloads) - (a.downloads))
        } else {
          return list
        }
      }) ()

      const handleRemove=(id)=>{
        const existingItems = JSON.parse(localStorage.getItem('installation'))
         let updatedList = existingItems.filter(app=> app.id !== id)
         toast("App Uninstalled")
        setList(updatedList)
       localStorage.setItem('installation', JSON.stringify(updatedList))
      }


      // const totalStar = {}
      // list.forEach(app=> {
      //   const companyName = app.companyName
      //   totalStar[companyName] = (totalStar[companyName] || 0) + app.companyName
      // })

    return (
        <div className="space-y-6">
     <div className="space-y-4">
        <div className='space-y-5 flex justify-between py-5 items-center'>
          <h1 className="text-2xl md:text-4xl font-semibold">
          ({list.length}) App Installed{" "}
        </h1>
        
        <label className='form-control w-full max-w-xs '>
        <select className='select select-bordered' value={sort} onChange={e=>setSort(e.target.value)}>
          <option value="none">sort by count</option>
          <option value="count-asc">Low-&gt;High</option>
          <option value="count-dsc">High-&gt;Low</option>
        </select>
        </label>
        </div>
      </div>

      <div className='space-y-3'>
        { countedItems.map((app, ind) => (
            <div key={ind} className="gap-5 shadow-lg flex items-center">
                        <figure className="">
                            <img 
                            src={app.image}
                            alt={app.title}
                            className="rounded-xl h-36 w-36"  />
                        </figure>
                          <div className='card-body'>
                            <p className='mt-1 font-semibold ml-1'> {app.title} </p>
                            <div className='flex gap-3'>
                            <div className='flex items-center gap-1.5'>
                            <img className='w-4' src={dwi} alt="" />
                            <span className=''> {app.downloads} </span>
                            </div>
                            <div className='flex items-center gap-1.5'>
                            <img className='w-4' src={rvi} alt="" />
                            <span className='font-semibold'>5 </span>
                            </div>
                            <div className='flex items-center gap-1.5'>
                            <span className='text-gray-400'> {app.size} MB </span>
                            </div>
                            </div>
                          </div>
                          <div className='px-4 flex items-center gap-3'>
                            <div className="font-semibold">{app.reviews} </div>
                            <button onClick={()=>handleRemove(app.id)} className='btn btn-success'> Uninstall </button>
                          </div>
                     </div> 
          ))
        }
      </div>

          <div className="space-y-6" ></div>


    </div>
    );
};

export default Appdetail;