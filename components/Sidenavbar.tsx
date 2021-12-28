import React,{FC} from 'react'
import Link from 'next/link';
interface Props{

}

const sidenavbar:FC <Props> = ({children,...props}) => {
    return (
      <div className="min-h-20% flex flex-col bg-slate-800 p-20">
        <div>

        </div>
        Navbar
        
        {children}
        <Link href='/'>
                <a>Home</a>
              </Link>
      </div>
        
    )
}

export default sidenavbar
