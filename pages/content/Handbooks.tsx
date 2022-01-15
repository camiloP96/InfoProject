import React from 'react'
import Link from 'next/dist/client/link'
const Handbooks = () => {
    return (
        <div className="grid ">
            <div className="grid-cols-1 text-center text-4xl bold ">
           <div>Image related</div>
           <div >Name of the Domain </div>
           </div>
            <div className='text-center m-5'>
           <div>
               <p>
                   DESCRIPTION
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sit expedita. Quo itaque maiores consequuntur minima labore alias esse pariatur dolorem vel reiciendis ullam, perspiciatis molestiae quas deserunt! Quas, recusandae?
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aperiam dignissimos nulla temporibus exercitationem pariatur quas dolores dolor odit non minima hic expedita voluptatum sunt, aliquid eligendi et, dolorem optio.
               </p>
           </div>
           <div className='m-5'>
               <p> HISOTRY OF THE FIELD
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusantium temporibus beatae architecto recusandae similique deleniti laborum ea hic, odio excepturi veritatis, distinctio, enim ex modi! At quod necessitatibus beatae!
               </p>
           </div>
           </div>
           <div className=" grid grid-cols-2 m-5  text-center ">

                <div className="p-1">List of Handbooks</div>
                <div className="p-1">List of topics</div>
                <div className="p-1">List of VideoConferences</div>
                <div className="p-1">Altmetrics</div>

           </div>
           <div className='text-center grid grid-cols-1'>
               <div className='m-2 bg-slate-700 hover:bg-slate-600'>
                <button  >
               <Link href="/content/AddHandbook">
               <a>Add Handbook</a>
               </Link>
               </button>
               </div>

               <div className='bg-slate-700 hover:bg-slate-600'>
               <button >
               <Link href="/content/AddVideoc">
               <a>Add VideoConferences</a>
               </Link>
               </button>
               </div>
               





           </div>
        </div>
    )
}

export default Handbooks
