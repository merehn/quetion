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
          src="./A1.jpg"
          alt="Image 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="./A2.jpg"
          alt="Image 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="./A3.jpg"
          alt="Image 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="./A4.jpg"
          alt="Image 4"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="./A5.jpg"
          alt="Image 5"
        />
      </Carousel.Item>
    </Carousel>
  </Container>
);

export default CarouselComponent;
