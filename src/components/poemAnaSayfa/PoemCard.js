import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const PoemCard = ({ icon, title, description }) => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col md={2}>{icon}</Col>
          <Col md={10}>
            <h3>{title}</h3>
            <p>{description}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default PoemCard
