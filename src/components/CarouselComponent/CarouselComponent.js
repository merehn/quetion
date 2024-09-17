import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Nav, Container } from 'react-bootstrap';
import './CarouselComponent.css';

const CarouselComponent = () => (
  <Container fluid className="p-0 position-relative">
    {/* Text Overlay */}
    <div className="carousel-text-overlay">
      <Nav.Link as={Link} to="/questions">
        الأسئلة
      </Nav.Link>
    </div>

    <Carousel interval={3000} controls={true} indicators={true} className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="./img1.webp"
          alt="Image 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="./img3.jpg"
          alt="Image 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="./img5.jpg"
          alt="Image 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="./img7.webp"
          alt="Image 4"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="./img4.jpg"
          alt="Image 5"
        />
      </Carousel.Item>
    </Carousel>
  </Container>
);

export default CarouselComponent;
