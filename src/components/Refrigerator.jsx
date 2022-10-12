import React from 'react'
import fridge1 from './images/fridge1.jpg'
import fridge2 from './images/fridge3.jpg'
import fridge3 from './images/fridge2.jpg'
import washing from './images/washing1.jpg'
import Carousel from 'react-grid-carousel'
  

function Refrigerator() {
    const images = [fridge1,fridge2,fridge3,fridge1,fridge2,fridge3]
  
    return (
   <div className='w-[100%] mx-auto'>
    <Carousel rows={1} cols={5} gap={10} showDots>
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
  )
}


export default Refrigerator
