import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
export default class Index extends Component {

  constructor(props) {
      super(props);
      this.onChangeSearch = this.onChangeSearch.bind(this);
      this.state = {business: [], search: ''};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/business')
        .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/business')
         .then(response => {
        this.setState({ business: response.data });
        })
        .catch(function (error) {
        console.log(error);
        })
        }

    tabRow(){
      return this.state.business.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    onChangeSearch(e){
      this.setState({
        search: e.target.value
      });
      this.state.search === this.searchRow(e) ? console.log('Found') : console.log('Not found') 
    }

    searchRow(object) {
        return <TableRow obj={object} />;
    }

    render() {
      return (
        <div>
          <h3 align="center">Phone List</h3>
          <input type="text" placeholder="Search.." onChange={this.onChangeSearch} />
          <button>Go</button>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Model</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Photo URL</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Color</th>
                <th>Code</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }