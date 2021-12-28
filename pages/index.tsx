import type { NextPage } from 'next'
import Link from 'next/link'
import { ReactElement } from 'react'
import nestedLayout from '../components/Sidenavbar'
import Layout from '../components/layout'
import CardArticle from '../components/CardArticle'
import Handbook from '../components/Handbook'


const Home: NextPage = () => {//nextPage es el tipo de la variable Home, eso se hace con typescrypt
  return (
    
    <div className='bg-slate-900 text-white p-20'>
      
     
      <div className='flex flex-raw '>
        <Handbook>
        <Link href="/content/Handbooks">
        <a>Handbook</a>
        </Link>  
        </Handbook>
      </div>
      
      <div className='flex flex-raw'>

      <CardArticle>
      <Link href="/content/Articles">
        <a> Article Page</a>
      </Link>

      </CardArticle>
      <CardArticle></CardArticle>
      </div>
      

    </div>

    
   
  )
}

export default Home
