import React, { Component } from 'react';
import './App.css';
import GamesPage from './GamesPage';
import GamesFormPage from './GamesFormPage';

import { Link, Route } from 'react-router-dom';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
)

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <ActiveLink activeOnlyWhenExact to="/" label="Home" />
          <ActiveLink activeOnlyWhenExact to="/games" label="Games" />
          <ActiveLink activeOnlyWhenExact to="/games/new" label="Add New Game" />
        </div>

        <Route exact path="/games" component={GamesPage} />
        <Route path="/games/new" component={GamesFormPage} />
        <Route path="/game/:_id" component={GamesFormPage} />


      </div>
    );
  }
}

export default App;
