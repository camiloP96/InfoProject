import React from 'react'

const AddArticle = () => {
    return (
        <div >

      <div className='m-5'>
        <h1 className="text-center text-4x1">Add Article</h1>
        </div>
        <div className=" grid text-center grid-cols-4 gap-5">
        <div>
         <label htmlFor="Name"> Name</label>   
         <input className=' bg-slate-700 focus:outline-none' type="Text" name="Name" required  ></input>
         </div>

         <div>
             <label htmlFor="AuthorName"> Author Name</label>
             <input type="text" id="AuthorName" name="AuthorName" className='bg-slate-700 focus:outline-none'></input>
         </div>

         <div>
         <label htmlFor="Abstract">Abstract</label>
         <input type="Text" id="Abstract" name="Abstract"  className='bg-slate-700 focus:outline-none' required></input>
         </div>

         <div>
         <label htmlFor="Theme">Theme</label>
         <input type="text" id="Theme" name="Theme" className=' bg-slate-700 focus:outline-none' required></input>
         </div>

         <div>
         <label htmlFor="Keywords">Keywords</label>
         <input type="text" id="Keywords" name="Keywords" className=' bg-slate-700 focus:outline-none ' required ></input>
         </div>

         <div>
         <label htmlFor="Journal">Journals</label>
         <input type="text" id="Journal" name="Journal" className=" bg-slate-700 focus:outline-none" required></input>
         </div>

         <div>
         <label htmlFor="DOI">DOI</label>
         <input type="text" id="DOI" name="DOI" className=" bg-slate-700 focus:outline-none" required></input>           
         </div>

         <div>
         <label htmlFor="Link">Link</label>
         <input type="url" id="Link" name="Link" className=' bg-slate-700 focus:outline-none' required></input>
         </div>

         <div>
             <label htmlFor="Type"> Type</label>
             <input type='text' id="Type" name='Type' className='bg-slate-700 focus:outline-none'></input>
         </div>

         <div>
         <button className="bg-slate-800 hover:bg-slate-600 m-5 w-1/4 ">
             Submit
         </button>
         </div>
         </div>
           
        
        </div>
    )
}

export default AddArticle
