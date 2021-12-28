import React,{FC} from 'react'
import Link from 'next/link';
interface Props{

}

const sidenavbar:FC <Props> = ({children,...props}) => {
    return (
      <div className="w-1/4 flex flex-col bg-slate-800 p-20 space-y-14 text-2xl font-bold">
        <div>
        <p>Logo</p>
        </div>
        
        <Link href='/'>
        <button className='rounded-md bg-gray-600 px-10'>
        {children}
                <a>Home</a>

        </button>
              </Link>

        <Link href='/users/user'>
        <button className='rounded-md bg-gray-600 px-10'>
        {children}
                <a>Profile</a>

        </button>
              </Link>

      </div>
        
    )
}

export default sidenavbar
