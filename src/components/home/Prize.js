import React from 'react'
import { Accordion, Col, Container, Image, Row, Table } from 'react-bootstrap'
import resim from '../../assets/img/DSCF4305.png'
import SectionTitle from '../common/SectionTitle'

const Prize = () => {
  return (
    <Container>
      <Row>
        <SectionTitle title="Şiir Ödülleri" />

        <Col md={5}>
          <Image src={resim} className="img-fluid" />
        </Col>
        <Col md={5}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Ödül 1</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>Ödül Adı</td>
                      <td>Ali Rıza Ertan Şiir Ödülü</td>
                    </tr>
                    <tr>
                      <td>Dosya Adı</td>
                      <td>Bir Baktım Yarın </td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Ödül 2</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>Ödül Adı</td>
                      <td>Yılmaz Güney Şiir Ödülü</td>
                    </tr>
                    <tr>
                      <td>Şiir Adı</td>
                      <td>Güneşin Tutundukları </td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Ödül 3</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>Ödül Adı</td>
                      <td>Kaygusuz Abdal Şiir Ödülü</td>
                    </tr>
                    <tr>
                      <td>Şiir Adı</td>
                      <td>Kemiksizdir Dili Zamanın </td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Ödül 4</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>Ödül Adı</td>
                      <td>Ceyhun Atuf Kansu Şiir Ödülü</td>
                    </tr>
                    <tr>
                      <td>Dosya Adı</td>
                      <td>Dervişâne - Gün Sonu Şiirleri </td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

export default Prize
