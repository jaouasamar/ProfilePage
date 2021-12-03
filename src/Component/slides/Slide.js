import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Slide.css'

const Slide = () => {
    return (
        <div>
            <Carousel fade className="size">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./sfax1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./sfax2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
  
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./sfax3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Slide
