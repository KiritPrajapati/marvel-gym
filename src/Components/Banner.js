import React from "react";
import "../App.css";
import { Carousel } from 'react-bootstrap';

function Banner()  {
    return (
       
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height:450  }}
      src={process.env.PUBLIC_URL + '/banner1.png'}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      style={{ height:450 }}
      src={process.env.PUBLIC_URL + '/banner2.png'}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height:450 }}
      src={process.env.PUBLIC_URL + '/banner3.png'}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>

    )

  
}

export default Banner