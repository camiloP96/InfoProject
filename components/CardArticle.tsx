import React,{FC} from 'react'


const CardArticle:FC = ({children}) => {
    return (
        <div className='bg-slate-600 rounded-full p-24 m-5 flex text-center items-center justify-center w-64  h-64'>
            <div>
                Theme
                
                <p>Here description</p>

                {children}
            </div>
        </div>
    )
}

export default CardArticle
