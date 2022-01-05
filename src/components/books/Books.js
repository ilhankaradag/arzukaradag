import React, { useState } from 'react'
import {
  Button,
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
    </Container>
  )
}

export default Books
