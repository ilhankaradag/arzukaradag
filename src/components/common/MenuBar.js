import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { RiFilePaperLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="menubar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span>Şiir Kadar Hayat</span> &nbsp;
          <RiFilePaperLine size={24} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Ana Sayfa
            </Nav.Link>
            <Nav.Link as={Link} to="/hakkimda">
              Hakkında
            </Nav.Link>
            <NavDropdown title="Şiirler" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/ing-siirler">
                İngilizce Şiirler
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/zazaca-siirler">
                Zazaca Şiirler
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kurtce-siirler">
                Kürtçe Şiirler
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/gurcuce-siirler">
                Gürcüce Şiirler
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/kitaplar">
              Kitaplar
            </Nav.Link>
            <Nav.Link as={Link} to="/galeri">
              Galeri
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MenuBar
