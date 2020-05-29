import React, { Component } from 'react'; //Import components from React
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() { // Navbar imported from Bootstrap
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Breakdown Collection</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Breakdowns</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Add Breakdown</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/info" className="nav-link">How it works!</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}