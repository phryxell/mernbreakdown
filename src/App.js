import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import BreakdownsList from "./components/breakdowns-list.component";
import EditBreakdown from "./components/edit-breakdown.component";
import CreateBreakdown from "./components/create-breakdown.component";
import CreateUser from "./components/create-user.component";
import HowItWorks from "./components/how-it-works.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={BreakdownsList} />
      <Route path="/edit/:id" component={EditBreakdown} />
      <Route path="/create" component={CreateBreakdown} />
      <Route path="/user" component={CreateUser} />
      <Route path="/info" component={HowItWorks} />
      </div>
    </Router>
  );
}

export default App;