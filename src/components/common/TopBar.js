import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GiLindenLeaf } from 'react-icons/gi'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

const TopBar = () => {
  return (
    <div className="topbar">
      <Container>
        <Row>
          <Col className="topbar-yazi">
            <GiLindenLeaf size={24} /> <span>Hayat Kadar Şiir</span>
          </Col>
          <Col>
            <ul>
              <li>
                <a href="https://www.facebook.com/karadag.arzu.siir">
                  <FiFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/arzukaradagsiir/">
                  <FiInstagram />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/arzukaradagsiir">
                  <FiTwitter />
                </a>
              </li>

              <li>
                <a href="https://www.youtube.com/channel/UCNOgF_xDiVbJEz4Iw4h5fTw">
                  <FiYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TopBar
