import React from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <Container>
        <Row>
          <Col>
            <div className="header-content">
              <h1>{title}</h1>
              <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                  Ana Sayfa
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageHeader
