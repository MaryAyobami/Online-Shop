import React,{useState} from 'react'
import {FaBars, FaCartPlus, FaSearch, FaTimes} from 'react-icons/fa'

function Header() {
    
    const [nav,setNav] = useState(false)
  
    return (
        <div className='bg-gray-100 top-0 w-screen sticky z-[999]'>
        <div className='bg-white- h-[15vh] flex flex-row px-12 items-center justify-between  mx-auto'>
           <div className='italic text-4xl text-black'>
               Electronics
           </div>
           <div className='hidden text-black text-[1.2em] lg:flex lg:justify-between '>
               <a href="" className='mx-6 hover:border-b-2 border-black  hover:text-gray-500'>HOME</a>
               <a href=""  className='mx-6 hover:border-b-2 border-black  hover:text-gray-500'>PRODUCTS</a>
               <a href=""  className='mx-6 hover:border-b-2 border-black  hover:text-gray-500'>SUPPORT</a>
               <div className='flex bg-white rounded-lg shadow-sm px-2'><input type="text" placeholder='search'  className='rounded-lg outline-none'/><FaSearch className='m-2'/></div>
                <div className='px-4 py-2'><FaCartPlus /></div>
           </div>
           <div className='lg:hidden text-3xl text-black cursor-pointer'>
               <FaBars onClick={()=>setNav(!nav)}/>
           </div>
       </div>
       <div className={ nav ? 'fixed top-0 left-0 w-[100%]   bg-black text-gray-200 z-10 duration-300 flex flex-col justify-between items-center p-4' : 'fixed top-0 left-[-100%] w-[100%] bg-black z-10  flex flex-col justify-between items-center p-4 duration-300'}>
               <p className='flex  w-[90%] justify-end items-end text-3xl text-white'><FaTimes onClick={()=>setNav(false)}/></p>
               <a href="" className='mx-6 border-b-2 border-black p-4  hover:text-gray-500'>HOME</a>
               <a href=""  className='mx-6 border-b-2 border-black p-4 hover:text-gray-500'>PRODUCTS</a>
               <a href=""  className='mx-6 border-b-2 border-black p-4 hover:text-gray-500'>SUPPORT</a>
               
           </div>
      </div>
  )
}

export default Header
