import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface BookCardProps {
  title: string;
  authors: string[];
  category: string;
  thumbnail: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, authors, category, thumbnail }) => {
  return (
    <Card>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Category: {category}</Card.Text>
        <Card.Text>Authors: {authors.join(', ')}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;