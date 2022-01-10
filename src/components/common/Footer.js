import React from 'react'
import { Dropdown, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">Ana Sayfa</Link>
        </li>
        <li>
          <Link to="/hakkimda">Hakkında</Link>
        </li>
        <li className="footer-siir">
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
        </li>
        <li>
          <Link to="/kitaplar">Kitaplar</Link>{' '}
        </li>
        <li>
          {' '}
          <Link to="/galeri">Galeri</Link>
        </li>
      </ul>
      <div>&copy;2022-Copyright by Arzu Karadag </div>
    </footer>
  )
}

export default Footer
