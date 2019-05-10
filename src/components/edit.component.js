import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeModelo = this.onChangeModelo.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      model: '',
      brand: '',
      price:'',
      photo: '',
      date: '',
      endDate: '',
      color: '',
      code: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                model: response.data.model, 
                brand: response.data.brand,
                price: response.data.price,
                photo: response.data.photo,
                date: response.data.date,
                endDate: response.data.endDate,
                color: response.data.color,
                code: response.data.code,
              });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeModelo(e) {
    this.setState({
      model: e.target.value
    });
  }
  onChangeBrand(e) {
    this.setState({
      brand: e.target.value
    })  
  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onChangePhoto(e) {
    this.setState({
      photo: e.target.value
    })
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    })
  }

  onChangeEndDate(e) {
    this.setState({
      endDate: e.target.value
    })
  }

  onChangeColor(e) {
    this.setState({
      color: e.target.value
    })
  }

  onChangeCode(e) {
    this.setState({
      code: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();
    const obj = {
      model: this.state.model,
      brand: this.state.brand,
      price: this.state.price,
      photo: this.state.photo,
      date: this.state.date,
      endDate: this.state.endDate,
      color: this.state.color,
      code: this.state.code
    };
    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Modelo:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.model}
                      onChange={this.onChangeModelo}
                      />
                </div>
                <div className="form-group">
                    <label>Brand: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.brand}
                      onChange={this.onChangeBrand}
                      />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.price}
                      onChange={this.onChangePrice}
                      />
                </div>
                <div className="form-group">
                    <label>Photo URL: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.photo}
                      onChange={this.onChangePhoto}
                      />
                </div>
                <div className="form-group">
                    <label>Start Date: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.date}
                      onChange={this.onChangeDate}
                      />
                </div>
                <div className="form-group">
                    <label>End Date: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.endDate}
                      onChange={this.onChangeEndDate}
                      />
                </div>
                <div className="form-group">
                    <label>Color: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.color}
                      onChange={this.onChangeColor}
                      />
                </div>
                <div className="form-group">
                    <label>Code: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.code}
                      onChange={this.onChangeCode}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}