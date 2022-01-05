import React from 'react'
import { Carousel, Row, Col, Container } from 'react-bootstrap'
import sliderList from '../../data/sliderList'

const Slider = () => {
  return (
    <div className="slider carousel-item active ">
      <Container className="slider-cont">
        <Row>
          <Carousel fade indicators={false}>
            {sliderList.map((slider) => (
              <Carousel.Item key={slider.id}>
                <img
                  className="d-block w-100 img-fluid "
                  src={slider.image}
                  alt={slider.title}
                />
                <Carousel.Caption>
                  <h3>{slider.title}</h3>
                  <p>{slider.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Container>
    </div>
  )
}

export default Slider
