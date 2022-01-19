import React from 'react'

const AddTopic = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center gap-4 my-20'>
            <div>
                <label htmlFor='ImageT'>Image</label>
                <input type='image' id='ImageT' name='ImageT' className='bg-slate-700 focus:outline-none'></input>
            </div>

            <div>
                <label htmlFor='TitleT'>Title</label>
                <input type='text' id='TitleT' name='TitleT' className='bg-slate-700 focus:outline-none'></input>
            </div>

            <div>
                <label htmlFor='DescriptionT'>Description</label>
                <input type='text' id='DescriptionT' name='DescriptionT' className='bg-slate-700 focus:outline-none'></input>
            </div>

            <div>
                <label htmlFor=''>Basic references</label>
                <input type='' id='' name='' className='bg-slate-700 focus:outline-none'></input>
            </div>

            <div>
                <label htmlFor=''>Relevant Authors</label>
                <input type='' id='' name='' className='bg-slate-700 focus:outline-none'></input>
            </div>

            <div>
                <label htmlFor=''>Top Journals</label>
                <input type='' id='' name='' className='bg-slate-700 focus:outline-none'></input>
            </div>

            <div>
                <label htmlFor=''>Advance References</label>
                <input type='' id='' name='' className='bg-slate-700 focus:outline-none'></input>
            </div>

            <div>
                <label htmlFor=''>Altmetrics</label>
                <input type='' id='' name='' className='bg-slate-700 focus:outline-none'></input>
            </div>

        </div>
    )
}

export default AddTopic
