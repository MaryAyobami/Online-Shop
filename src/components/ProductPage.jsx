import React from 'react'
import oven from './images/oven1.jpg'
import {FaStar} from 'react-icons/fa'

function ProductPage() {
  return (
   <div className='w-screen'>
     <div className='flex flex-col lg:flex-row w-[80%] mx-auto'>
      <div className=''>
        <img src={oven} alt="" className='w-[100%] lg:w-[70%]'/>
      </div>
      <div className='lg:flex-1 lg:mt-6 '>
        <h1 className='text-3xl my-1 font-semibold'>Microwave oven</h1>
        <h3 className='text-xl my-1'>50,000</h3>
        <div className='flex my-1'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quos error omnis obcaecati odit eaque earum sequi itaque reprehenderit saepe hic, sapiente excepturi dolores ullam ipsum quidem. Quod iure a dolorum eum mollitia odio porro delectus animi ex distinctio expedita numquam fuga, corporis aspernatur in hic, eligendi, ut debitis veniam!</p>
        <div><p>Quantity</p></div>
        <p className='m-4 p-4 border border-black  hover:bg-black hover:text-gray-100 text-center'>Add to cart</p>
      </div>
    </div>
   </div>
  )
}

export default ProductPage
