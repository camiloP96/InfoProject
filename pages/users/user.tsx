import React from 'react'
import Link from 'next/dist/client/link'

const user = () => {
    return (
        <div className=' grid justify-items-center text-4xl m-10'>
          
           <table>
               <tr>
                   <th scope='row'> Image</th>
                   <td>Random</td>
               </tr>
               <tr>
                   <th scope='row'>Name</th>
                   
                   <td>H</td>

               </tr>
               <tr>
                   <th>Password</th>
                   <td>123</td>

               </tr>
               <tr>
                   <th>rol</th>
                   <td>student</td>
               </tr>
           </table>
            <div className='gap-4 m-5 grid grid-cols-1'>
           <Link href='/content/AddTopic'>
               <button className='bg-slate-600 rounded'>
               <a>Add Topic</a>
               </button>
           </Link>

           <Link href='/content/AddDomain'>
               <button className='bg-slate-600 rounded'>
               <a>Add Domain</a>
               </button>
           </Link>
           </div>
        </div>
    )
}

export default user
