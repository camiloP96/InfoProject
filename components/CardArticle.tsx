import React,{FC} from 'react'
import Link from 'next/link'


const CardArticle:FC = ({children}) => {
    return (
        <Link href="/content/Articles">
                <div className='bg-slate-700 rounded-full p-10 m-5 flex text-center items-center justify-center w-64  h-64 cursor-pointer hover:bg-slate-800'>
            <div>
                <p>Theme</p>
                
                <a>Here description</a>

                {children}
            </div>
        </div>

        </Link>
    )
}

export default CardArticle
