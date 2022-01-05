import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import PageHeader from '../common/PageHeader'
import Spacer from '../common/Spacer'

const PoemKurtce = () => {
  return (
    <div>
      <PageHeader title="Kürtçe Şiirler" />
      <Container className="poem-zaza">
        <Row className="g-5 mt-3">
          <Card lg={6}>
            <Card.Body>
              <Row>
                <Col>
                  <h3>Jinên Biharê</h3>
                  <div>
                    <p>
                      Mirin tuxleya diguhêse raşiya te
                      <br />
                      Ewr diwelidin ji maka asîman
                      <br />
                      Bi zimanê laşê xwe yê sirmeyî
                      <br />
                      Jin biharê şildikin
                    </p>
                    <p>
                      Zarok bi bafirokên xwe re zarve dibin
                      <br />
                      Roj pora xwe şehî dike
                      <br />
                      Di stuyên wan de raweyên fermanî
                      <br />
                      Jin biharê firçe dikin
                    </p>
                    <p>
                      Şopa tiliyên ba
                      <br />
                      û rûyê neynikekê diceribîne wext
                      <br />
                      Bi edeba sandoqên xêlî kirî
                      <br />
                      Jin biharê carî dikin
                    </p>
                    <p>
                      Jiberkirinan destên wê birîndar bûne
                      <br />
                      Maçên wê pîne kirî
                      <br />
                      Bi dilxweşiyên koçber ku ji bîrbûne
                      <br />
                      Jin biharê radixin
                    </p>
                    <p>WERGER: Musa BÊJEVAN</p>
                  </div>
                </Col>
                <Col>
                  <h3>Timî Li Derinan</h3>
                  <div>
                    <p>
                      Meger her wextî efnika xwe
                      <br />
                      di dilê xwe de girtiye
                    </p>
                    <p>
                      Timî li derinan jinek dikene
                      <br />
                      Ji dil e weke goştê xwe yê spî <br />
                      ku di qîşê wê de didapelî
                      <br />
                      Papûrên hov pora wê şehî dikin
                      <br />
                      Timî jinek dema dikene winda dibe
                    </p>
                    <p>
                      Timî li derinan zilamek diazire
                      <br />
                      Destên wî dirêj in weke riha wî
                      <br />
                      Silavê eşqiyayan wî tê dikin ji sermilên wî
                      <br />
                      Timî zilamek dema diazire hez dike
                    </p>
                    <p>
                      Timî li derinan zarokek pûç dibe
                      <br />
                      Bi giriyê xwe yî pêçekî
                      <br />
                      Weke laşên xwe yî ku bêgunehî jê difûre
                      <br />
                      Dema ku xeyalên wî tên kuştin <br />
                      hînî berxwedanê dibe
                    </p>
                    <p>
                      Timî li derinan evînek dimire
                      <br />
                      li hêlên hev ji çav ve ji bedênê ve
                      <br />
                      Arenaya ku tu lê dikevî de <br />
                      navê te sor dimîne
                      <br />
                      Timî li derinan demsal dibe bihar
                    </p>
                    <p>
                      Timî li derinan mirin weke berfende ye
                      <br />
                      Zayîn jî weke rojê ye
                    </p>
                    <p>WERGER: Musa BÊJEVAN</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card lg={6}>
            <Card.Body>
              <Row>
                <Col>
                  <h3>Ji Bo Kesê Nivîskar</h3>
                  <div>
                    <p>
                      Ji bo min peyva bihêle di desten xwe de
                      <br />
                      Hemû wateyên hevokan bişêlîne
                      <br />
                      Ji bo min dilxweşiyê veşêre
                      <br />
                      di peyvên xwe de
                      <br />
                    </p>
                    <p>
                      Dengê min î çilmisî bi spî xêz bike
                      <br />
                      Ruyê min bi berfînan binixumîne
                      <br />
                      Bila sedema min <br />
                      li qiraxa çavên te bisekine
                      <br />
                      Ji bo min peyvan veşêre
                      <br />
                      di desten xwe de
                    </p>
                    <p>WERGER: Musa BÊJEVAN</p>
                  </div>
                </Col>
                <Col>
                  <h3>Dilo Min Bigire </h3>
                  <div>
                    <p>
                      Mirin ne bi dorê ye
                      <br />
                      Xewn bûne kirasên bûkantiyê yên reş
                      <br />
                      Bêrîtî berz e ji çiyayan re
                      <br />
                      Şermixên rêyan
                      <br />
                      cihokên bedena min derkirin
                      <br />
                      Ez birîndar im
                      <br />
                      Ji ber xwe hatime ji bo te
                      <br />
                      Dilo min bigire
                      <br />
                    </p>
                    <p>WERGER: Musa BÊJEVAN</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      <Spacer />
    </div>
  )
}

export default PoemKurtce
