import React,{FC} from 'react'
import Sidenavbar from './Sidenavbar'

interface Props{
    

}

const Layout:FC<Props> = ({children,...props}) => {
    return (
        <div className= ' bg-slate-900 text-white flex flex-raw- justify-items-center min-h-screen'>
            <Sidenavbar/>
            
          <div className='flex-1 flex-col space-y-6 m-10'>
             

            <div className=' justify-start'>
           layout {children}
            </div>    
          </div>

          
            
        </div>
    )
}

export default Layout
