import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import about from '../../assets/img/hakkimda-siir.jpg'
const Hakkimda = () => {
  return (
    <Container>
      <Row className="g-3">
        <Col>
          <Image src={about} className="img-fluid" alt="hakkimda" />
        </Col>
        <Col lg={6}>
          <h3>Arzu KARADAĞ </h3>
          <div>
            <p>
              Dersim doğumlu. Yönetim ve Organizasyon yüksek lisansı mezunu, Ses
              ve İz Yayınları koordinatör ve editörüdür. Uluslararası lojistik
              sektöründe yönetici olarak çalışmaktadır. Mobbingin İş Tatmini
              Üzerindeki Etkileri adlı araştırma kitabı yayıma hazırlanmaktadır.
            </p>
            <p>
              Bir Baktım Yarın dosyası Ali Rıza Ertan Şiir Ödülüne, Güneşin
              Tutundukları şiiri Yılmaz Güney Şiir Ödülüne, Kemiksizdir Dili
              Zamanın şiiri Kaygusuz Abdal Şiir Ödülüne, Dervişâne - Gün Sonu
              Şiirleri dosyası Ceyhun Atuf Kansu Şiir Ödülüne değer görülmüştür.
              Şiirleri; Baki Yiğit tarafından İngilizce ye, Musa Bêjevan
              tarafından Kürtçe ye, Mesut Asmên Keskin tarafından Zazaca ya
              çevrilmiştir. Amerika da düzenlenen 2017 Pushcart ödülüne Nâzım
              Hikmet Şiir Festivali adına Richard Krawiec tarafından aday
              gösterilmiştir.
            </p>
          </div>
        </Col>
        <Col lg={12}>
          {' '}
          <h3>Arzu KARADAĞ </h3>
          <div>
            <p>
              Was born in 1979 in Tunceli (Dersim), Turkey. She graduated from
              the Uludağ University, Faculty of Economics, Labour Economics and
              Industrial Relations and have a master's degree in management.She
              is working in the logistics sector; she is the editor and
              coordinator of Ses and İz publications. Then her works took part
              in the literature and art magazine. his poems translated into
              Kurdish and English.{' '}
            </p>
            <p>
              <em>Prizes:</em>
              <br />
              Bir Baktım Yarın, Ali Rıza Ertan Poetry Award [2011], <br />
              Güneşin Tutundukları, Yılmaz Güney Poetry Award [2012],
              <br /> Kemiksizdir Dili Zamanın, Kaygusuz Abdal Poetry Award
              [2013],
              <br /> Dervişâne, Ceyhun Atuf Kansu Poetry Award [2015].
            </p>
          </div>
        </Col>
        <Col lg={12}>
          {' '}
          <h3>Arzu KARADAĞ </h3>
          <div>
            <p>
              Arzu Karadağ di sala 1979 an de li Dêrsimê ji dayik bûye. Li
              zanîngeha Uludaxê beşa Xebatên Aborî û Pêwendiyên Pîşesazî
              qedandiye. Li ser beşa Rêveberî û Rêxistinê lisansa bilind kiriye.
              Li beşa lojîstîkê de dixebite. Koordînator û edîtora weşanên Ses
              ve İz ê ye.{' '}
            </p>
            <p>
              Bi helbesta xwe ya bi navê Bir Baktım Yarın (Min Dît Carek Sibe)
              ve xelata helbestê ya Alî Riza Ertan, bi helbesta Güneşin
              Tutundukları (Pêvegirtiyên Rojê) ve xelata helbestê ya Yılmaz
              Güney, bi helbesta Kemiksizdir Dili Zamanın (Zimanê Demê yê
              Bêhestî) ve xelata helbestê ya Kaygusuz Abdal, bi xebata
              Dervîşâne- Gün Sonu Şiirleri (Helbestên Dawiya Rojê- Derwîşane) ve
              xelata helbestê ya Ceyhun Atuf Kansu bi dest xistiye. Helbestên wê
              ji alî Bakî Yiğit ve wergerî Îngilîzî û ji ali Mûsa Bêjevan ve
              wergerî Kurmancî bûne. Li Emerîka 2017 Xelata Pushcart li ser navê
              Festîvala Helbesta Nazim Hikmet ji alî Richard Krawiec ve namzet
              hatiye nişan dan.{' '}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Hakkimda
