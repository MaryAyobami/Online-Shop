import React from 'react'
import Appliance from './Appliance'
import Appliances from './Appliances'
import freezer from './images/freezer1.jpg'
import washing from './images/washing1.jpg'
import lg from './images/lg.png'
import thermoccol from './images/thermocool.png'
import nexus from './images/nexus.png'

function Home() {
  return (
    <div >
  <section className='flex justify-center w-[90%] mx-auto items-center h-[90vh]'>
  <div className='hidden lg:block lg:w-[70%] lg:mt-8'>
   <img src={washing} alt="" className='w-[100%]'/>
   </div>
   <div>
    <h1 className='text-6xl '>Your ideal electronics store</h1>
    <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet similique facilis vel sunt mollitia rem dolorum numquam omnis quisquam.</p>
   </div>
  </section>
  <section className='h-[80vh]'>
    <Appliance/>
  </section>
 <section className='w-[90%] mx-auto my-8'>
  <h1 className=' text-center text-3xl text-gray-800'>Our Partners</h1>
  <div className='flex flex-row justify-between w-[80%] mx-auto '>
    <img src={lg} alt="" className='w-[20%] h-[10%]' />
    <img src={nexus} alt=""  className='w-[20%] h-[10%]'/>
    <img src={thermoccol} alt=""  className='w-[20%] h-[10%]' />
  </div>
 </section>
    </div>
  )
}

export default Home