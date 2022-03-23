import React from "react";
import "../App.css";
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
       
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height:450 }}
      src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&w=1000&q=80"
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      style={{ height:450 }}
      src="https://wallpaperaccess.com/full/804836.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height:450 }}
      src="https://media-cdn.tripadvisor.com/media/photo-s/16/31/38/e6/fitness-center-inside.jpg"
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