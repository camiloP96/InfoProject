import React from 'react'

const AddVideoc = () => {
    return (
        <div className='text-center grid grid-cols-2 gap-5'>
            <div > 
            <label htmlFor='Link'>Link</label>    
            <input className=' bg-slate-700 focus:outline-none' type='url' id='Link' name='Link' required></input>
            </div>
           
            <div className=''>
                <label htmlFor='Topic'>Topic</label>
                <input className=' bg-slate-700 focus:outline-none' type='text' id='Topic' name='Topic'></input>
            </div>

            <div className='col-span-2'> 
                <label htmlFor='Description'>Description</label>
                <input className=' bg-slate-700 focus:outline-none'  type='text' id='Description' name='Description' ></input>
            </div>

            <button className='col-span-2'>
                
                <h1>Submitt</h1>
                
            </button>
        </div>
    )
}

export default AddVideoc
