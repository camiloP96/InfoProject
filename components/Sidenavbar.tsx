import React from 'react'
import Link from 'next/link';


const sidenavbar = ({}) => {
    return (
      <div className="w-1/4 flex flex-col bg-slate-800 p-20 space-y-14 text-2xl font-bold">
        <div>
        <p>Logo</p>
        </div>
        
        <Link href='/'>
        <button className='rounded-md bg-slate-700 px-10 hover:bg-slate-900'>
        
                <a>Home</a>

        </button>
              </Link>

        <Link href='/users/user'>
        <button className='rounded-md bg-slate-700 px-10 hover:bg-slate-900'>
        
                <a>Profile</a>

        </button>
              </Link>
        <Link href='/About'>
                <button className='rounded-md bg-slate-700 px-10 hover:bg-slate-900'>
                        <a>About</a>
                </button>
        </Link>

      </div>
        
    )
}

export default sidenavbar
