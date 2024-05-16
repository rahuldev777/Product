import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Banner() {
  return (
    <>
     <Carousel className='mb-3 mt-2'>
      <Carousel.Item interval={1000}>
        <img src="https://i.pinimg.com/736x/e9/e4/b9/e9e4b906bd5282d31b24fae4876c880c.jpg" text="First slide" className='rounded' width={"100%"} height={"80%"}/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src='https://www.lg.com/levant_en/images/plp-b2c/levanten-mobilephones-hero-1-d.jpg' className='rounded' text="Second slide" width={"100%"} height={"80%"} />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://i.pinimg.com/736x/ea/bd/aa/eabdaadef69a169117a2900e77bfde9f.jpg' className='rounded' text="Third slide" height={"80%"} width={"100%"}/>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
  )
}

export default Banner