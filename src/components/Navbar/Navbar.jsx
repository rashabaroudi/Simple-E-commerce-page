import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {
  const [showNav,setShowNav]=useState(false);
  const links =[
    {
      id:1,
      name:'home',
    },
    {
      id:2,
      name:'collections',
    },
    {
      id:3,
      name:'about',
    },
  
    {
      id:4,
      name:'contact',
    },
  ]
  return (

   
    <nav className='w-full items-center h-[80px] leading-[80px] mb-10  '>
     
        <div className='flex items-center justify-between'>
              {/* logo */}
          <div className='flex items-center gap-[10px] p-6 '>
            <span className='w-[45px] h-[45px]  bg-fuchsia-400 text-white text-[24px] font-[500] rounded-full flex items-center justify-center'>
              R
            </span>
            <div className='leading-[20px]'>
              <h2 className='text-4xl font-[700] text-fuchsia-950 font-signature'>Rasha</h2>
              <p className='text-[14px] text-fuchsia-400'>web developer</p>
            </div>
            </div>
              {/* navbar menu */}
          <div className='menu'>
            
            <ul className='hidden md:flex'>
            
           
             
          
             {links.map(({id,name}) => (
              <li className='px-4 cursor-pointer  font-thin uppercase hover:scale-125 duration-200'>
                {name}
              </li>
             ))}
             
            </ul>
          </div>
          {/* bureger menu */}

          <div onClick={()=>{setShowNav(!showNav)}} className='z-10 md:hidden '>
           {showNav ? <FaTimes className=" text-white" size={35}/> : <FaBars size={35}/>} 
          </div>
            {showNav && (

                  
                <ul className=' flex flex-col  justify-center w-1/2 items-center absolute bg-gradient-to-b from-purple-100 to-fuchsia-600 text-white top-0 right-0 bottom-0  duration-700 h-screen'>
                 <h2 className=' text-7xl font-[400] text-fuchsia-950 mb-20 font-signature'>Rasha</h2>
             
                {links.map(({id,name}) => (
                      <li className='p-6 border-b border-white w-[100%] text-center  cursor-pointer capitalize text-2xl hover:scale-105 duration-200 '>
                      {name}
                    </li>
                  ))}

                </ul>
            )}
         



          

          
        </div>

    </nav>

  )
}

export default Navbar