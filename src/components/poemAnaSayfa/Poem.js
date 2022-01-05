import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../common/SectionTitle'
import PoemCard from './PoemCard'
import poem from '../../data/poem.js'

const Poem = () => {
  return (
    <Container className="poem">
      <Row className="g-5">
        <SectionTitle title="Şiirler" />
        {poem.map((poem) => (
          <Col key={poem.id}>
            <PoemCard
              title={poem.title}
              description={poem.description}
              icon={poem.icon}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Poem
