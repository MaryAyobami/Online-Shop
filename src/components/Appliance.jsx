import React from 'react'
import Appliances from './Appliances'
import Refrigerator from './Refrigerator'
import WashingM from './WashingM'
import oven from './images/oven1.jpg'
import oven1 from './images/oven2.jpg'
import oven2 from './images/oven3.jpg'
import kettle from './images/kettle.jpg'
import Carousel from 'react-grid-carousel'

function Appliance() {
    const images = [kettle,oven, oven1, kettle,oven2,
        oven2, kettle,
        oven, kettle,
    ]
  return (
   <div>
    <div className='w-[90%] mx-auto text-3xl text-bold my-4 text-gray-800 text-center'>
        Shop by category
    </div>
    <div className='grid grid-cols-2 mt-4 gap-2 w-[90%] mx-auto lg:grid-cols-6 lg:mt-8'>
      <Appliances name='Appliances'/>
      <Appliances name='Refrigerators' content= <Refrigerator/> />
      <Appliances name='Washing Machines' />
      <Appliances name='Freezer'/>
      <Appliances name='Generator'/>
      <Appliances name='Air Conditioner'/>
    </div>
    <div>
    <Carousel rows={1} cols={5} gap={10}>
        {images.map((img, i) => {
         return (
        <Carousel.Item key={i}>
          <div>
          <img src={img} alt="" width='100%' height='100vh' />
          </div>
        </Carousel.Item>
      );
    })}
        </Carousel>
    </div>
   </div>
  )
}

export default Appliance
