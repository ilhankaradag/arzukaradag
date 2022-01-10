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
                    Güngör GENÇAY 06.09.2007 Kadın Durağından Şiirler-2 başlıklı
                    yazısından;
                  </b>
                </p>

                <p>
                  <b>Kalbim Tut Beni (2005) Arzu Karadağ </b>
                </p>
                <p>
                  “Kaç sürgün yedik!/ Göçer bir kez daha göçerik/ Mevsimler
                  bahar da olur/ Temmuzlarda yan yana/ Munzur Munzur tüteriz bir
                  gün!” diyen Arzu Karadağ, 1979 yılında Tunceli’de doğmuş ve
                  öğrenimini Bursa Uludağ Üniversitesi’nde yapmıştır.
                  <br /> Arka kapak yazısında Burhan Gündoğan: “Arzu Karadağ’ın
                  şiirlerinde bugün bir tarafa bırakılmış neredeyse unutulmuş,
                  bir halk şiiri tarzı, bir halk yakarış ağzı ve daha çok da
                  söylence tarzını bulmak mümkün. Bununla birlikte günün şiir
                  anlayışına da uzak değil. Arzu Karadağ, kendi sesini, kendi
                  soluğunu, kendi iç kırılmalarını, kendi iç çıkışlarını
                  şiirlerine emiştirebilmiş; yüreğindeki çıkışları tatlı, ince
                  bir dille sunabilmiştir.” Belirlemesiyle Arzu Karadağ şiirinin
                  açımlamasını yapıyor. Doğduğu kentte yaşanan zorluklar,
                  zorbalıklar, dağlarda göveren umut, gitmelerde anı olarak
                  bırakılan buruk gülüşler doğal olarak yansımış Arzu Karadağ’ın
                  şiirine. <br /> İnsanım, Bir Gün, Leke, Seni de Yazmalı, Saat
                  Vururken Dördü, Zaman Geçtikçe, Adalet, Yaşamak Yine de,
                  Mahkûm, Irak vb. şiirlerinde, insanî değerlerle, toplumsal
                  olaylara duyarlıkla eğilen ve irdeleyen Arzu Karadağ’ın
                  açık-anlaşılır bir yazma tarzı var. Kendinden çıkışlı da olsa,
                  söyledikleri sevecenlikle insanları kucaklıyor. Sınıfsal
                  ayrışmayı “Sen sarı saçlı/Ama/ Yoksul kadın/ Her sabah
                  taradığın/ Hangi yanın” dizeleriyle özlü ve incelikli bir
                  biçimde ifade edebilen Karadağ’ın yüzünü bu yöne döndürmesi ve
                  gereksiz sözcük yinelemelerinden kaçınması şiirini daha da
                  güçlü kılacağı kanısındayım.
                  <br /> Kora yayınlarından çıkan kitabı ve şairini tanımak,
                  okuyucu için bir kazanım olacak.
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
