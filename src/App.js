import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render(){
    const style ={
      borderRadius: '10px',
      marginTop: '5px'
    }
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light" style={style}>
            <Link to={'/'} className="navbar-brand">Fullstack Challenge</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">List items</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to this Fullstack Challenge</h2> <br/>
          <p>The idea was to create a CRUD with search function and some other validations.</p>
          <p>This app Frontend was made with ReactJS(using Router, Axios and Bootstrap),  and the backend was made with NodeJS(using Express, MongoDB, Mongoose and Joi for validations).</p>
          <p>It's not completed but i tried my best.</p>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
