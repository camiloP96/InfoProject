
import Link from 'next/link'
import React from 'react'



const Articles = () => {
    return (
       <>
        <div className='text-center'>
            
            <div className=' my-5 bold '>
            <h1 className='text-4xl'> TITULO </h1>

            </div>

            <p className=' text-2xl'>
                Description ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi corporis rerum similique neque dolore, laudantium, cum, nesciunt dolorum aut mollitia tempora nulla quis explicabo ipsum ad error repudiandae accusantium eum!
            </p>

        </div>
     
        <div className='grid text-2xl grid-cols-2 text-center m-5'>
            <div>
              
                Basic references
            </div>
            <div>
                Relevant Authors
            </div>
            <div>
                Top Journals
            </div>
            <div>
                Advanced references
            </div>

            </div>

            <div className="text-center m-5">
                -
                MAP
                -

            </div>


            <div className='text-center'>
            <button className="bg-slate-800 hover:bg-slate-600 rounded-lg ">
            <Link href="/content/AddArticle">
                <a>Add Article</a>
            </Link>

            </button>
            </div>
      

        </>
    )
}

export default Articles
