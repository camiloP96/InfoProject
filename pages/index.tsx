import type { NextPage } from 'next'
import Link from 'next/link'
import { ReactElement } from 'react'
import nestedLayout from '../components/Sidenavbar'
import Layout from '../components/layout'
import CardArticle from '../components/CardArticle'
import Handbook from '../components/Handbook'


const Home: NextPage = () => {//nextPage es el tipo de la variable Home, eso se hace con typescrypt
  return (
    <>
       <div className='flex flex-row space-x-5 justify-end'>
                  <button className='bg-gray-500 px-5 rounded-sm hover:bg-gray-600'>LogIn</button>
                  <button className='bg-gray-500 px-5 rounded-sm hover:bg-gray-600'>SignIn</button>
              </div>
    <div className='bg-slate-900 text-white p-20 space-y-10'>
     
        
      <div className='flex flex-raw space-x-30'>
        <Handbook>
        <p>theme1</p>
        </Handbook>

        <Handbook>
          <p>theme2</p>
        </Handbook>

        <Handbook>
          <p>Theme3</p>
        </Handbook>

      </div>
        
      
      <div className='flex flex-raw space-x-30'>

  
      <div>
      <CardArticle>
        <p> Article Page</p>
      </CardArticle>
      </div>  
      

      <CardArticle></CardArticle>
      <CardArticle></CardArticle>
      </div>
      

    </div>

    </>
   
  )
}

export default Home
