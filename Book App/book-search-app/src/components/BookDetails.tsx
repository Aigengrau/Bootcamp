import React from 'react';
import { Card } from 'react-bootstrap';

interface BookDetailsProps {
  title: string;
  authors: string[];
  categories: string[];
  thumbnail: string;
  description: string;
}

const BookDetails: React.FC<BookDetailsProps> = ({ title, authors, categories, thumbnail, description }) => {
  return (
    <Card>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Categories: {categories.join(', ')}</Card.Text>
        <Card.Text>Authors: {authors.join(', ')}</Card.Text>
        <Card.Text>Description: {description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookDetails;