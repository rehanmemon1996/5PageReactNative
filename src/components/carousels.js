import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "../images/home-bg.jpg";
import pic2 from "../images/g-img-2.jpg";
import pic3 from "../images/g-img-3.jpg";





class Slider extends React.Component {
    render(){
        return (
          <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
          height={500}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
          height={500}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Third slide"
          height={500}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        );

    }
}

export default Slider;