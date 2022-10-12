import React from 'react'

function AdminUpload() {
  return (
   <div className=''>
     <div className='w-[50%] mx-auto bg-gray-100 border my-4 rounded-md p-8'>
      <div>
        <form action="">
          <div className='flex flex-col my-4'>
            <label htmlFor="" className='font-300 text-xl'>Product name</label>
            <input type="text" className='bg-transparent border p-2 rounded-sm border-gray-900 outline-none' />
          </div>  
          <div className='flex flex-col my-4'>
            <label htmlFor="" className='font-300 text-xl'>Product Description</label>
            <textarea cols='40' rows='8' className='bg-transparent border p-2 rounded-sm border-gray-900 outline-none'></textarea>
          </div>
          <div className='flex flex-col my-4'>
            <label htmlFor="" className='font-300 text-xl'>Category</label>
            <select name="" id="" className='outline-none p-2 border border-black rounded-sm w-[50%]'>
              <option value="">Refrigerators</option>
              <option value="">Generators</option>
              <option value="">Washing Machines</option>
              <option value="">Kitchen Appliances</option>
              <option value="">Air Conditioners</option>
            </select>
          </div>  
          <div className='flex flex-col my-4'>
            <label htmlFor="" className='font-300 text-xl'>Price</label>
            <input type="text" className='bg-transparent border p-2 rounded-sm border-gray-900 outline-none' />
          </div>  
          <div className='flex flex-col my-4'>
            <label htmlFor="" className='font-300 text-xl'>Image</label>
            <input type="file" className='bg-transparen p-2 rounded-sm outline-none' />
          </div>

         <div className='flex justify-end items-end'><button className='bg-black text-gray-100 p-4 '>UPLOAD</button>  </div>
        </form>
      </div>
      </div>
   </div>
  )
}

export default AdminUpload
