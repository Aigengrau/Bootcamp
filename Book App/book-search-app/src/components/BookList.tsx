import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BookCard from './BookCard';

interface Book {
  id: string;
  title: string;
  authors: string[];
  category: string;
  thumbnail: string;
}

interface BookListProps {
  books: Book[];
  totalItems: number;
  onLoadMore: () => void;
}

const BookList: React.FC<BookListProps> = ({ books, totalItems, onLoadMore }) => {
  return (
    <Container>
      <h2>Found {totalItems} books</h2>
      <Row>
        {books.map((book) => (
          <Col key={book.id} xs={12} sm={6} md={4} lg={3}>
            <BookCard
              title={book.title}
              authors={book.authors}
              category={book.category}
              thumbnail={book.thumbnail}
            />
          </Col>
        ))}
      </Row>
      <Button onClick={onLoadMore}>Load more</Button>
    </Container>
  );
};

export default BookList;