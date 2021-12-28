import React,{FC} from 'react'

const Handbook:FC = ({children}) => {
    return (
        <div className='bg-slate-500 p-24 m-5 rounded-lg'>
            <p>Area</p>
            <p>Description</p>
            {children}
        </div>
    )
}

export default Handbook
