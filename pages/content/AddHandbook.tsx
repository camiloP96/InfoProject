import React from 'react'

const AddHandbook = () => {
    return (
        <div className='text-center grid grid-cols-3 gap-4 items-center'>
            <div className='col-span-3'>
                <label htmlFor='Name'>Name</label>
                <input  type='text' id='Name' name='Name' className=' bg-slate-700 focus:outline-none'></input>
            </div>
            
            <div className='col-span-3'>
                <label htmlFor='DescriptionH'>Description</label>
                <input  type='text' id='DescriptionH' name='Description' className=' bg-slate-700 focus:outline-none'></input>
            </div>

            <div>
                <label htmlFor='AuthorNameH'> Author</label>
                <input  type='text' id='AuthorNameH' name='AuthorNameH' className=' bg-slate-700 focus:outline-none'></input>
            </div>

            <div>
                <label htmlFor='YearH'>Year</label>
                <input  type='number' id='YearH' name='YearH' className=' bg-slate-700 focus:outline-none'></input>
            </div>

            <div>
                <label htmlFor='ISBN'>ISBN</label>
                <input  type='text' id='ISBN' name='ISBN' className=' bg-slate-700 focus:outline-none'></input>
            </div>

            <div className='col-span-2'>
                <label htmlFor='LinkH'>Link</label>
                <input  type='url' id='LinkH' name='LinkH' className=' bg-slate-700 focus:outline-none'></input>
            </div>

            <div>
                <label htmlFor='Domain'>Domain</label>
                <input  type='text' id='Domain' name='Domain' className=' bg-slate-700 focus:outline-none'></input>
            </div>

            <button className='col-span-3  bg-slate-700 focus:outline-none'>
                <h1>submitt</h1>
            </button>

        </div>
    )
}

export default AddHandbook
