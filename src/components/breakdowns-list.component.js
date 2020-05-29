import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';

const Breakdown = props => ( //Breakdown implemented as a functional React component
    <tr>
      <td>{props.breakdown.username}</td>
      <td>{props.breakdown.description}</td>
      <td>{props.breakdown.breakdowntime}</td>
      <td><a href={props.breakdown.youtubeurl} target="_blank"><FontAwesomeIcon icon={faYoutube} size="2x"/></a></td>
      <td>{props.breakdown.date.substring(0,10)}</td> 
      <td>
        <Link to={"/edit/"+props.breakdown._id}><FontAwesomeIcon icon={faEdit}/></Link> | <a href="#" onClick={() => { props.deleteBreakdown(props.breakdown._id) }}><FontAwesomeIcon icon={faTrashAlt}/></a>
      </td>
    </tr>
  )  

export default class BreakdownsList extends Component { // Implemented as a Class component
  constructor(props) {
    super(props);

    this.deleteBreakdown = this.deleteBreakdown.bind(this)

    this.state = {breakdowns: []};
  }

  componentDidMount() {
    axios.get('https://mernbreakdown.herokuapp.com/breakdowns')
      .then(response => {
        this.setState({ breakdowns: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteBreakdown(id) {
    axios.delete('https://mernbreakdown.herokuapp.com/breakdowns/'+id)
      .then(response => { console.log(response.data)});
    this.setState({
      breakdowns: this.state.breakdowns.filter(el => el._id !== id) //Filter Array of breakdowns, for every element the page will return all objects except the one who is equal to the given id
    })
  }

  breakdownList() {
    return this.state.breakdowns.map(currentbreakdown => {
      return <Breakdown breakdown={currentbreakdown} deleteBreakdown={this.deleteBreakdown} key={currentbreakdown._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h4>Shared Breakdowns</h4>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Music</th>
              <th>Breakdown</th>
              <th>Youtube</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.breakdownList() }
          </tbody>
        </table>
      </div>
    )
  }
}