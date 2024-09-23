import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const Banner = () => {
  return (
    <section>
    <Carousel data-bs-theme="light" className=''>
    <Carousel.Item className=''>
      <img
        className="d-block w-100 border rounded-top-5"
        src="./image/1.jpeg"
        alt="First slide"
        height="450"
        
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 border rounded-top-5"
        src="./image/2.jpeg"
        alt="Second slide"
        height="450"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 border rounded-top-5"
        src="./image/3.jpeg"
        alt="Third slide"
        height="450"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 border rounded-top-5"
        src="./image/4.jpeg"
        alt="First slide"
        height="450"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </section>
  )
}
