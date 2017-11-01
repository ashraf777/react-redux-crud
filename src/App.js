import React, { Component } from 'react';
import './App.css';
import GamesForm from './GamesForm';
import GamesPage from './GamesPage';

import { Link, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/games">Games</Link>
          <Link className="item" to="/games/new">Add New Game</Link>
        </div>

        <Route exact path="/games" component={GamesPage} />
        <Route exact path="/games/new" component={GamesForm} />


      </div>
    );
  }
}

export default App;
