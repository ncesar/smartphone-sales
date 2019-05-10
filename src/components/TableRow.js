import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.model}
          </td>
          <td>
            {this.props.obj.brand}
          </td>
          <td>
            {this.props.obj.price}
          </td>
          <td>
            {this.props.obj.photo}
          </td>
          <td>
            {this.props.obj.date}
          </td>
          <td>
            {this.props.obj.endDate}
          </td>
          <td>
            {this.props.obj.color}
          </td>
          <td>
            {this.props.obj.code}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;