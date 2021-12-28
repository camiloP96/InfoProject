import React,{FC} from 'react'
import Sidenavbar from './Sidenavbar'

interface Props{
    

}

const Layout:FC<Props> = ({children,...props}) => {
    return (
        <div className= ' bg-slate-900 text-white flex flex-raw '>
            <Sidenavbar/>
          <div className='flex flex-col space-y-6 m-10 justify-evenly'>

           layout {children}
          </div>

          
            
        </div>
    )
}

export default Layout
