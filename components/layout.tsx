import React,{FC} from 'react'
import Sidenavbar from './Sidenavbar'

interface Props{
    

}

const Layout:FC<Props> = ({children,...props}) => {
    return (
        <div className= ' bg-slate-900 text-white flex flex-raw- justify-items-center min-h-screen'>
            <Sidenavbar/>
            
          <div className='m-5 p-5' >
        
           layout
            {children}
              
          </div>
        
        </div>
    )
}

export default Layout
