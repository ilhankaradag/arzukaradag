import React, { useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Image,
  Row,
  Table,
} from 'react-bootstrap'
import SectionTitle from '../common/SectionTitle'
import { bookList } from '../../data/bookList'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import Spacer from '../common/Spacer'

const Books = () => {
  const [books, setBooks] = useState(bookList)
  const [activeBook, setActiveBook] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const booksLenght = 5

  const handleStartIndex = (index) => {
    if (index < 0 || index > books.length - booksLenght - 1) return
    setStartIndex(index)
  }

  return (
    <Container>
      <SectionTitle title="Kitaplar" />
      <Row>
        <Col lg={4}>
          <Dropdown size="lg " className="d-lg-none booksDropdown">
            <Dropdown.Toggle className="w-100">
              {' '}
              {books[activeBook].kitapadi}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {books.map((book, index) => (
                <Dropdown.Item
                  key={book.id}
                  onClick={() => setActiveBook(index)}
                >
                  {book.kitapadi}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <ul className="bookList d-none d-lg-block">
            <li>
              <Button
                onClick={() => handleStartIndex(startIndex - 1)}
                disables={startIndex <= 0}
              >
                <FiChevronUp />
              </Button>
            </li>
            {books.map((book, index) => {
              if (index >= startIndex && index <= startIndex + booksLenght)
                return (
                  <li
                    key={book.id}
                    className={index === activeBook ? 'active' : ''}
                    onClick={() => setActiveBook(index)}
                  >
                    {book.kitapadi}
                  </li>
                )
            })}
            <li>
              <Button
                onClick={() => handleStartIndex(startIndex + 1)}
                disables={startIndex > +books.length - booksLenght - 1}
              >
                <FiChevronDown />
              </Button>
            </li>
          </ul>
        </Col>
        <Col lg={5} className="book-image">
          <Image
            src={`../../assets/img/books/${books[activeBook].image}`}
            className="img-fluid "
          />
        </Col>
        <Col lg={3}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan={2}>Kitap Bilgileri</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td width="50%">Kitap Adi</td>
                <td width="50%">{books[activeBook].kitapadi}</td>
              </tr>
              <tr>
                <td>Yazar</td>
                <td>{books[activeBook].yazar}</td>
              </tr>
              <tr>
                <td>Yayin Evi</td>
                <td>{books[activeBook].yayinevi}</td>
              </tr>
              <tr>
                <td>Baski Yili</td>
                <td>{books[activeBook].baskiyili}</td>
              </tr>
              <tr>
                <td>Dil</td>
                <td>{books[activeBook].dil}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Spacer />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div>
                <p>
                  <b>
                    G??ng??r GEN??AY 06.09.2007 Kad??n Dura????ndan ??iirler-2 ba??l??kl??
                    yaz??s??ndan;
                  </b>
                </p>

                <p>
                  <b>Kalbim Tut Beni (2005) Arzu Karada?? </b>
                </p>
                <p>
                  ???Ka?? s??rg??n yedik!/ G????er bir kez daha g????erik/ Mevsimler
                  bahar da olur/ Temmuzlarda yan yana/ Munzur Munzur t??teriz bir
                  g??n!??? diyen Arzu Karada??, 1979 y??l??nda Tunceli???de do??mu?? ve
                  ????renimini Bursa Uluda?? ??niversitesi???nde yapm????t??r.
                  <br /> Arka kapak yaz??s??nda Burhan G??ndo??an: ???Arzu Karada???????n
                  ??iirlerinde bug??n bir tarafa b??rak??lm???? neredeyse unutulmu??,
                  bir halk ??iiri tarz??, bir halk yakar???? a??z?? ve daha ??ok da
                  s??ylence tarz??n?? bulmak m??mk??n. Bununla birlikte g??n??n ??iir
                  anlay??????na da uzak de??il. Arzu Karada??, kendi sesini, kendi
                  solu??unu, kendi i?? k??r??lmalar??n??, kendi i?? ????k????lar??n??
                  ??iirlerine emi??tirebilmi??; y??re??indeki ????k????lar?? tatl??, ince
                  bir dille sunabilmi??tir.??? Belirlemesiyle Arzu Karada?? ??iirinin
                  a????mlamas??n?? yap??yor. Do??du??u kentte ya??anan zorluklar,
                  zorbal??klar, da??larda g??veren umut, gitmelerde an?? olarak
                  b??rak??lan buruk g??l????ler do??al olarak yans??m???? Arzu Karada???????n
                  ??iirine. <br /> ??nsan??m, Bir G??n, Leke, Seni de Yazmal??, Saat
                  Vururken D??rd??, Zaman Ge??tik??e, Adalet, Ya??amak Yine de,
                  Mahk??m, Irak vb. ??iirlerinde, insan?? de??erlerle, toplumsal
                  olaylara duyarl??kla e??ilen ve irdeleyen Arzu Karada???????n
                  a????k-anla????l??r bir yazma tarz?? var. Kendinden ????k????l?? da olsa,
                  s??yledikleri sevecenlikle insanlar?? kucakl??yor. S??n??fsal
                  ayr????may?? ???Sen sar?? sa??l??/Ama/ Yoksul kad??n/ Her sabah
                  tarad??????n/ Hangi yan??n??? dizeleriyle ??zl?? ve incelikli bir
                  bi??imde ifade edebilen Karada???????n y??z??n?? bu y??ne d??nd??rmesi ve
                  gereksiz s??zc??k yinelemelerinden ka????nmas?? ??iirini daha da
                  g????l?? k??laca???? kan??s??nday??m.
                  <br /> Kora yay??nlar??ndan ????kan kitab?? ve ??airini tan??mak,
                  okuyucu i??in bir kazan??m olacak.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Spacer size={50} />
      <Row>
        <Col style={{ textAlign: 'center' }}>
          <Card>
            <Card.Body>
              <Image
                className="img-fluid "
                src="/assets/img/books/Ceyhun-Atuf-Kansu-mektup.png"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Books
