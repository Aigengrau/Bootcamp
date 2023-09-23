import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <SearchBar />
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/book/:id" component={BookDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
