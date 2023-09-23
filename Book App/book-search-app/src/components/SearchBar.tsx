import React from 'react';
import { Form, Button } from 'react-bootstrap';

interface SearchBarProps {
  onSearch: (query: string, category: string, sort: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');
  const [category, setCategory] = React.useState('all');
  const [sort, setSort] = React.useState('relevance');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, category, sort);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Search for books"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="art">Art</option>
          <option value="biography">Biography</option>
          <option value="computers">Computers</option>
          <option value="history">History</option>
          <option value="medical">Medical</option>
          <option value="poetry">Poetry</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control as="select" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
        </Form.Control>
      </Form.Group>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;