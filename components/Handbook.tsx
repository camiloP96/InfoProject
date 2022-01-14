import React,{FC} from 'react'
import Link from 'next/link'

const Handbook:FC = ({children}) => {
    return (
        <Link href="/content/Handbooks">
        <div className='bg-gray-700 p-20 m-5 rounded-lg cursor-pointer hover:bg-gray-500 w-64 h-64 text-center'>
            <p>Domain</p>
            <a>Description</a>
            {children}
        </div>
        </Link>
    )
}

export default Handbook
