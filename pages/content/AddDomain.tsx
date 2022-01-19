import React from 'react'

const AddDomain = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center gap-4 my-20 '>
            <div>
                <label htmlFor='ImageHA'>Image</label>
                <input type='image' id='ImageHA' name='ImageHA' className='bg-slate-700 focus:outline-none'></input>
            </div>
            <div>
                <label htmlFor='NameD'>Name</label>
                <input type='text' id='NameD' name='NameD' className='bg-slate-700 focus:outline-none'></input>
            </div>
            <div>
                <label htmlFor='DescriptionD'>Description</label>
                <input type='text' id='DescriptionD' name='DescriptionD' className='bg-slate-700 focus:outline-none'></input>
            </div>
            <div>
                <label htmlFor='HistoryD'>History</label>
                <input type='text' id='HistoryD' name='HistoryD' className='bg-slate-700 focus:outline-none'></input>
            </div>
            <div>
                <label htmlFor=''>Handbooks</label>
                <input type='' id='' name='' className='bg-slate-700 focus:outline-none'></input>
            </div>
            <div>
                <label htmlFor=''>Topics</label>
                <input type='' id='' name='' className='bg-slate-700 focus:outline-none'></input>
            </div>
            <div>
                <label htmlFor=''>VideoConferences</label>
                <input type='' id='' name='' className='bg-slate-700 focus:outline-none'></input>
            </div>
            <div>
                <label htmlFor=''>Altmetrics</label>
                <input type='' id='' name='' className='bg-slate-700 focus:outline-none'></input>
            </div>

 

        </div>
    )
}

export default AddDomain
